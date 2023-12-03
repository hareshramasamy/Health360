import React from "react"
import "./DietPlanDashboard.css"

const DietPlanDashboard = () => {
    return (
        <div>
            <header className="navbar">
                <div className="top-logo">
                    <img className= "logo" src={process.env.PUBLIC_URL + "/Health360LOGO.png"} alt="Logo"></img>
                    <h2 className="name">Health360</h2>
                </div>
            </header>
            <img src={process.env.PUBLIC_URL + "/dietplanImage.jpg"} alt="healthpic" className="dietpic"></img>
            <div className="dietplan-container">
                <p className="dietplan">Diet Plan</p>
                <div>
                    <button className="options">Vegetarian</button>
                    <button className="options">Non-Vegetarian</button>
                    <button className="options">Vegan</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default DietPlanDashboard