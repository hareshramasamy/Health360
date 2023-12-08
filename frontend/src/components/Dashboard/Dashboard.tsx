import { useLocation } from 'react-router-dom';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import './Dashboard.css'

function Dashboard() {
    const userName = "Haresh";

    return (
        <div className="dashboard">
            <Header />
            <div className='dashboardpic'>
                <div className='summarycontent'>
                    <div className='summary-header'>
                        <h1>Your daily food summary</h1>
                        <div className='summarydata'>
                            <img src={process.env.PUBLIC_URL + "/piechart.png"} height='200px' width='200px'></img>
                            <div className='summary-details'>
                                <p>Calorie goal: 2000 </p>
                                <p>Calories consumed: 1560</p>
                                <p>Calories remaining: 440</p>
                            </div>
                        </div>
                        <a href='/addFood'><button className='trackbutton'>Track your food</button></a>
                    </div>
                    <div className='summary-header'>
                        <h1>Your daily workout summary</h1>
                        <div className='summarydata'>
                            <img src={process.env.PUBLIC_URL + "/piechart.png"} height='200px' width='200px'></img>
                            <div className='summary-details'>
                                <p>Target Calories to be burned:  380</p>
                                <p>Calories burned: 100</p>
                                <p>Calories to be burned: 280</p>
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