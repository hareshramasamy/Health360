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
      author :"Boron"

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
      <input
        type="text"
        placeholder={"Title"}
        value={title}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setSummary(ev.target.value)}
      />
      {/* <input
        type="file"
        placeholder={"Image"}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => setFiles(ev.target.files as File[])}
      /> */}
      <ReactQuill
        theme="snow"
        placeholder={"Content"}
        value={content}
        onChange={(newValue: string) => setContent(newValue)}
        modules={modules}
        formats={formats}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// interface CreatePostProps {}

// const CreatePost: React.FC<CreatePostProps> = () => {
//   const [title, setTitle] = useState<string>("");
//   const [summary, setSummary] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [files, setFiles] = useState<File[]>([]);

//   const modules = {
//     toolbar: [
//       [{ 'header': [1, 2, false] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//       ['link', 'image'],
//       ['clean']
//     ],
//   };

//   const formats = [
//     'header',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image'
//   ];

//   async function createNewPost(ev: FormEvent) {
//     ev.preventDefault();

//     const data = new FormData();
//     data.set('title', title);
//     data.set('summary', summary);
//     data.set('content', content);
//     data.set('file', files[0]);

//     const response = await fetch("http://localhost:3000/post", {
//       method: "POST",
//       body: data,
//     });

//     console.log(await response.json());
//   }

//   return (
//     <form className="createpost" onSubmit={createNewPost}>
//       <input
//         type="text"
//         placeholder={"Title"}
//         value={title}
//         onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
//       />
//       <input
//         type="summary"
//         placeholder={"Summary"}
//         value={summary}
//         onChange={(ev: ChangeEvent<HTMLInputElement>) => setSummary(ev.target.value)}
//       />
//       <input
//         type="file"
//         placeholder={"Image"}
//         onChange={(ev: ChangeEvent<HTMLInputElement>) => setFiles(ev.target.files || [])}
//       />
//       <ReactQuill
//         theme="snow"
//         placeholder={"Content"}
//         value={content}
//         onChange={(newValue: string) => setContent(newValue)}
//         modules={modules}
//         formats={formats}
//       />
//       <button type="submit">Create Post</button>
//     </form>
//   );
// };

// export default CreatePost;



// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";



// export default function CreatePost() {
//     const [title, setTitle] = useState(' ');
//     const [summary, setSummary] = useState(' ');
//     const [content, setContent] = useState(' ');
//     const [files, setFiles] = useState([]);

//     const modules = {
//         toolbar: [
//           [{ 'header': [1, 2, false] }],
//           ['bold', 'italic', 'underline','strike', 'blockquote'],
//           [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//           ['link', 'image'],
//           ['clean']
//         ],
//     };

//     const formats = ['header',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image'
//   ]
//    client/src/Pages/CreatePost.js
//   async function createNewPost(ev) {
//     const data = new FormData();
//     data.set('title', title);
//     data.set('summary', summary);
//     data.set('content', content);
//     data.set('file', files[0]);
//     ev.preventDefault();
//     const response = await fetch("http://localhost:3000/post", {
//         method: "POST",
//         body: data,
//         });
//     console.log(await response.json());
//   }
//     return (
//             <form className="createpost" onSubmit={createNewPost}>
//                 <input  type="text" 
//                         placeholder={"Title"}
//                         value={title} 
//                         onChange={ev => setTitle(ev.target.value)} />
//                 <input type="summary" 
//                        placeholder={"Summary"}
//                        value={summary}
//                        onChange={ev => setSummary(ev.target.value)} />
//                 <input type="file"
//                        placeholder={"Image"}
//                     //    value={files}
//                        onChange={ev => setFiles(ev.target.files) } />
//                 <ReactQuill theme="snow" 
//                             placeholder={"Content"} 
//                             value={content} 
//                             onChange={newValue => setContent(newValue)}
//                             modules={modules} 
//                             formats={formats} />
//                 <button type="submit">Create Post</button>
//             </form>
//     )
// }
