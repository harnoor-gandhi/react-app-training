import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage({ showName }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = () => {
    const emailInput = email;
    const passwordInput = password;

    // Check if the email and password matchuser
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const user = registeredUsers.find((u) => u.email === emailInput && u.password === passwordInput);

    if (user) {
      const isLogged = true;
      localStorage.setItem("Userloggedin", JSON.stringify(isLogged));
      showName(emailInput, isLogged);
      alert("Details are correct");
      navigate("/"); // redirect to the homepage
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Sign in</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Not a member? <Link to="/signup">Click here to sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
