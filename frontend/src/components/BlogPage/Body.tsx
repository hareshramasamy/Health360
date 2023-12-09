import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPage.css";
// import { FaEdit, FaTrash } from 'react-icons/fa';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface User {
    name: string;
    email: string;
    password: string;
    _id: string;
}

function Body() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();

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

    interface JwtPayloadWithUserId extends JwtPayload {
        userId: string;
    }

    let userId = 'string';
    const token = localStorage.getItem('token');
    if (token) {
        const decoded: JwtPayloadWithUserId = jwtDecode(token) as JwtPayloadWithUserId;
        userId = decoded.userId;
    }

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
                        <p>Author: {blog.userId.firstName}</p>
                        {console.log(blog)}
                        <p>Created At: {currentDate}</p>
                    </div>
                    
                    {userId && blog.userId._id === userId ? (
                        <>
                        {console.log(userId)}
                        {console.log(blog.userId._id)}
                            {/* <FaEdit className="edit" onClick={() => handleEdit(blog._id)} />
                            <FaTrash className="delete" onClick={() => handleDelete(blog._id)} /> */}
                        </>
                    ) : (
                        <>
                            <span className="disabled-button">Edit</span>
                            <span className="disabled-button">Delete</span>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Body;
