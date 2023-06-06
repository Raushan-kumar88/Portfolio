import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Aboutcontent from '../components/Aboutcontent'
function About() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="ABOUT." text="I'M a friendly Front-End developer." />
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About