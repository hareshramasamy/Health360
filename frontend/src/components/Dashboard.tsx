import {useLocation} from 'react-router-dom';

function Dashboard (){
    const location=useLocation()

    return (
        <div className="dashboard">
            <h1>Hello {location.state.id} and welcome to the dashboard</h1>
        </div>
    )
}

export default Dashboard