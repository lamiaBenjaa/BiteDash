import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import loader from './../assets/loader.gif'
import { Link } from 'react-router-dom';

export default function Restaurants() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const resp = await axios.get('http://127.0.0.1:8000/api/restaurants');
            setData(resp.data.data);
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
        <div className=''>
        <h1 className='pt-20 text-5xl font-extrabold px-10 '>Featured Restaurants</h1>
        <p className=' mb-12 pt-6 border-b-2 border-orange-600 w-[10%] mx-28'></p>

        <div className='grid grid-cols-5 gap-7 mx-16 my-9'>
            {data.map((item, index) => (
                <div key={index}>
                    <div className='h-[350px] relative shadow-md shadow-gray-950'>
                    <img src={`http://127.0.0.1:8000/storage/images/`+item.image} alt="User" className='rounded-sm relative object-cover h-full w-full' />
                    <div className='absolute inset-0 w-full h-full bg-gray-900 bg-opacity-50'>
                      <h1 className='text-center pt-32 font-horror px-[3px] text-4xl xl:text-5xl text-gray-300'>{item.name}</h1>
                      {/* <p>{item.description.substring(0,30)+' ...'}</p> */}
                       <p className='absolute flex justify-center items-center top-2 right-4 bg-gray-500 px-1 py-1 rounded-lg'>{item.rating}<FaStar className='ml-1 text-yellow-300'/></p>
                       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-gra-50 font-semibold opacity-0 hover:opacity-100 transition-opacity duration-500">
                           <Link to={`/RestaurantDetails/${item.id}`}> <button className=' border-gray-100 border-[1px] px-3 py-1 rounded-md  '>Show more</button></Link>
                       </div>
                    </div>
                    </div>
                   
                </div>
            ))}
        </div>
        </div>
        
    );
}
