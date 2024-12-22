import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      projects 
      <Link to={'/drop-down'} >Drop Down</Link>
    </div>
  )
}

export default Home
