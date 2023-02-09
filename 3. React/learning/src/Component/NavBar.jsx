import React from 'react'

function NavBar() {
    return (
        <div className='navbar'>
            <h2>My Blog</h2>
            <div className='searchBar'>
                <input type='text' placeholder='Home Search' className='searchInput' />
            </div>
            <div></div>
        </div>
    )
}

export default NavBar