import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import bg from './../assets/1.jpg'
import axios from 'axios';
import loader from './../assets/loader.gif';
import { IoIosRestaurant } from "react-icons/io";
import { Fragment } from "react";
import {  Menu ,Transition } from "@headlessui/react";


export default function Menu1() { 

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const resp = await axios.get('http://127.0.0.1:8000/api/categories');
            setData(resp.data.data);

            const resp1 = await axios.get('http://127.0.0.1:8000/api/dishes')
            setData1(resp1.data.data)

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div className=' w-full flex justify-center items-center my-16'>
            <img src={loader} className='w-12 flex justify-center items-center' alt="" />
        </div>;
    }

    if (error) {
        return <div className='flex justify-center items-center my-10 text-xl text-orange-200'>Error: {error.message}</div>;
    }
    
  return (
    <div>
      <div className='relative shadow-md shadow-gray-950'>
            <img src={bg} alt="" className='object-cover w-full h-[300px]'/>
            <div className='flex justify-start pl-44 items-center absolute inset-0 bg-gray-800 bg-opacity-50'>
                <h1 className='opacity-90 font-extrabold text-8xl text-gray-200'>Menu </h1><IoIosRestaurant  className='text-8xl text-gray-200'/>
            </div>


      </div>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='pt-20 text-5xl font-extrabold px-10 text-center '>Explore Our Menu</h1>
          <p className=' mb-12 pt-6 border-b-2 border-orange-600 w-[15%] mx-auto'></p>
      </div>
      <Menu as="div" className="relative inline-block text-left mx-16 z-10">
            <div>
                <Menu.Button className=" inline-flex justify-center bg-gray-400 bg-opacity-50 w-full px-6 py-2 text-lg font-medium text-gray-200  rounded-md shadow-sm hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Sort
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item >
                            <a href="#" className= "bg-gray-100 text-gray-800 hover:bg-gray-600 hover:bg-opacity-40  focus:bg-orange-600 focus:text-gray-100 block px-4 py-2">
                                All Dishes
                            </a>
                        </Menu.Item>
                        <Menu.Item className=''>
                            <a href="#" className= "bg-gray-100 text-gray-800 hover:bg-gray-600 hover:bg-opacity-40  focus:bg-orange-600 focus:text-gray-100 block px-4 py-2">
                                Best Rating
                            </a>
                        </Menu.Item>
                        <Menu.Item className=''>
                            <a href="#" className= "bg-gray-100 text-gray-800 hover:bg-gray-600 hover:bg-opacity-40  focus:bg-orange-600 focus:text-gray-100 block px-4 py-2">
                                Price : Hight to Low
                            </a>
                        </Menu.Item>
                        <Menu.Item className=''>
                            <a href="#" className= "bg-gray-100 text-gray-800 hover:bg-gray-600 hover:bg-opacity-40  focus:bg-orange-600 focus:text-gray-100 block px-4 py-2">
                                Price : Hight to Low
                            </a>
                        </Menu.Item>
                       
                       
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      </div>
      
      

      <div className='grid grid-cols-12 gap-6 w-[95%] m-auto relative'>
         <div className='col-span-3 bg-gray-600 bg-opacity-20 rounded-lg my-10'>
                <div className='bg-gray-500 bg-opacity-30 m-3 h-fit rounded-lg sticky top-10 '>
                <div>
                  <h1 className='pt-6 text-xl font-semibold px-10 '>Category Filters</h1>
                  <p className=' mb-6 pt-2 border-b-2 border-orange-600 w-[15%] mx-10'></p>
                </div>
                  {
                    data.map(item=>{
                      return(
                      <div className='block p-4 '>
                        <div className='flex justify-around items-center py-1 hover:bg-orange-600 hover:rounded-lg hover:scale-110 hover:duration-200' key={item.id}>
                         <img src={`http://127.0.0.1:8000/storage/images/`+item.image} alt="" className='w-12'/>
                          <h1>{item.name}</h1>
                       </div>
                      </div>
                      )
                      
                    })
                  }
                </div>
         </div>
         <div className='col-span-9  rounded-lg bg-gray-600 bg-opacity-30 my-10'>
         <div className='grid grid-cols-3 gap-5 w-[90%] m-auto py-10'>
        {
            data1.map((item,index)=>{
                return(
                    <div className='p-3 relative  bg-gray-700 bg-opacity-25 ' key={index}>
                        <div className='h-[230px] m-auto flex justify-center items-center '>
                          <img src={`http://127.0.0.1:8000/storage/images/`+item.image} alt="" className='w-56 h-56  object-cover bg-opacity-50 bg-gray-700 rounded-lg p-4'/>
                        </div>
                         <p className='text-center py-2 text-lg text-orange-600 font-semibold'>{item.name}</p>
                         <p className='line-clamp-2 text-center text-gray-300 px-4'>{item.description}</p>
                         <div className='flex justify-between items-center px-5 space-x-2 mt-3'>
                         <p className=' text-gray-300 font-semibold px-2 pt-2 text-lg'><p className='text-orange-600 inline'>{item.price} $</p></p>
                            <div className='  flex space-x-1 text-gray-300 py-1 rounded-md'>
                                <p><IoMdAddCircle  className='text-2xl text-orange-600 bg-gray-300 rounded-full'/></p>
                            </div>
                         </div>
                        <div className='absolute right-8 top-4 flex justify-center items-center bg-gray-500 px-1 py-1 rounded-lg'>
                           <p>{item.rating}</p>
                           <FaStar className='ml-1 text-lg text-yellow-400'/>
                        </div>
                    </div>
                )
            })
        }
    </div>
         </div>
      </div>
    </div>
  )
}













{/* <div className='flex items-center w-[80%] m-auto mt-16'>
          <GrPrevious onClick={sliderLeft} className=' cursor-pointer text-3xl'/>
             <div id='slider' className='w-full h-full space-x-16 m-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                
                    
               
             </div>
          <GrNext onClick={sliderRight} className=' cursor-pointer text-3xl'/>
      </div> */}