import {useLocation} from 'react-router-dom';
import Header from './LandingPage/Header';

function Dashboard (){
    const location=useLocation()

    return (
        <div className="dashboard">
            <Header />
            <h1>Hello {location.state.id} and welcome to the dashboard</h1>
        </div>
    )
}

export default Dashboard