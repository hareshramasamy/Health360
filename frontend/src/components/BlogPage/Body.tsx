import React from "react";
import data from "./blog"

function Body() {
    const blogs = data.map((blog) => (
            <div className="post" key={blog.created}>
                <div className="image">
                    <img className= "bloglogo" src={process.env.PUBLIC_URL + blog.image } alt="Logo" ></img>
                </div>
                <div className="texts">
                    <h2>{blog.title}</h2>         
                    <p>{blog.content}</p>
                    <h4>Created By: {blog.author}</h4>       
                    <span>{blog.created}</span>
                    <div className="buttons">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                        {/* <button onClick={() => handleEdit(blog)}>Edit</button>
                        <button onClick={() => handleDelete(blog.created)}>Delete</button> */}
                    </div>
                </div>
            </div>
    ));

return (
    <div>
        {blogs}
    </div>
)
}

export default Body