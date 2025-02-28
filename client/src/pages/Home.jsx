/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar.js'
import Header from '../components/Header.js'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home