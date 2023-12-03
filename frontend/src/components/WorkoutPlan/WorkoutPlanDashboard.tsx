import React from "react"
import "./WorkoutPlanDashboard.css"

const WorkoutPlanDashboard = () => {
    return (
        <div>
            <header className="navbar">
                <div className="top-logo">
                    <img className= "logo" src={process.env.PUBLIC_URL + "/Health360LOGO.png"} alt="Logo"></img>
                    <h2 className="name">Health360</h2>
                </div>
            </header>
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