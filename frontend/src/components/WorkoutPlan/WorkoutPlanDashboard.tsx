import React from "react"
import "./WorkoutPlanDashboard.css"
import Header from "../LandingPage/Header"
import {useNavigate} from 'react-router-dom';

const WorkoutPlanDashboard = () => {
    let navigate = useNavigate(); 
    const routeChange = (path: any) =>{  
      navigate(path);
    }
    return (
        <div>
            <Header />
            <img src={process.env.PUBLIC_URL + "/workoutplanImage.jpg"} alt="healthpic" className="workoutpic"></img>
            <div className="workoutplan-container">
                <p className="workoutplan">Workout Plan</p>
                <div>
                    <button className="options" onClick={() => routeChange('weightloss')}>Weight Loss</button>
                    <button className="options" onClick={() => routeChange('weightgain')}>Weight Gain</button>
                    <button className="options" onClick={() => routeChange('maintainweight')}>Maintain Weight</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default WorkoutPlanDashboard