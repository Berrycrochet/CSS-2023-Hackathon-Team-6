import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Exercises from './pages/Exercises';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttons from './components/Buttons';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <hr></hr>
    


      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
      
          <Route path="/Exercises" element={<Exercises/>} />
          <Route path="/Nutrition" element={<Nutrition/>}/>

        </Routes>
      </BrowserRouter>
           
    </div>
  );
}

export default App;
