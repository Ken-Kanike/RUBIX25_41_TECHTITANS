// src/SignIn.js
import React from 'react';
import './signin.css'; // Optional: your custom CSS for extra styling

const SignInPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left Section: Logo */}
                <div className="col-md-6 d-flex justify-content-center align-items-center bg-primary text-white">
                    <img 
                        src="/path-to-your-logo.png" 
                        alt="Logo" 
                        className="logo img-fluid" 
                        style={{ maxWidth: '80%' }} 
                    />
                </div>

                {/* Right Section: Sign-in Form */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Sign In</h2>

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

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary w-100">
                                    Sign In
                                </button>
                            </form>

                            <div className="mt-3 text-center">
                                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
