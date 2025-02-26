import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav id="navbar">
            <h1>Student Management</h1>
            <div id="navbar-links">
                <Link to="/add">Add</Link>
                <Link to="/view">View</Link>
                <Link to="/delete">Delete</Link>
                </div>
        </nav>
    );
};

export default Navbar;
