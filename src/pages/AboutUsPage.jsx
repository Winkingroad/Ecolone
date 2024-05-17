import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Values from '../components/Values.jsx'
import Team from '../components/Team.jsx'
import Story from '../components/Story.jsx'
import HeroAbout from '../components/HeroAbout.jsx'
const AboutUsPage = () => {
  return (
    
    <div>
      {/* <Navbar/> */}
      <HeroAbout/>
      <Values/>
      <Story/>
      <Team/>
      {/* <Footer/> */}
    </div>
  )
}

export default AboutUsPage
