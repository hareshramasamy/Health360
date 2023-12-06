import React from "react"
import "./DietPlanDashboard.css"
import Header from "../LandingPage/Header"
import {useNavigate} from 'react-router-dom';

const DietPlanDashboard = () => {
    let navigate = useNavigate(); 
    const routeChange = (path: any) =>{  
      navigate(path);
    }

    return (
        <div>
            <Header />
            <img src={process.env.PUBLIC_URL + "/dietplanImage.jpg"} alt="healthpic" className="dietpic"></img>
            <div className="dietplan-container">
                <p className="dietplan">Diet Plan</p>
                <div>
                    <button className="options" onClick={() => routeChange('vegetarian')}>Vegetarian</button>
                    <button className="options" onClick={() => routeChange('nonvegetarian')}>Non-Vegetarian</button>
                    <button className="options" onClick={() => routeChange('vegan')}>Vegan</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default DietPlanDashboard