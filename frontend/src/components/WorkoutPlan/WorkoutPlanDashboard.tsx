import React from "react"
import "./WorkoutPlanDashboard.css"
import Header from "../LandingPage/Header"

const WorkoutPlanDashboard = () => {
    return (
        <div>
            <Header />
            <img src={process.env.PUBLIC_URL + "/workoutplanImage.jpg"} alt="healthpic" className="workoutpic"></img>
            <div className="workoutplan-container">
                <p className="workoutplan">Workout Plan</p>
                <div>
                    <button className="options">Weight Loss</button>
                    <button className="options">Weight Gain</button>
                    <button className="options">Maintain Weight</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default WorkoutPlanDashboard