import { useLocation } from 'react-router-dom';
import Header from '../LandingPage/Header';
import './Dashboard.css'

function Dashboard() {
    const userName = "Haresh";

    return (
        <div className="dashboard">
            <Header />
            <div className='summary'>
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
                        <button className='trackbutton'>Track your food</button>
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
                        <button className='trackbutton'>Track your workout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard