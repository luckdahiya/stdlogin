import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="success-page">
            <div className="success-container">
                <h2>Successfully Signed In</h2>
                <p>Welcome to the Student Management System!</p>
                <button className="back-home-btn" onClick={handleBackToHome}>Back to HomePage</button>
            </div>
        </div>
    );
};

export default Success;
