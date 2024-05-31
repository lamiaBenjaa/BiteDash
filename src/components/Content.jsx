import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Content() {
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='grid grid-cols-5 gap-5 mx-16'>
            {data.map((item, index) => (
                <div key={index}>
                    <div className='h-[300px]'>
                    <img src={`http://127.0.0.1:8000/storage/images/`+item.image} alt="User" className='object-cover h-full w-full' />
                    </div>
                   <h1>{item.name}</h1>
                   <p>{item.description}</p>
                   <p>{item.adress}</p>
                   <p>{item.phone}</p>
                   <p>{item.openingHours}</p>
                   <p>{item.rating}</p>
                </div>
            ))}
        </div>
    );
}
