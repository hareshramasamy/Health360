import React from 'react';
import BlogHeading from './BlogHeading';
import Body from './Body';
import Landing from "../LandingPage/Landing";
import "./BlogPage.css";

const Main = () => {
  return (
    <div className='Main'>
      <BlogHeading />
      <Body />
    </div>
  );
};

export default Main;