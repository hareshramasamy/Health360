import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  return (
    <div className = "navigation-bar">
        <div>
            <a href ="/dashboard">MY HOME</a>
        </div>
        <div>
            <a href ="/addFood">FOOD</a>
        </div>
        <div>
            <a href ="/addExercise">EXERCISE</a>
        </div>
        <div>
            <a href ="blogs">BLOG</a>
        </div>
        <div>
            <a href ="/dietPlan">DIET PLAN</a>
        </div>
        <div>
            <a href ="/workoutPlan">WORKOUT PLAN</a>
        </div>
        <div>
        <Link to="/update-profile">UPDATE PROFILE</Link>
      </div>
    </div>
  );
};

export default Header;