import React, { useEffect, useState } from 'react'
import loader from './../assets/loader.gif'
import axios from 'axios';
import { FaQuoteRight } from "react-icons/fa";


export default function Reviews() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchReviews();
    },[])

    const fetchReviews = async()=>{
        try {
            const resp = await axios.get('http://127.0.0.1:8000/api/reviews')
            setData(resp.data.data)

            const resp1 = await axios.get('http://127.0.0.1:8000/api/users')
            setData1(resp1.data.data)

        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    }
    
    const getUserById = (userId)=>{
        const user = data1.find(user =>user.id === userId)
        return user ? user : {UserName : 'Unknow User'}
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
    <h1 className='mt-24 text-center text-5xl font-extrabold px-10'>Customer Review</h1>
    <p className=' mb-16 pt-6 border-b-2 border-orange-600 w-[10%] mx-auto'></p>
            {
                data.length > 0 && data1.length>0 ? (
                    <div className='grid grid-cols-3 gap-10 px-20 mb-20'>
                        {
                            data.map(review =>{
                                const user = getUserById(review.user_id);
                                return (
                                    <div key={review.id} className='p-8 space-y-5 bg-black bg-opacity-70 rounded-md'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex justify-start items-center space-x-5 text-gray-300'>
                                            <img src={`http://127.0.0.1:8000/storage/images/`+user.image} alt="" className='w-16 h-16 object-cover rounded-full'/>
                                           <p className='text-xl font-semibold'>{user.UserName}</p>
                                        </div>
                                        <FaQuoteRight className='text-3xl text-orange-600'/>
                                        </div>
                                        
                                        <p className='line-clamp-3 font-strong text-gray-400'>{review.comment}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <p>Loading reviews ...</p>
                )
            }


     <div>
        
     </div>
    </div>
  )
}
