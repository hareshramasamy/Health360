import React, { useEffect, useState } from "react";
import data from "./blog"

function Body() {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              // Make your API call here
            const result = await fetch('http://localhost:3000/blogs')
            const res = await result.json();
            setData(res);

            } catch (error) {
              console.log('Error fetching data:', error);
            } finally {
              // Set loading to false whether the request was successful or not
              setLoading(false);
            }
        };
        fetchData();
}, []);
if(loading) {
    return <p style={{'color':'white'}}>Loading...</p>;
}


const currentDate = new Date().toISOString().slice(0, 19).replace("T", " "); 


return (
    <div className="post " style={{'flexDirection':'column'}}>
      {data.map((blog:any) => (
        <div key={blog._id} className="post">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p>Author: {blog.author}</p>
          <p>Created At: {currentDate}</p>
          <div className="buttons">
            <button className="edit" onClick={() => handleEdit(blog._id)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body