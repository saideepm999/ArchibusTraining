import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark pl-2'>
        <Link to="/" className="navbar-brand ml-5"> React Redux Crud</Link>
    </nav>
  )
}

export default Navbar;