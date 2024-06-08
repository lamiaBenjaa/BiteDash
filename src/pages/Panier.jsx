import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loader from './../assets/loader.gif'

export default function Panier() {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchDishes();
    },[])

    const fetchDishes = async()=>{
        try {
            const resp = await axios.get('http://127.0.0.1:8000/api/orderItems')
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
    <div>
      {
        data.map(item=>{
          return(
            <div key={item.id}>
               <p>{item.quantity}</p>
            </div>
          )
        })
      }
    </div>
  )
}
