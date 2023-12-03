import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice'; // Adjust the path to your authSlice
import { useNavigate } from 'react-router-dom'; 
import { RootState } from '../../store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const history = useNavigate(); // Get the history object

  const handleLogout = () => {
    dispatch(logout()); // Dispatches the logout action to update the state
    history('/'); // Redirects the user to the login page after logout
  };

  return (
    <header className="navbar">
      <div className="top-logo">
        <img className="logo" src={process.env.PUBLIC_URL + "/Health360LOGO.png"} alt="Logo" />
        <h2 className="name">Health360</h2>
      </div>
      <nav>
        {isLoggedIn ? (
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
    </header>
  );
};

export default Header;