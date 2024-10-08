// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../components/Header'
import BodyHome from '../components/BodyHome'
import Restaurants from '../components/Restaurants'
import PopularDishes from '../components/PopularDishes'
import HowItWork from '../components/HowItWork'
import Sold from '../components/Sold'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
     <Header/>
     <BodyHome/>
     <Restaurants/>
     <PopularDishes/>
     <Sold/>
     <HowItWork/>
     <Reviews/>
     <Footer/>
    </>
  )
}
