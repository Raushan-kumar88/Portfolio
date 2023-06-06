import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Prices from '../components/Prices'
import Work from '../components/Work'
const Project=()=> {
  return (
    <div className=''>
    <Navbar/>
    <HeroImage2 heading="PROJECTS." text="Some of my most recent works." />
    <Work/>
    <Prices />

    <Footer/>
    </div>
  )
}

export default Project