import React from 'react'
import bg from './../assets/2.jpg'

export default function Menu() {

    
  return (
    <div>
      <div className='relative shadow-md shadow-gray-950'>
            <img src={bg} alt="" className='object-cover w-full h-[300px]'/>
            <div className='flex justify-center items-center absolute inset-0 bg-gray-800 bg-opacity-50'>
                <h1 className='text-gray-50 opacity-90 text-[200px] font-horror'></h1>
            </div>
      </div>
      <div className=''>

      </div>
    </div>
  )
}
