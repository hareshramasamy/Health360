import React, { FormEvent, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./login.css"


function Login() {

    const history=useNavigate();

    interface FormData {
      email: string;
      password: string;
    }

    interface FormErrors {
      emailError: boolean;
      passwordError: boolean;
    }

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
      });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        emailError: false,
        passwordError: false,
    });
      
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrorMessage("");
        setFormErrors({ ...formErrors, [`${name}Error`]: false });
    };

    const validateForm = () => {
      let valid = true;
      const newErrors: FormErrors = { ...formErrors };
  
      for (const key in formData) {
        if (formData[key as keyof FormData] === "") {
          newErrors[`${key}Error` as keyof FormErrors] = true;
          valid = false;
        }
      }
  
      setFormErrors(newErrors);
      return valid;
    };

    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if(validateForm()) {
          try {
            const res = await axios.post("http://localhost:3000/user/sign-in", formData);
            if (res.status === 200 && res.data.token) {
              // Store the token in local storage upon successful login
              localStorage.setItem("token", res.data.token);
              history("/dashboard");
            }
          } catch (error: any) {
            setErrorMessage("Invalid email or password. Please try again.");
          }
        } else {
          setErrorMessage("Please fill in all required fields.");
        }
    

      };

    // async function submit(e: any){
    //     e.preventDefault();

    //     try{

    //         await axios.post("http://localhost:3001/sign-in",formData)
    //         .then(res=>{
    //             if(res.data=="exist"){
    //                 history("/home",{state:{id:email}})
    //             }
    //             else if(res.data=="notexist"){
    //                 alert("User have not sign up")
    //             }
    //         })
    //         .catch(e=>{
    //             alert("wrong details")
    //             console.log(e);
    //         })

    //     }
    //     catch(e){
    //         console.log(e);

    //     }

    // }


    return (

        <div className="login-btn">
          <div className= "logo-div"><img className= "logo-login" src={process.env.PUBLIC_URL + "/Health360LOGO.png"} alt="Logo"></img></div>
          <div className="vl"></div>
            <h2 className="name">Health360°</h2>
            <h1 className = "login-heading">Login</h1>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}


            <form className = "sign-up-form" onSubmit={handleLogin}>
                <input className={formErrors.emailError ? "error" : ""}  name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Email" />
                <input className={formErrors.passwordError ? "error" : ""}  name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
                <input className="btn-login" type="submit" value="Login" />
            </form>

            <br />
            <p className = "sign-up-para">Don't have an account?</p>

            <Link  className= "signup-link" to="/signup">Signup</Link>

        </div>
    )
}

export default Login




