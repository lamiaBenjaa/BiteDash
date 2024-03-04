import React, { useState } from 'react'
import img from '../assets/home2.jpg'

export default function BodyHome() {

    const [navActive,setNavActive] = useState('Filter')
  return (
    <>
    <div className='flex justify-center items-center py-3 px-24 w-[100%] relative '>
        <div className='w-screen h-[580px] bg-no-repeat bg-cover bg-center rounded-3xl opacity-90 '
        style={{backgroundImage:`url(${img})`}}>
            <div className='text-center text-5xl font-bold px-80 py-10 text-yellow-50'>
            "Indulge in moments of flavor, where every bite tells a delicious story"</div>
            <div className='text-center text-m px-56 text-grey-700 font-serif'>
            "Savor the world on a plate! Our fast food creations are a delicious 
            snapshot of global flavors, crafted with love and served just for you. 
            Taste the journey at LaMiaFood ;
             where simplicity meets creativity in every bite!"
            </div>
        </div>
        <div className='w-[80%] h-56 absolute bg-white bottom-[-10%] rounded-3xl shadow-2xl shadow-orange-300 '>
            <div className='flex justify-between items-center'> 
              <div className='px-8 py-4 space-x-9 flex items-center'>
                <button onClick={()=>{setNavActive('Filter')}} 
                className={`${navActive === 'Filter' ? 'py-2 px-10 border-b-4 border-black' : 'py-2 px-10 border-b-4 border-gray-300'  }`}>
                    Filter by 
                </button>
                <button onClick={()=>{setNavActive('Discounts')}} 
                className={`${navActive === 'Discounts' ? 'py-2 px-10 border-b-4 border-black' : 'py-2 px-10 border-b-4 border-gray-300'}`}>
                    Discounts 
                </button>
                <button onClick={()=>{setNavActive('Reservation')}} 
                className={`${navActive === 'Reservation ' ? 'py-2 px-10 border-b-4 border-black' : 'py-2 px-10 border-b-4 border-gray-300'}`}>
                    Reservation 
                </button>
              </div>
              <div className='pr-9 '>
                <button className='w-28 h-9 text-white font-bold rounded-2xl text-center bg-orange-400'>Search</button>
              </div>
            </div>

            <div className={`${navActive === 'Filter' ? 'flex items-center':'hidden'}`}>
               filter
            </div>
            <div className={`${navActive === 'Discounts' ? 'flex items-center':'hidden'}`}>
               discounts
            </div>
            <div className={`${navActive === 'Reservation' ? 'flex items-center' : 'hidden'}`}>
                reservation
            </div>
        </div>
     </div>
    </>
  )
}
