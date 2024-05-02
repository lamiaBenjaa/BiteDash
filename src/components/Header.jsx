import React, { useState } from 'react'
import logo from './../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Header() {

    const location = useLocation()
    const [menu,setMenu]=useState(true)
    const Menu =()=>{
      menu ? setMenu(false) :setMenu(true)
    }
    const style = 'absolue z-[999999] md:z-auto h-screen md:h-fit text-center md:text-start md:flex md:items-center md:justify-center z-[-1] md:z-0 absolute md:static bg-gradient-to-t from-gray-700 to-gray-900 md:bg-gray-900 w-full md:w-auto md:mt-0 left-0 md:space-x-16 lg:space-x-32 py-8 md:py-0  text-xl'
    const style2 ='hidden md:flex md:items-center md:justify-center  md:z-0 md:static bg-gray-900 md:w-auto md:mt-0 space-x-6 md:space-x-16 lg:space-x-32  md:space-y-0 md:py-0  text-xl' 
  return (
    <nav className='px-8 py-4 lg:px-24 w-full m-auto shadow-md shadow-gray-950 md:flex md:justify-between md:items-center'>
      <div className='flex justify-between items-center'>
        <Link to='/'><img className='w-36 pr-5' src={logo} alt='logo' /></Link>
        <div className='flex space-x-7'>
         <Link to='/Panier'><p className='flex md:hidden text-center'><MdOutlineAddShoppingCart     className='text-3xl  text-gray-200'/></p></Link>
        <span onClick={()=>Menu()} className='md:hidden cursor-grab'>{menu ? <HiMenuAlt3 className='text-4xl text-orange-400' /> : <IoClose className='text-4xl text-orange-400' /> }</span>
        </div>
      </div>
      
      <ul className={`${menu ? style2 : style}}`}>
        <div className='md:inline-flex md:space-x-5 lg:space-x-8 xl:space-x-16 mx-8 md:mx-0 space-y-10 ms:space-y-0 md:space-y-0 text-xl py-10 md:py-0'>
         <li><Link to='/' className={`${location.pathname === '/' ? 'text-gray-50 border-b-4 border-gray-50' : 'text-gray-300 hover:text-orange-400  hover:border-b-4 border-orange-400 duration-200  '}`}>Home</Link></li>
        <li><Link to='/Explore' className={`${location.pathname === '/Explore' ? 'text-gray-50 border-b-4 border-gray-50' : 'text-gray-300 hover:text-orange-400 hover:border-b-4 border-orange-400 duration-200 '}`}>Explore</Link></li>
        <li><Link to='/About' className={`${location.pathname === '/About' ? 'text-gray-50 border-b-4 border-gray-50' : 'text-gray-300 hover:text-orange-400 hover:border-b-4 border-orange-400 duration-200 '}`}>About </Link></li>
        <li><Link to='/Contact' className={`${location.pathname === '/Contact' ? 'text-gray-50 border-b-4 border-gray-50' : 'text-gray-300 hover:text-orange-400  hover:border-b-4 border-orange-400 duration-200 '}`}>Contact</Link></li>
        </div>
        <div className='md:flex justify-between items-center space-x-8 '>
             <Link to='/Panier'><p className='hidden md:flex text-center'><MdOutlineAddShoppingCart     className='text-3xl text-gray-200'/></p></Link>
            <Link to='/SignUp'><button className='bg-orange-500 w-32 border-orange-300 ring-orange-200 py-1 rounded-sm  text-gray-100 text-lg '>Sign Up</button></Link>
        </div>
      </ul>
    </nav>
  )
}
