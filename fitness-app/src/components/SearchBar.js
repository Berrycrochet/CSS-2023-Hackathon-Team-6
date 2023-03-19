import React from 'react'
import "../components/Navbar.css"
const SearchBar = ({setSearchTerm,searchMuscle}) => {
  return (
    <div>
        <input onChange={(e) => setSearchTerm(e.target.value)}/>
        <button class="searcbtn" onClick={searchMuscle}>Search</button>
        
        

    </div>
  )
}

export default SearchBar