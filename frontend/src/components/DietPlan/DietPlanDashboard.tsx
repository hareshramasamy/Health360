import React from "react"
import "./DietPlanDashboard.css"
import Header from "../LandingPage/Header"

const DietPlanDashboard = () => {
    return (
        <div>
            <Header />
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