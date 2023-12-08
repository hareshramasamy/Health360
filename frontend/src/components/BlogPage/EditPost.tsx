// EditPost.js
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams,useNavigate } from "react-router-dom";

const EditPost = () => {
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    function stripHtmlTags(htmlString: string) {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    }
      
  
    useEffect(() => {
      const fetchPostData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/blogs/${id}`);
  
          if (!response.ok) {
            throw new Error(`Error fetching post data: ${response.statusText}`);
          }
  
          const data = await response.json();
          setTitle(data.title);
          setSummary(data.summary);
          setContent(stripHtmlTags(data.description));
          setAuthor(data.author);
          setLoading(false);
        } catch (error: any) {
            setLoading(false);
            setError(error.message);
        }
      };
  
      fetchPostData();
    }, [id]);
  
    const updatePost = async (ev: React.FormEvent<HTMLFormElement>) => {
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
  
        if (!response.ok) {
          throw new Error(`Error updating post: ${response.statusText}`);
        }
  
        console.log("Post updated successfully!");
        // Redirect or navigate to the blog details page
        navigate('/blogs');
    } catch (error: any) {
        console.error("Error updating post:", error);
        setError(error.message);
    }
    };
  
    if (loading) {
      return <p>Loading post...</p>;
    }
  
    return (
        <div className="editpost-container">
        {error && <p className="error">{error}</p>}
        <form className="editpost-form" onSubmit={updatePost}>
      {/* <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      /> */}
      <input
        type="text"
        className="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
        required
      /> 
      {/* <input
        type="summary"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      /> */}

      {/* <ReactQuill
        theme="snow"
        placeholder="Content"
        value={content}
        onChange={(newValue) => setContent(newValue)}
      /> */}
      <textarea
        placeholder="Content"
        value={content}
        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setContent(ev.target.value)}
        required
        rows={4} // Adjust the number of rows as needed 
        cols={100} // Adjust the number of columns as needed
        ></textarea>

        {/* <input
        type="author"
        placeholder="Author"
        value={author}
        onChange={(ev) => setAuthor(ev.target.value)}
      /> */}
      <input
        type="author"
        placeholder={"Author"}
        value={author}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setAuthor(ev.target.value)}
        required
      />
      <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
