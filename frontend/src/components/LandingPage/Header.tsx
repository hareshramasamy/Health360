import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import Navigation from './Navigation';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const history = useNavigate();
  let username = "Haresh";

  const {t} = useTranslation('common');
  const handleLogout = () => {
    dispatch(logout());
    history('/');
  };

  return (
    <div>
      <header className="navbar">
          <a href={isLoggedIn ? "/dashboard" : "/"} className="top-logo">
            <img className="logo" src={process.env.PUBLIC_URL + "/Health360LOGO.png"} alt="Logo" />
            <h2 className="name">{t('title')}</h2>
          </a>
        <nav>
          {isLoggedIn ? (
            <div className="nav-items">
              <p>Hi, {username}</p>
              <a href="/" onClick={handleLogout}>
                {t('logout.button.label')}
              </a>
            </div>
          ) : (
            <a href="/login">Login</a>
          )}
        </nav>
      </header>
      <div>
        {isLoggedIn ? (
          <Navigation />
        ) : (<div></div>)}
      </div>
    </div>

  );
};

export default Header;