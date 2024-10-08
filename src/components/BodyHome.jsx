import React from 'react'
import img from './../assets/try.png'
import img1 from './../assets/b.png'
import img3 from './../assets/02.png'
import { motion } from 'framer-motion'
import { LuArrowBigRightDash } from "react-icons/lu";

export default function BodyHome() {
  return (
    <div className=' h-[85vh] mt-1 pt-16 bg-cover bg-no-repeat' style={{backgroundImage:`url(${img3})`}}>
       <div className='w-full min-h-[60vh]  m-auto grid   md:grid-cols-2 sm:py-0     '>
         <div className='md:hidden'>
            <img src={img1} alt="" className='h-[200px] w-full '/>
         </div>
          <motion.div
           initial={{
            x:-400,
            opacity:0
           }}
           animate={{
            x:0,
            opacity:100
           }}
            transition={{
               duration:1
            }}
          className='text-center space-y-6 pl-8 md:mt-10  m-auto md:col-span-1 xl:mt-20 '>
              <h1 className=' font-horror md:text-5xl text-6xl lg:text-7xl 2xl:text-8xl text-gray-10 drop-shadow-2xl shadow-gray-100'>Eat Your <span className='text-clip text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-700 to-orange-400'> favorite Food </span> how You like it!</h1>
              <p className='text-xl text-yellow-700'>"Fast Flavors Satisfy Cravings, ASAP!"</p>
              <p className='text-lg text-gray-100 pb-4 px-10'>"Welcome to BiteDash Where Fast Food Meets Flavor!
                  Dive into a world of culinary delight where every bite
                  is a journey of taste sensations. Whether you're craving
                  crispy fries, juicy burgers, or mouthwatering.
               </p>
               <button className='flex justify-center items-center mx-auto my-5 bg-orange-600 w-[25%] md:w-[50%] xl:w-[25%] py-2 rounded-sm text-xl'><LuArrowBigRightDash /><p> Order Now</p></button>
          </motion.div>
          <motion.div
           initial={{
            x:400,
            opacity:0
           }}
           animate={{
            x:0,
            opacity:100
           }}
            transition={{
               duration:1
            }}
            whileHover={{
               scale:1.01
              }}
          className='w-full hidden md:flex relative '>
                {/* <motion.img
                 animate={{
                  rotateZ:0
                 }}
                 transition={{
                  // repeat:Infinity,
                  // repeatType:'mirror',
                  duration:1,
                 }}
                 
                src={img} alt=""   className='col-span-2 mt-16 min-w-80 lg:min-w-[400px] xl:min-w-[560px] max-h-[100vh] cursor-pointer  pr-8 w-full drop-shadow-2xl shadow-gray-100'/> */}
                {/* <p className='absolute md:top-14 md:left-44 lg:left-[280px] xl:left-[500px] ring-2 ring-orange-500 bg-orange-600 xl:text-4xl text-2xl font-bold  text-center rounded-full xl:p-4 md:p-3 w-20 xl:w-28 shadow-gray-950 shadow-2xl'>30% Offre</p> */}
          </motion.div>
       </div>
    </div>
  )
}



























































// import React, { useState } from 'react'
// import img from '../assets/home2.jpg'
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { MdAccessTimeFilled } from "react-icons/md";

// export default function BodyHome() {

//     const [navActive,setNavActive] = useState('Filter')
//   return (
//     <>
//     <div className='flex justify-center items-center py-3 px-24 w-[100%] relative '>
//         <div className='w-screen h-[580px] bg-no-repeat bg-cover bg-center rounded-3xl opacity-90 '
//         style={{backgroundImage:`url(${img})`}}>
//             <div className='text-center text-5xl font-bold px-80 py-10 text-yellow-50'>
//             Indulge in moments of flavor, where every bite tells a delicious story</div>
//             <div className='text-center text-m px-56 text-grey-700 font-serif italic text-yellow-50'>
//             Savor the world on a plate! Our fast food creations are a delicious 
//             snapshot of global flavors, crafted with love and served just for you. 
//             Taste the journey at LaMiaFood ;
//              where simplicity meets creativity in every bite.
//             </div>
//         </div>
//         <div className='w-[80%] h-56 absolute bg-orange-400 bottom-[-10%] rounded-3xl shadow-lg shadow-orange-900 '>
//           <div>
//             <div className='flex text-lg text-gray-400 font-medium px-6 py-2'>
//                 <button onClick={()=>setNavActive('Filter')} className={`${navActive == 'Filter'? 'border-b-2 border-black px-12 py-2 text-black' : 'border-b-2 border-gray-400 px-12 py-2'}`}>
//                    Filter By
//                 </button>
//                 <button onClick={()=>setNavActive('Discounts')} className={`${navActive == 'Discounts' ? 'border-b-2 border-black px-12 py-2 text-black' : 'border-b-2 border-gray-400 px-12 py-2' }`}>
//                    Discounts
//                 </button>
//                 <button onClick={()=>setNavActive('Order')} className={`${navActive == 'Order' ? 'border-b-2 border-black px-12 py-2 text-black' : 'border-b-2 border-gray-400 px-12 py-2'}`}>
//                    Order Now
//                 </button>
//                 <button onClick={()=>setNavActive('Explore')} className={`${navActive == 'Explore' ? 'border-b-2 border-black px-12 py-2 text-black' : 'border-b-2 border-gray-400 px-12 py-2'}`}>
//                   Explore
//                 </button>
//             </div>
          
//              <div className={`${navActive == 'Filter' ? 'flex justify-between px-16 items-center' : 'hidden'}`}>
//                <div className='flex justify-center space-x-24  py-4'>

//                 <div>
//                    <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                       <FaMapMarkerAlt />
//                       <h1>Destination</h1>
//                    </div>
//                       <input className='bg-orange-400 text-white text-lg rounded-lg ' type='text' placeholder='Your Destination ...'/>
//                 </div>
                 
//                 <div>
//                    <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                     <MdAccessTimeFilled />
//                     <h1>Order</h1>
//                    </div>
//                      <input className='bg-orange-400 text-white text-lg rounded-lg'  type='datetime-local' placeholder='ghsg'/>
//                </div>
                   
//                <div> 
//                    <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                     <MdAccessTimeFilled />
//                     <h1>Dilvery</h1>
//                    </div>
//                      <input className='bg-orange-400 text-white text-lg rounded-lg ' type='datetime-local' />
//                 </div>

//               </div>

//               <div >
//                 <button className='bg-orange-400 text-white font-medium text-lg rounded-2xl w-24 h-9'>
//                   Search
//                 </button>
//               </div>
//             </div>

//              <div className={`${navActive == 'Discounts' ? 'flex items-center justify-between px-16' : 'hidden'}`}>
//               <div className='flex justify-center space-x-24  py-4'>

//                <div>
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                      <FaMapMarkerAlt />
//                      <h1>Destination</h1>
//                   </div>
//                      <input className='bg-orange-400 text-white text-lg rounded-lg ' type='text' placeholder='Your Destination ...'/>
//                </div>
                
//                <div>
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                    <MdAccessTimeFilled />
//                    <h1>Order</h1>
//                   </div>
//                     <input className='bg-orange-400 text-white text-lg rounded-lg'  type='datetime-local' placeholder='ghsg'/>
//                </div>
                  
//                <div> 
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                    <MdAccessTimeFilled />
//                    <h1>Dilvery</h1>
//                   </div>
//                     <input className='bg-orange-400 text-white text-lg rounded-lg ' type='datetime-local' />
//                </div>
               
//               </div>

//                <div >
//                  <button className='bg-orange-400 text-white font-medium text-lg rounded-2xl w-24 h-9'>
//                   Search
//                   </button>
//                </div>

//               </div>

//              <div className={`${navActive == 'Order' ? 'flex items-center justify-between px-16' : 'hidden'}`}>
//                        <div className='flex justify-center space-x-24  py-4'>

//                <div>
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                      <FaMapMarkerAlt />
//                      <h1>Destination</h1>
//                   </div>
//                      <input className='bg-orange-400 text-white text-lg rounded-lg ' type='text' placeholder='Your Destination ...'/>
//                </div>
                
//                <div>
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                    <MdAccessTimeFilled />
//                    <h1>Order</h1>
//                   </div>
//                     <input className='bg-orange-400 text-white text-lg rounded-lg'  type='datetime-local' placeholder='ghsg'/>
//                </div>
                  
//                <div> 
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                    <MdAccessTimeFilled />
//                    <h1>Dilvery</h1>
//                   </div>
//                     <input className='bg-orange-400 text-white text-lg rounded-lg ' type='datetime-local' />
//                </div>
               
//               </div>

//                <div >
//                  <button className='bg-orange-400 text-white font-medium text-lg rounded-2xl w-24 h-9'>
//                   Search
//                   </button>
//                </div>
//              </div>

//              <div className={`${navActive == 'Explore' ? 'flex items-center justify-between px-16' : 'hidden'}`}>
//              <div className='flex justify-center space-x-24  py-4'>

//                <div>
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                      <FaMapMarkerAlt />
//                      <h1>Destination</h1>
//                   </div>
//                      <input className='bg-orange-400 text-white text-lg rounded-lg ' type='text' placeholder='Your Destination ...'/>
//                </div>
                
//                <div>
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                    <MdAccessTimeFilled />
//                    <h1>Order</h1>
//                   </div>
//                     <input className='bg-orange-400 text-white text-lg rounded-lg'  type='datetime-local' placeholder='ghsg'/>
//                </div>
                  
//                <div> 
//                   <div className='flex flex-row space-x-3 px-5 py-2 font-medium text-lg'>
//                    <MdAccessTimeFilled />
//                    <h1>Dilvery</h1>
//                   </div>
//                     <input className='bg-orange-400 text-white text-lg rounded-lg ' type='datetime-local' />
//                </div>
               
//                </div>
               
//                <div >
//                  <button className='bg-orange-400 text-white font-medium text-lg rounded-2xl w-24 h-9'>
//                   Search
//                   </button>
//                </div>
//              </div>
//           </div>
//         </div>
//      </div>
//     </>
//   )
// }
