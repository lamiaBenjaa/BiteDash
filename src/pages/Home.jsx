// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../components/Header'
import BodyHome from '../components/BodyHome'
import Restaurants from '../components/Restaurants'
import PopularDishes from '../components/PopularDishes'

export default function Home() {
  return (
    <>
     <Header/>
     <BodyHome/>
     <Restaurants/>
     <PopularDishes/>
    </>
  )
}
