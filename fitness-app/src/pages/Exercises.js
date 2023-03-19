import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import "../components/Navbar.css"
import { useState } from 'react';
import axios from "axios"
import TypeMuscle from '../components/TypeMuscle';

function Exercises() {
    const [searchTerm, setSearchTerm] = useState("");
  const [typeMuscle, settypeMuscle] = useState([]);
  const [error, setError] = useState(null);

  const searchMuscle = () => {
    var muscle = 'biceps'
    axios.get('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
     { headers: {'X-Api-Key': "Bt9CJvPdPm03G9hJVz4HQg==jSrXdkfJ6CzBOV09" }}).then( 
        (response)=> {
            console.log(response)
            settypeMuscle(response.data);

        }
    )
};

    return (      
        <div> 
            <header>
                <SearchBar setSearchTerm={setSearchTerm} searchMuscle={searchMuscle}  />
                <TypeMuscle typeMuscle={typeMuscle} />
            </header>
        </div>  
    );  
}
       



export default Exercises