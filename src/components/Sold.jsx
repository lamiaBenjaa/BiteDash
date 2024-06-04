import React from 'react'
import burger from './../assets/bg.jpg'
import pizza from './../assets/pizzabg.jpg'
import hotdog from './../assets/dogbg.jpg'

export default function Sold() {
  return (
    <>
    <h1 className='mt-24 text-5xl font-extrabold px-10'>Shop Our Favorite</h1>
    <p className=' mb-16 pt-6 border-b-2 border-orange-600 w-[10%] mx-28'></p>

    <div className='grid grid-cols-3 gap-5'>
        <div className='relative col-span-2 row-span-2 max-h-[525px]'>
           <img src={burger} alt="" className='h-full w-full object-cover'/>
           <div className='absolute inset-0   h-full bg-gray-800 bg-opacity-40'>
               <div className='absolute top-24 w-[60%] left-8 space-y-5'>
               <p className='text-2xl text-orange-600'>PayDay Promo</p>
               <h1 className='text-5xl font-semibold'>GET A 10% DISCOUNT ON PAYDAY WEEK</h1>
               <p className='text-gray-300'>Indulge in Your Favorite Fast Food at Unbeatable Prices! Satisfy Your Cravings with Our Exclusive Discounts and Enjoy a Feast Without Breaking the Bank!</p>
               <button className='border-2 text-xl border-orange-600 text-orange-600 px-4 py-1'>Buy Now</button>
               </div>
           </div>
        </div>
        <div className='relative h-[250px]'>
           <img src={pizza} alt="" className='h-full w-full object-cover'/> 
           <div className='absolute inset-0 w-full h-full bg-gray-800  bg-opacity-40'>
           <div className='absolute top-6 w-[70%] left-8 space-y-4'>
               <p className='text-xl text-orange-600'>PayDay Promo</p>
               <h1 className='text-3xl font-semibold'>HOT PIZZA COOL PRICE PROMO 25%</h1>
               <p className='text-gray-300'>Eat Well, Spend Less: Fast Food Discounts Here!</p>
               <button className='border-2 text-xl border-orange-600 text-orange-600 px-4 py-1'>Buy Now</button>
            </div>
           </div>
        </div>
        <div className='relative h-[250px]'>
           <img src={hotdog} alt="" className='h-full w-full object-cover'/> 
           <div className='absolute inset-0 w-full h-full bg-gray-800  bg-opacity-40'>
           <div className='absolute top-6 w-[70%] left-8 space-y-4'>
               <p className='text-xl text-orange-600'>PayDay Promo</p>
               <h1 className='text-3xl font-semibold'>REAL FLAME GRILLED BEEF !</h1>
               <p className='text-gray-300'>Bite into Big Savings Fast Food Discounts Await!</p>
               <button className='border-2 text-xl border-orange-600 text-orange-600 px-4 py-1'>Buy Now</button>
            </div>
           </div>
        </div>
    </div>
    </>
    
  )
}
