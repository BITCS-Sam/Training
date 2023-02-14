import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className='sidebar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default SideBar