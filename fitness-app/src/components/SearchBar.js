import React from 'react'

const SearchBar = ({setSearchTerm,searchMuscle}) => {
  return (
    <div>
        <input onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={searchMuscle}>Search</button>
        
        

    </div>
  )
}

export default SearchBar