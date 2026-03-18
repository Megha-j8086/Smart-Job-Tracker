
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();   

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

   
    if(email === "admin@gmail.com" && password === "1234"){

      alert("Login Successful ");

      navigate("/dashboard"); 

    } else {
      alert("Invalid Credentials ");
    }
  };

  return (
    <div className="auth-container">
    <div className="auth-box">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button className="auth-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
    </div>
  );
}

export default Login;