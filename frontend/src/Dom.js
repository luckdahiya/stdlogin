import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Avd from './Avd';
import Form from './Form';
import Delete from './Delete';
import View from './View';
import SignUp from './SignUp';
import Success from './Success';


function Dom() {
  return (
    <div id="routes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/button" element={<Avd />} />
          <Route path='/add' element={<Form/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/success' element = {<Success/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Dom;
