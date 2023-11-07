import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSignup = () => {
        const newUser = {
            email,
            password,
        };

        // Retrieve existing registered users from local storage or initialize an empty array
        const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        // Check if the email is already registered
        const userExists = existingUsers.some((user) => user.email === email);

        if (userExists) {
            alert("Email is already registered. Please use a different email.");
        } else {
            // Add the new user to the existing users
            existingUsers.push(newUser);

            // Update the registered users in local storage
            localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

            alert("Signup successful! You can now login.");
            navigate("/login");

            // Clear the input fields
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign up</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <div className="password-input">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
            </div>
            <button onClick={handleSignup} style={{ backgroundColor: "white" }}>
                Signup
            </button>
            <br />
            <Link to="/login">Already have an account? Login here</Link>
        </div>
    );
}

export default Signup;
