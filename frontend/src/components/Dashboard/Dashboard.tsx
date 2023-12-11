import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import './Dashboard.css'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import axios from 'axios';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

interface JwtPayloadWithUserId extends JwtPayload {
    userId: string;
  }
  
let userId: string;

function Dashboard() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [goalCalories, setGoalCalories] = useState(Number);
    const [totalCalories, setTotalCalories] = useState(Number);
    const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(Number);

    const token = localStorage.getItem('token');

    if (token) {
        const decoded: JwtPayloadWithUserId = jwtDecode(token) as JwtPayloadWithUserId;
        userId = decoded.userId;
    }

    async function fetchUserProfile(userId: string) {
        try {
          const userProfileResponse = await axios.get(`http://localhost:3000/user-profile-by-id/${userId}`);
          if(userProfileResponse) {
            if(userProfileResponse.data[0].fitnessGoal === "Weight-Gain") {
                setGoalCalories(Math.round(userProfileResponse.data[0].calorieSurplus * 100) / 100);
            } else if(userProfileResponse.data[0].fitnessGoal === "Weight-Loss") {
                setGoalCalories(Math.round(userProfileResponse.data[0].calorieDeficit * 100) / 100);
            } else {
                setGoalCalories(Math.round(userProfileResponse.data[0].maintenanceCalorie * 100) / 100);
            }
          }
          return userProfileResponse.data;
        } catch (error) {
          throw new Error("Failed to fetch user profile");
        }
    }

    async function fetchCaloriesConsumed(userId: string, selectedDate: Date | null) {
        try {
            let formattedDate = '';
            if (selectedDate) {
                const timezoneOffset = selectedDate.getTimezoneOffset();
                const adjustedDate = new Date(selectedDate.getTime() - timezoneOffset * 60000);
                formattedDate = adjustedDate.toISOString().split('T')[0];
            }
            const caloriesConsumedResponse = await axios.get(`http://localhost:3000/food/${userId}/${formattedDate}`);
            console.log(caloriesConsumedResponse);
            setTotalCalories(caloriesConsumedResponse ? Math.round(caloriesConsumedResponse.data * 100) / 100 : 0);
            return caloriesConsumedResponse.data;
        } catch (error) {
          throw new Error("Failed to fetch food");
        }
    }

    async function fetchCaloriesBurned(userId: string, selectedDate: Date | null) {
        try {
            let formattedDate = '';
            if (selectedDate) {
                const timezoneOffset = selectedDate.getTimezoneOffset();
                const adjustedDate = new Date(selectedDate.getTime() - timezoneOffset * 60000);
                formattedDate = adjustedDate.toISOString().split('T')[0];
            }
            const caloriesBurnedResponse = await axios.get(`http://localhost:3000/totalExerciseCalories/${userId}/${formattedDate}`);
            console.log(caloriesBurnedResponse);
            setTotalCaloriesBurned(caloriesBurnedResponse ? Math.round(caloriesBurnedResponse.data * 100) /100 : 0);
            return caloriesBurnedResponse.data;
        } catch (error) {
          throw new Error("Failed to fetch food");
        }
    }

    useEffect(() => {
        fetchUserProfile(userId);
        fetchCaloriesConsumed(userId, selectedDate);
        fetchCaloriesBurned(userId, selectedDate);
    }, [selectedDate]);


    // const userName = "Haresh";


    const foodData = {
        labels: ['Calories consumed', 'Calories remaining'],
        datasets: [{
         label: 'Food tracker',
         data: [totalCalories, goalCalories - totalCalories],
         backgroundColor: ['grey', 'white'],
         borderColor: ['grey', 'white']
        }]
     }

     const exerciseData = {
        labels: ['Calories burned', 'Calories to be burned'],
        datasets: [{
          label: 'Exercise tracker',
          data: [totalCaloriesBurned, 300],
          backgroundColor: ['grey', 'white'],
          borderColor: ['grey', 'white'],
        }],
      }
 
     const options = {}

     const handlePreviousDay = () => {
        if (selectedDate) {
          const previousDay = new Date(selectedDate);
          previousDay.setDate(selectedDate.getDate() - 1);
          setSelectedDate(previousDay);
        }
      };
    
      const handleNextDay = () => {
        if (selectedDate) {
          const nextDay = new Date(selectedDate);
          nextDay.setDate(selectedDate.getDate() + 1);
          setSelectedDate(nextDay);
        }
      };
    
      const CustomDatePickerInput = ({ value, onClick }: any) => (
        <div className="custom-datepicker-input">
          <input type="text" value={value} readOnly={true} onClick={onClick} />
          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
        </div>
      );

    return (
        <div className="dashboard">
            <Header />
            <div className='dashboardpic'>
                <div className="date-bar">
                    <h3 className="select-date">Your summary for:</h3>
                    <div className="arrow-icon" onClick={handlePreviousDay}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>

                    <div className="datepicker-container">
                        <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        customInput={<CustomDatePickerInput />}
                        />
                    </div>
                    <div className="arrow-icon" onClick={handleNextDay}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
                <div className='summarycontent'>
                    <div className='summary-header'>
                        <h1>Your food summary</h1>
                        <div className='summarydata'>
                            <div id='doughnut-canvas'/>
                            {/* <img src={process.env.PUBLIC_URL + "/piechart.png"} height='200px' width='200px'></img> */}
                            <div className='chart'><Doughnut data = {foodData} options = {options}/></div>
                            
                            <div className='summary-details'>
                                <p>Calorie goal: {goalCalories} </p>
                                <p>Calories consumed: {totalCalories}</p>
                                <p>Calories remaining: {Math.round((goalCalories - totalCalories) * 100) / 100}</p>
                            </div>
                        </div>
                        <a href='/addFood'><button className='trackbutton'>Track your food</button></a>
                    </div>
                    <div className='summary-header'>
                        <h1>Your workout summary</h1>
                        <div className='summarydata'>
                            <div className='chart'><Doughnut data = {exerciseData} options = {options}/></div>
                            <div className='summary-details'>
                                <p>Target Calories to be burned: 300</p>
                                <p>Calories burned: {totalCaloriesBurned}</p>
                                <p>Calories to be burned: {Math.round((300 - totalCaloriesBurned) * 100) / 100}</p>
                            </div>
                        </div>
                        <a href='/addExercise'><button className='trackbutton'>Track your workout</button></a>
                    </div>
                </div>
                <div className='discover'>
                    <p className='discover-header'>Discover</p>
                    <ul className='discover-container'>
                        <a href='/dietPlan'><li className='discover-items items'>Diet plans</li></a>
                        <a href='/workoutPlan'><li className='discover-items items'>Workout plans</li></a>
                        <a href='/blogPage'><li className='discover-items items'>Blog your journey</li></a>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard