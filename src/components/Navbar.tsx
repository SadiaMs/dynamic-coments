import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1>My React App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <hr />
        {/* Add your own content here */}
        <p>Welcome to my React App!</p>
        <p>Feel free to explore the navigation links above.</p>
  
      
    </div>
  )
}

export default Navbar
