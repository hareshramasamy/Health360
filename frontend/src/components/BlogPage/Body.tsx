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

return (
    <div className="post " style={{'flexDirection':'column'}}>
      {data.map((blog:any) => (
        <div key={blog._id} className="post">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p>Author: {blog.author}</p>
          <p>Create Date: {blog.createDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Body