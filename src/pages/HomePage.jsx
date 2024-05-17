import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ImageCarousel from '../components/ImageCarrousel.jsx'
import HeroSection from '../components/HeroSection.jsx'

const HomePage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <ImageCarousel/>
      <HeroSection/>
      {/* <Footer/> */}
    </div>
  )
}

export default HomePage
