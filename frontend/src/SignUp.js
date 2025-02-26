import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/success');
    };

    return (
        <div className="signup-background">
            <div className="signup-container">
                <form onSubmit={handleSubmit}>
                    <div className="signup-input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="signup-input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Create a password" required />
                    </div>
                    <div className="signup-input-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm your password" required />
                    </div>
                    <button type="submit" className="signup-btn">Signup</button>
                    <p className="signup-login-text">
                        Already have an account? 
                        <br/>
                        <Link to="/">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;