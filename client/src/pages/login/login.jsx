import React, { useState } from "react";
import "./login.scss"
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
const Login = () =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const hanldeSubmit = async(e) =>{
        e.preventDefault();
        try {
          const res =  await newRequest.post("auth/login",{username,password});
          localStorage.setItem("currentUser",JSON.stringify(res.data))
          navigate("/");
        } catch (err) {
            setError(err.response.data)
            
        }
        
    }
    return (
        <div className="login"> 
            <form onSubmit={hanldeSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="">User name</label>
                <input type="text" onChange={e=>setUsername(e.target.value)} name="username" placeholder="User name" />
                <label >Password</label>
                <input type="password" name="password" onChange={e=>setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && error}
            </form>
         </div>
    )
}

export default Login