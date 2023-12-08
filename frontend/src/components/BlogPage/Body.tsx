import React, { useEffect, useState } from "react";
import data from "./blog"
import { useNavigate } from "react-router-dom";
import "./BlogPage.css";
import { FaEdit, FaTrash } from 'react-icons/fa';



function Body() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('http://localhost:3000/blogs');
                const res = await result.json();
                setData(res);
            } catch (error) {
                console.log('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p style={{ color: 'white' }}>Loading...</p>;
    }

    const currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");

    const handleDelete = async (blogId: string) => {
        try {
            const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = async (blogId: string) => {
        navigate(`/edit/${blogId}`);
    };

    const toggleExpand = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        const target = event.currentTarget.closest('.post');
        if (target) {
            target.classList.toggle('expanded');
        }
    };

    return (
        <div className="post-container">
            {data.map((blog: any) => (
                <div key={blog._id} className="post">
                    <h2 onClick={toggleExpand}>{blog.title}</h2>
                    <div>
                        {blog.description}
                        <p>Author: {blog.author}</p>
                        <p>Created At: {currentDate}</p>
                    </div>
                    <div className="buttons">
                        {/* <button className="edit" onClick={() => handleEdit(blog._id)}>
                            <FaEdit /> Edit
                        </button> */}
                        <FaEdit className="edit" onClick={() => handleEdit(blog._id)} />
                        {/* <button className="delete" onClick={() => handleDelete(blog._id)}>
                            <FaTrash /> Delete
                        </button> */}
                        <FaTrash className="delete" onClick={() => handleDelete(blog._id)} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Body;
