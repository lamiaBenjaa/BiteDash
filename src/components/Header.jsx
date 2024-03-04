import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
    const location = useLocation()
  return (
    <>
    <header>
      <div className='container flex justify-between items-center max-w-[90%] m-auto text-gray-300 '>
        
         <div className='w-44'>
           <img src={logo} alt='logo'/>
         </div>
         <div className='space-x-20  font-bold border-b-2 py-2'>
           <Link to='/' className={`${location.pathname == '/' ? 'text-gray-900 border-b-2 py-2 border-gray-900' : 'hover:text-orange-300  focus:text-gray-900'}`}>Home</Link>
           <Link to='/Order' className={`${location.pathname == '/Order' ? 'text-gray-900 border-b-2 py-2 border-gray-900' : 'hover:text-orange-300 focus:text-gray-900'}`}>Order Now</Link>
           <Link to='/Explore' className={`${location.pathname == '/Explore' ? 'text-gray-900 border-b-2 py-2 border-gray-900' : 'hover:text-orange-300 focus:text-gray-900'}`}>Explore</Link>
           <Link to='/Contact' className={`${location.pathname == '/Contact' ? 'text-gray-900 border-b-2 py-2 border-gray-900' : 'hover:text-orange-300 focus:text-gray-900'}`}>Contact Us</Link>
           <Link to='/About' className={`${location.pathname == '/About' ? 'text-gray-900 border-b-2 py-2 border-gray-900' : 'hover:text-orange-300 focus:text-gray-900'}`}>About Us</Link>
         </div>
         <div className='space-x-10 font-medium'>
           <Link to='/SignIn' className='text-gray-900'>Sign In</Link>
           <Link to='/SignUp' className='bg-orange-300 text-white px-6 py-2 rounded-2xl hover:shadow-lg  hover:shadow-orange-300 '>Sign Up</Link>
         </div>

      </div> 
    </header>
    
    </>
  )
}
