import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './homepage.css'
import Homecaro1 from '../components/Homecaro1'
import Cards from '../components/Cards'
import Moviepage from './Moviepage'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
        <div id='main-home'>
            <Navbar/>

            <h1>
              Unlimited movies,
            </h1>
             <h1>
              TV shows and more
            </h1>
        </div>
        <div>
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
