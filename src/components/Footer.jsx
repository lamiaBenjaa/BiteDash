import React from 'react'
import logo from './../assets/loo.png'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='bg-gray-950 drop-shadow-lg shadow-black'>
     <div className='grid grid-cols-6  py-8 text-lg '>
      <div className='col-span-2 w-[70%] m-auto space-y-3'>
           <img src={logo} alt="" className='w-44 py-2'/>
           <p className='line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ullam eum maxime tempore adipisci natus, saepe magni minima nulla asperiores optio iste reiciendis amet blanditiis exercitationem. Eaque ex architecto consectetur?</p>
      </div>
      <div className='m-auto'>
         <h1 className='font-bold py-2'>Navigation</h1>
         <p>FAQ's</p>
         <p>Privacy Policy</p>
         <p>Term a Conditions</p>
      </div>
      <div className='m-auto'>
        <h1 className='font-bold py-2'>Company</h1>
        <p>About</p>
        <p>Team</p>
        <p>Contact</p>
      </div>
      <div className='col-span-2 m-auto'>
        <h1 className='font-bold py-2'>Subscribe</h1>
        <div className='space-y-3 space-x-3'>
            <input type="text" placeholder='Enter Your Email ...' className='px-2 py-1 bg-slate-600 bg-opacity-40 rounded-xl'/>
            <button className='bg-orange-600 px-4 py-1 rounded-2xl'>Send</button>
        </div>
        <div className='flex justify-center items-center space-x-5 py-6'>
            <p><FaFacebook className='text-2xl text-orange-600'/></p>
            <p><AiFillInstagram className='text-2xl text-orange-600'/></p>
            <p><FaTwitter className='text-2xl text-orange-600'/></p>
            <p><FaGithub className='text-2xl text-orange-600'/></p>
        </div>
      </div>
    </div>
    <div>
        <p className='border-t-2 py-1 border-gray-500 w-[80%] m-auto'></p>
        <p className=' py-2 text-end text-sm px-10 text-gray-400'>Copyright @ 2024 BiteDash By Lamia Benjaa. All Rights Reserved.</p>
    </div>
    </div>
   
  )
}
