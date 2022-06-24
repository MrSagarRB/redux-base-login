import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-full bg-black h-[60px] text-white flex items-center justify-between px-5">
      <div className="text-2xl  flex  items-center justify-center"> Logo</div> <nav>
        <ul className="flex gap-5">
          <li> <Link to="/">Home</Link></li>
          <li>About</li>
          <li> <Link to="/cart">Cart</Link></li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header