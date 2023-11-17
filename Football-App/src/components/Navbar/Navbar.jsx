import React from 'react'

const Navbar = () => {
  return (
    <nav className='capitalize hidden lg:flex'>
    <ul className='flex items-center space-x-12 text-white'>
       <li  className='text-2xl hover:text-red-500'><a href="#">leagues</a></li>
          <li className='text-2xl hover:text-red-500'><a href="#">scorers</a></li>
          <li className='text-2xl hover:text-red-500'><a href="#">fixtures</a></li>
          <li  className='text-2xl hover:text-red-500'><a href="#">blogs</a></li>
          <li  className='text-2xl hover:text-red-500'><a href="#">contact</a></li>
    </ul> 
</nav>
  )
}

export default Navbar