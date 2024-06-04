import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import loader from './../assets/loader.gif'
import Header from './Header';
import Footer from '../components/Footer'
import { IoMdAddCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import map from './../assets/map.jpeg'


export default function RestaurantDetails() {
    const [data, setData] = useState(null);
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchDetails();
    }, [id]);

    const fetchDetails = async () => {
        try {
            const resp = await axios.get(`http://127.0.0.1:8000/api/restaurants/${id}`);
            setData(resp.data.data);

            const resp1 = await axios.get('http://127.0.0.1:8000/api/dishes');
            setDishes(resp1.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const filteredDishes = dishes.filter(dish => dish.restaurant_id === parseInt(id));

    if (loading) {
        return (
            <div className='w-full flex justify-center items-center my-16'>
                <img src={loader} className='w-12 flex justify-center items-center' alt="Loading..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className='flex justify-center items-center my-10 text-xl text-orange-200'>
                Error: {error.message}
            </div>
        );
    }

    return (
        <>
        <Header/>
        <div>
            {data ? (
                <div>
                        <div className='relative shadow-md shadow-gray-950'>
                            <img src={`http://127.0.0.1:8000/storage/images/`+data.image} alt="" className='object-cover w-full h-[300px]'/>
                            <div className='flex justify-center items-center absolute inset-0 bg-gray-800 bg-opacity-50'>
                               <h1 className='text-gray-50 opacity-90 text-[200px] font-horror'>{data.name}</h1>
                            </div>
                        </div>
                
                    <div>
                       <h1 className='pt-20 text-5xl font-extrabold px-10 text-center '>About Us</h1>
                       <p className=' mb-12 pt-6 border-b-2 border-orange-600 w-[10%] mx-auto'></p>
                    </div>
                 
                    <div className=' my-16 grid grid-cols-2  m-auto items-center w-[85%] bg-black bg-opacity-30'>
                        <div className=' text-center m-auto space-y-8 text-lg px-6'>
                            <h1 className='text-5xl text-orange-600 font-bold'>{data.name}</h1>
                            <p className='text-gray-400'>{data.description}</p>
                            <div className='flex justify-center items-center space-x-4'>
                               <FaMapLocationDot className='text-orange-600'/>
                               <p>{data.adress}</p>
                            </div>
                            <div className='flex justify-center items-center space-x-4'>
                               <FaPhoneFlip className='text-orange-600'/>
                               <p>{data.phone}</p>
                            </div>
                            <div className='flex justify-center items-center space-x-4'>
                              <FaClock className='text-orange-600'/>
                              <p>Opening Hours : {data.openingHours}h</p>
                            </div>
                        </div>
                        <div>
                            <img src={`http://127.0.0.1:8000/storage/images/`+data.image} alt="" className='w-full h-[550px] m-auto object-cover object-center rounded-sm'/>
                        </div>
                    </div>

                    <div className=''>
                        <div>
                            <h1 className='pt-16 text-5xl font-extrabold px-10 text-center'>Our Menu</h1>
                            <p className=' pt-6 border-b-2 border-orange-600 w-[10%] m-auto'></p>
                        </div>
                         {filteredDishes.length > 0 ? (
                        <div className='grid grid-cols-4 gap-10 w-[85%] m-auto py-16' >
                            {filteredDishes.map(dish => (
                                <div className='p-3 relative  bg-gray-700 bg-opacity-25 ' key={dish.id}>
                                <div className='h-[230px] m-auto flex justify-center items-center '>
                                  <img src={`http://127.0.0.1:8000/storage/images/`+dish.image} alt="" className='w-56 h-56  object-cover bg-opacity-50 bg-gray-700 rounded-lg p-4'/>
                                </div>
                                 <p className='text-center py-2 text-lg text-orange-600 font-semibold'>{dish.name}</p>
                                 <p className='line-clamp-2 text-center text-gray-300 px-4'>{dish.description}</p>
                                 <div className='flex justify-between items-center px-5 space-x-2 mt-3'>
                                 <p className=' text-gray-300 font-semibold px-2 pt-2 text-lg'><p className='text-orange-600 inline'>{dish.price} $</p></p>
                                    <div className='  flex space-x-1 text-gray-300 py-1 rounded-md'>
                                        <p><IoMdAddCircle  className='text-2xl text-orange-600 bg-gray-300 rounded-full'/></p>
                                    </div>
                                 </div>
                                <div className='absolute right-8 top-4 flex justify-center items-center bg-gray-500 px-1 py-1 rounded-lg'>
                                   <p>{dish.rating}</p>
                                   <FaStar className='ml-1 text-lg text-yellow-400'/>
                                </div>
                            </div>
                            ))}
                        </div>
                    ) : (
                        <p>No dishes available for this restaurant.</p>
                    )}
                    </div>
                   
                    
                </div>
            ) : (
                <p>Loading restaurant details...</p>
            )}
        </div>
        <div>
            <img src={map} alt="" srcset="" className='w-[70%] rounded-md  opacity-60 h-[500px] object-cover m-auto my-12'/>
        </div>
        <Footer/>
        </>
        
    );
}
