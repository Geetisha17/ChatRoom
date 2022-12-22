import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Chatroom</span>
        <div className="user">
            <img src="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1496132668/postergully02.jpg" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
