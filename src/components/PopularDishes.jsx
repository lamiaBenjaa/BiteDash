import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loader from './../assets/loader.gif'
import { IoMdAddCircle } from "react-icons/io";
import { IoEye } from "react-icons/io5";


export default function PopularDishes() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchDishes();
    },[])

    const fetchDishes = async()=>{
        try {
            const resp = await axios.get('http://127.0.0.1:8000/api/dishes')
            setData(resp.data.data)
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
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
    <>
    <h1 className='my-16 text-5xl font-extrabold px-10'>Popular Dishes</h1>
    <div className='grid grid-cols-4 gap-5 w-[85%] m-auto'>
        {
            data.filter((item,i)=>i <= 11).map((item,index)=>{
                console.log(item)
                return(
                    <div className='p-3  ' key={index}>
                        <div className='h-[230px] m-auto flex justify-center items-center'>
                          <img src={`http://127.0.0.1:8000/storage/images/`+item.image} alt="" className='w-56 h-56 object-cover bg-opacity-50 bg-gray-700 rounded-lg p-4'/>
                        </div>
                         <p className='text-center py-2 text-lg text-orange-600 font-semibold'>{item.name}</p>
                         <p className='line-clamp-2 text-center text-gray-400 px-4'>{item.description}</p>
                         <p className=' text-orange-600 font-semibold px-4 pt-2'>Price : {item.price} DH</p>
                         <div className='flex justify-end items-center px-3 space-x-2 mt-3'>
                            <div className='flex space-x-2 bg-blue-600 px-2 py-1 rounded-md'>
                              <p><IoEye className='text-xl'/></p>
                              <p>Details</p>
                            </div>
                            <div className='flex space-x-2 bg-red-600 px-2 py-1 rounded-md'>
                                <p><IoMdAddCircle  className='text-xl'/></p>
                                <p>Add</p>
                            </div>
                         </div>

                    </div>
                )
            })
        }
    </div>
    </>
    
  )
}
