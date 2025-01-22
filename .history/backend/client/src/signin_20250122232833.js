import React, { useState } from 'react';
import './signin.css';  // Custom CSS for styling

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here, like sending the data to the backend
        setMessage('Login successful!');  // Simulated response for now
    };

    return (
        <div className="signin-container">
            {/* Left Section: Logo */}
            <div className="left-section">
                <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
            </div>

            {/* Right Section: Login Form */}
            <div className="right-section">
                <div className="login-box">
                    <h2 className="text-center">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="input-container">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="submit-btn">Sign In</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default SignIn;
