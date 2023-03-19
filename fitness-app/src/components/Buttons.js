
import React, {useState} from 'react'
//import {BrowserRoute, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function Buttons() {

//const [Exercises, setExercises] = useState(0)
const [openLinks, setOpenLinks] = useState(false);


  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return ( 
      <div className="leftSide" >
        <Link to="/test">Test</Link>
          </div>
    
  )
}


export default Buttons