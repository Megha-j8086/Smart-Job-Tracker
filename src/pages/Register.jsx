import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();
 
  const [name,setName] =useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignup = () => {

  
    const user = { name,email, password };

    

    alert("Account Created ");

    navigate("/log"); // go to login after signup
  };

  return (
    <div className="auth-container">
    <div className="auth-box">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

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

      <button className="auth-btn" onClick={handleSignup}>
        Signup
      </button>
      <p className="switch-auth">
     Already have an account? 
     <span onClick={()=>navigate("/log")}> Login</span>
    </p>
    </div>
    </div>
  );
}

export default Signup;