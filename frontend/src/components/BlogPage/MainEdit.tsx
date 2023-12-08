import React from 'react';
import BlogHeading from './BlogHeading';
import Body from './Body';
import "./BlogPage.css";
import CreatePost from './CreatePost';
import CreateBlogHeading from './CreateBlogHeading';
import EditPost from './EditPost';
import EditBlogHeading from './EditBlogHeading';


const MainEdit = () => {
  return (
    <div className='Main'>
      <div className='CreatePost'>
        <EditBlogHeading />
        <EditPost />
      </div>
    </div>
  );
};

export default MainEdit;