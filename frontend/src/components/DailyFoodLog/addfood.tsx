import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../LandingPage/Header';
import './addFood.css';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface MealData {
  mealType: string;
  calories: number;
  foodName: string;
  date: string;
  userId: string;
}

interface JwtPayloadWithUserId extends JwtPayload {
  userId: string;
}

let userId: string;

const AddFood: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [mealData, setMealData] = useState<MealData[][]>([]);

  const token = localStorage.getItem('token');
  if (token) {
    const decoded: JwtPayloadWithUserId = jwtDecode(token) as JwtPayloadWithUserId;
    userId = decoded.userId;
  }

  let navigate = useNavigate();

  const routeChange = (mealType: string) => {
    let formattedDate = '';
    if (selectedDate) {
      const timezoneOffset = selectedDate.getTimezoneOffset();
      const adjustedDate = new Date(selectedDate.getTime() - timezoneOffset * 60000);
      formattedDate = adjustedDate.toISOString().split('T')[0];
    }
    let path = `/searchfood/${mealType}/${formattedDate}`;
    navigate(path);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchMealData = async () => {
      if (!selectedDate) return;

      try {
        const timezoneOffset = selectedDate.getTimezoneOffset();
        const adjustedDate = new Date(selectedDate.getTime() - timezoneOffset * 60000);
        const formattedDate = adjustedDate.toISOString().split('T')[0];

        const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
        const promises = mealTypes.map(async (type) => {
          try {
            const response = await axios.get<MealData[]>(
              `http://localhost:3000/food/${userId}/${type}/${formattedDate}`
            );
            const mealDataByType = response.data.map((meal) => ({ ...meal, userId }));
            return mealDataByType;
          } catch (error) {
            console.error(`Error fetching ${type} data:`, error);
            return [];
          }
        });

        const mealData = await Promise.all(promises);
        setMealData(mealData);
      } catch (error) {
        console.error('Error fetching meal data:', error);
        setMealData([]);
      }
    };

    fetchMealData();
  }, [selectedDate]);

  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

  return (
    <div>
      <Header />
      <div className="date-bar">
        <h3 className="select-date">Your food log for:</h3>
        <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="yyyy-MM-dd" />
      </div>
      <div className="meal-container">
        {mealTypes.map((type) => {
          const mealTypeArray = mealData.find((meal) => meal[0]?.mealType === type);
          return (
            <div className="meal-section" key={type}>
              <div className="meal-heading">
                <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                <button onClick={() => routeChange(type)}>+</button>
              </div>
              <div className="food-details">
                <div className="heading">
                  <div className="food-name">Food Name</div>
                  <div className="calories">Calories</div>
                </div>
                {mealTypeArray &&
                  mealTypeArray.map((meal, mealIndex) => (
                    <div className="food-item" key={mealIndex}>
                      {meal && (
                        <>
                          <div className="food-name">{meal.foodName}</div>
                          <div className="calories">{meal.calories} Calories</div>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );  
};

export default AddFood;

