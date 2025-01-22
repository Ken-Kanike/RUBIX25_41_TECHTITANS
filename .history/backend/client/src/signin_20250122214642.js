import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signin.css';

const SignInPage = () => {
    return (
        <div className="signin-container d-flex">
            {/* Left Section: Logo */}
            <div className="left-section d-flex justify-content-center align-items-center">
                <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
            </div>

            {/* Right Section: Login Form */}
            <div className="right-section d-flex flex-column justify-content-center align-items-center">
                <div className="login-box">
                    <h2 className="text-center mb-4">Sign In</h2>
                    <form>
                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <button type="submit" className="btn btn-primary w-100">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
