
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({registeredUser}) {

  const navigate = useNavigate();   

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
       if (!registeredUser) {
      alert("No account found. Please Sign Up");
      navigate("/register");
      return;
    }

    if (
      email !== registeredUser.email ||
      password !== registeredUser.password
    ) {
      alert("Invalid credentials. Please Sign Up");
      navigate("/register");
      return;
    }
    alert("Login Successful");
    navigate("/dashboard");
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