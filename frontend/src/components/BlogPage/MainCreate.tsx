import React from 'react';
import BlogHeading from './BlogHeading';
import Body from './Body';
import "./BlogPage.css";
import CreatePost from './CreatePost';
import CreateBlogHeading from './CreateBlogHeading';

const MainCreate = () => {
  return (
    <div className='Main'>
      <div className='CreatePost'>
        <CreateBlogHeading />
        <CreatePost />
      </div>
    </div>
  );
};

export default MainCreate;