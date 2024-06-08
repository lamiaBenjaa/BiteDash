import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loader from './../assets/loader.gif'
import { IoMdAddCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";



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



    const Add= async()=>{
         await axios.post('http://127.0.0.1:8000/api/orderItems')
    }

  return (
    <>
    <h1 className='mt-16 text-5xl font-extrabold px-10'>Popular Dishes</h1>
    <p className=' mb-16 pt-6 border-b-2 border-orange-600 w-[10%] mx-28'></p>
    <div className='grid grid-cols-4 gap-5 w-[85%] m-auto'>
        {
            data.filter((item,i)=>i <= 11).map((item,index)=>{
                console.log(item)
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
                                <p onClick={()=>Add()}><IoMdAddCircle  className='text-2xl text-orange-600 cursor-pointer bg-gray-300 rounded-full'/></p>
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
    </>
    
  )
}
