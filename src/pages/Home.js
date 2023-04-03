import React from 'react'
import Nav from '../componets/Nav'
import Topic from '../componets/HeroTopic'
import Hero from '../componets/Hero'
import Bganimation from '../componets/Bganimation'
import NavBar from '../componets/NavBar'
import Bottomgrid from '../componets/Bottomgrid'

export default function Home() {
  return (
    <div className='h-screen overflow-hidden relative'>
      


      <React.Fragment>
      
      
      
      {/* <Nav />
      
      <Topic /> */}
      
      <Bganimation />
      <NavBar />
      <Bottomgrid />
      <Hero />
      
   
    
      
     
      
    </React.Fragment>
    </div>
  )
}
