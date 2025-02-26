import React from 'react';
import './Avd.css';
import { Link } from 'react-router-dom';

function Avd() {
  return (
    <div id="avd">
      <div id='avd-background'></div>        
      <div className="content">
        <div id="add">
          Add, View, and Delete Students Details Here...
        </div>
        <div id="buttons">
          <Link to="/add">
            <button id="button1">Add</button>
          </Link>
          <Link to="/view">
            <button id="button2">View</button>
          </Link>
          <Link to="/delete">
            <button id="button3">Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Avd;
