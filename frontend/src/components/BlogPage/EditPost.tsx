// EditPost.js
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams,useNavigate } from "react-router-dom";

const EditPost = ( match:any ) => {
    
    let{id} = useParams();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    
    // const blogId = match?.params?.id; // Extract the blog ID from the URL
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`,
        {
            method: "GET",
            headers: {
              'Content-Type': 'application/json'
            },
          }
        );

        const data = await response.json();
        console.log(data);
        setTitle(data.title);
        setSummary(data.summary);
        setContent(data.description);
        setAuthor(data.author);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching post data:", error);
      }
    };

    fetchPostData();
  }, [id]);

  const updatePost = async (ev:any) => {
    ev.preventDefault();
    const data = {
      title,
      summary,
      description: content,
      author,
    };

    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        console.log("Post updated successfully!");
        navigate('/blogs')
        // Redirect or navigate to the blog details page
      } else {
        console.error("Error updating post:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  if (loading) {
    return <p>Loading post...</p>;
  }
  return (
    <form className="createpost" onSubmit={updatePost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="author"
        placeholder="Author"
        value={author}
        onChange={(ev) => setAuthor(ev.target.value)}
      />
      <ReactQuill
        theme="snow"
        placeholder="Content"
        value={content}
        onChange={(newValue) => setContent(newValue)}
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
