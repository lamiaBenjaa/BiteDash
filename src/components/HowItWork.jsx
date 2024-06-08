import React from 'react'
import { GrRestaurant } from "react-icons/gr";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import res from './../assets/res.jpg'
import bur from './../assets/bur.jpg'
import del from './../assets/Del.jpg'
import { Link } from 'react-router-dom';

export default function HowItWork() {
  return (
    <>
    <div className='my-24 grid grid-cols-3 px-10'>
       <h1 className=' col-span-1 text-6xl font-extrabold  text-center border-r-4 border-orange-600'>How It Works</h1>
        <p className='px-10 col-span-2 text-lg'>Visit our website and explore our menu. Add your favorite items to your cart, and apply the discount code at checkout. Enjoy delicious fast food at unbeatable prices—quick, easy, and satisfying!</p>
    </div>
    <div className='grid grid-cols-3 my-10 bg-gradient-to-t from-gray-900 via-orange-950 to-gray-900 px-36'>

       <Link to='/Restaurant'>
       <div className='text-center space-y-8 bg-gray-700 bg-opacity-25 w-[80%] m-auto py-10 rounded-lg shadow-md shadow-gray-950 cursor-pointer'>
            <div className='flex justify-center items-center'>
              {/* <GrRestaurant className='text-9xl text-orange-600'/> */}
              <img src={res} alt="" className='w-56 h-56 object-cover rounded-full shadow-md shadow-gray-950'/>
            </div>
            <p className='text-5xl font-horror w-[70%] m-auto'>Choose a Restaurant</p>
        </div>
       </Link> 

        <div className='text-center space-y-8 bg-gray-700 bg-opacity-25 w-[80%] m-auto py-10 rounded-lg shadow-md shadow-gray-950 cursor-pointer'>
            <div className='flex justify-center items-center'>
              {/* <IoFastFoodOutline className='text-9xl  text-orange-600'/> */}
              <img src={bur} alt="" className='w-56 h-56 object-cover rounded-full shadow-md shadow-gray-950'/>
            </div>
            <p className='text-5xl font-horror w-[60%] m-auto '>Select Dishes</p>
        </div>

        <div className='text-center space-y-8 bg-gray-700 bg-opacity-25 w-[80%] m-auto py-10 rounded-lg shadow-md shadow-gray-950 cursor-pointer'>
            <div className='flex justify-center items-center'>
             {/* <MdOutlineDeliveryDining className='text-9xl  text-orange-600'/> */}
             <img src={del} alt="" className='w-56 h-56 object-cover rounded-full shadow-md shadow-gray-950'/>

            </div>
            <p className='text-5xl font-horror w-[70%] m-auto'>Enjoy Your Meal</p>
        </div>
    </div>
    </>
    
  )
}
