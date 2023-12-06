import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../LandingPage/Header';
import {jwtDecode, JwtPayload} from 'jwt-decode'
import { useNavigate} from "react-router-dom"

type FoodItem = {
  userId: string;
  mealType: string;
  date: string;
  foodName: string;
  calories: number;
}

type Params = {
  mealType: string;
  formattedDate: string;
}

interface JwtPayloadWithUserId extends JwtPayload {
    userId: string; // Change the type accordingly if userId is not a string
}

let userId: string;

const SearchFood: React.FC = () => {
  const navigate=useNavigate();
  const {mealType, formattedDate } = useParams<Params>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const meal = mealType!;
  const date = formattedDate!;

  console.log(meal);
  console.log(formattedDate);
  console.log(mealType);
  console.log(date);

  const token = localStorage.getItem('token');
  if(token) {
    const decoded: JwtPayloadWithUserId = jwtDecode(token) as JwtPayloadWithUserId;
    userId = decoded.userId;
  }

  const searchFood = async () => {
    try {
      setSearchResults([]);
      if (searchTerm !== "") {
        const response = await axios.get('https://trackapi.nutritionix.com/v2/search/instant', {
          headers: {
            'x-app-id': '5694690a',
            'x-app-key': 'e2cae258b8e23d9a3619ad82895254ff',
          },
          params: {
            query: searchTerm,
            branded: false
          },
        });

        console.log(response);


        if (response.data.common.length === 0) {
          setError("No results found!");
        }

        setSearchResults(response.data.common.slice(0, 5));
      } else {
        setError("Please provide a phrase to search for!");
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError("Error fetching search results!");
    }
  };

  const handleClick = async (food: any) => {
    const response = await axios.post(`https://trackapi.nutritionix.com/v2/natural/nutrients/`, 
        {
            query: food.food_name
        },
        {
            headers: {
                'Content-type': 'application/json',
                'x-app-id': '5694690a',
                'x-app-key': 'e2cae258b8e23d9a3619ad82895254ff'
            },
    });


    const selectedFoodObj = {
        userId: userId,
        foodName: food.food_name,
        date: date,
        mealType: meal,
        calories: response.data.foods[0].nf_calories
      };

      console.log(date);

    setSelectedFood(selectedFoodObj);
  };

  const handleSave = async () => {
    if(selectedFood) {
        try {
          const res = await axios.post("http://localhost:3000/addfood", selectedFood);
          console.log(res);
          if (res.status === 200 ) {
            navigate("/addfood");
          }
        } catch (error: any) {
          setError("Error saving the values!");
        }
      } else {
        setError("Please select a to save!");
      }
  };

  return (
    <div>
      <Header />
      <h2>Search {mealType} Food</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setError("");
        }}
        placeholder={`Search for ${mealType} food...`}
      />
      <button onClick={searchFood}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h3>Search Results:</h3>
        <ul>
          {searchResults.map((item, index) => (
            <li key={index} onClick={() => handleClick(item)}>
              {item.food_name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {selectedFood && (
          <div>
            <h3>Selected Food: {selectedFood.foodName}</h3>
            <p>Calories: {selectedFood.calories}</p>
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </div>

      <form>
        <input type="text" placeholder="Add Quantity" />
      </form>
    </div>
  );
};

export default SearchFood;
