import React from 'react'
import "./navbar.css"
import Auth from '../auth/Auth'
function Navbar() {
  return (
    // NAVBAR 
    <div id='navbar'>
      {/* LOGO */}
      <div>
        <h2>application</h2>
      </div>

      {/* ITEMS */}
      <div id='nav-items'>
   <Auth/>
      </div>
    </div>
  )
}

export default Navbar