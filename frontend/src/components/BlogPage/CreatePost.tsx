import React, { useState, ChangeEvent, FormEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Redirect } from 'react-router-dom';
import { redirect,useNavigate} from "react-router-dom";
// import { redirect } from "react-router-dom";

interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  // const [files, setFiles] = useState<File[]>([]);
const navigate = useNavigate();
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  async function createNewPost(ev: FormEvent) {
    // let  navigate = useNavigate();
    // const 
    ev.preventDefault();
    const data = {
      title: title,
      summary: summary,
      description: content,
      author : author,

    };
  

    console.log(data);
    // data.set('file', files[0]);

    try{
      const response = await fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      console.log('RESPONSE', response)
      if(response.status === 200){
        // redirect("/blogs");
        navigate("/blogs");
      }
    }
    catch(error){
      console.log(error);
    }

    // console.log(await response.json());
  }

  return (
    <form className="createpost" onSubmit={createNewPost}>
      {/* <h1>Create Post</h1> */}
      <br />
      {/* <input
        type="text"
        className="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
      /> */}
      <input
        type="text"
        className="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
        required
      /> 
      <textarea
        placeholder="Content"
        value={content}
        onChange={(ev: ChangeEvent<HTMLTextAreaElement>) => setContent(ev.target.value)}
        required
        rows={4} // Adjust the number of rows as needed 
        cols={100} // Adjust the number of columns as needed
        ></textarea>
      <input
        type="author"
        placeholder={"Author"}
        value={author}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setAuthor(ev.target.value)}
        required
      />

      <button className = "submit" type="submit">Create Post</button>

      {/* <ReactQuill
        theme="snow"
        placeholder={"Content"}
        value={content}
        onChange={(newValue: string) => {
          
          setContent(newValue)
        }}
        modules={modules}
        formats={formats}
      /> */}
    </form>
      );
};

export default CreatePost;