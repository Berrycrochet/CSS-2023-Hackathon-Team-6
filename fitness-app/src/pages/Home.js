import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to="/Exercises">Exercises</Link>
    <div>
    <Link to="/Nutrition">Nutrition</Link> </div>
    
    </div>
  )
}

export default Home