import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>

            <h3>Rick and Morty API</h3>
        </div>

        <div className='links'>
            <Link to='/'><h3>EPISODES</h3></Link>
            <Link to='/characters'><h3>CHARACTERS</h3></Link>
        </div>
    </div>
  )
}

export default Navbar