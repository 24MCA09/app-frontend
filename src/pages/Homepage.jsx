import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './homepage.css'
import Homecaro1 from '../components/Homecaro1'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import bvideo from "../assests/bvideo.mp4"
function Homepage() {
  return (


    <div class="video-background">
  <video autoPlay muted loop playsinline>
    <source src={bvideo} type="video/mp4" />
  </video>
        <div id='main-home'>
            <Navbar/>

           <div className='home-heads'>
            
             <h1>
              Unlimited movies,
            </h1>
             <h1>
              TV shows and more
            </h1>
           </div>
        </div>
        <div style={{marginTop:'100px'}}>
          <Homecaro1/>
        </div>
        <div>
          <Cards/>
        </div>
       <section> <Footer/></section>
       
    </div>
  )
}

export default Homepage
