import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setTimeout(() => {
            alert('Login successful!');
            navigate('/button'); 
        }, 2000);
    };

    return (
        <div className="app-background">
            <div className="app-login-container">
                <div className="app-login-form">
                    <h2>Student Management Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="app-input-group">
                            <label>Student ID</label>
                            <input 
                                type="text" 
                                placeholder="Enter your student ID" 
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="app-input-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="Enter your password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                        
                        <button type="submit" className="app-login-btn">Login</button>
                        <p className="app-signup-text">
                            <span>Don't have an account? </span>
                            <br/>
                            <a href="/signup">SignUp now</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;