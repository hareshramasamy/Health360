import {useLocation} from 'react-router-dom';
import Header from './LandingPage/Header';

function Dashboard (){
    const userName = "Haresh";

    return (
        <div className="dashboard">
            <Header />
            <h1>Hello {userName} and welcome to the dashboard</h1>
        </div>
    )
}

export default Dashboard