import React from 'react'
import './moviepage.css'

function Moviepage() {
  return (
    <>
      <div class="container">
    <div class="poster">
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCd-1hjlfXl4TnIpxP3qrPgVhy2t5_u1DaW-5Sb-mntaczer5w8TMXE1zIgNuoE0N3RYkYNw" alt="Jurassic World: Rebirth Poster"/>
      <p style="text-align:center;">Releasing on 4 Jul, 2025</p>
    </div>
    <div class="details">
      <div class="title">Jurassic World: Rebirth</div>
      <div class="interested">👥 156.2K are interested</div>
      <div class="formats">2D, ICE 3D, MX4D 3D, 4DX 3D, 3D, 3D SCREEN X</div>
      <div class="info">Languages: English, Hindi, Telugu, Tamil</div>
      <div class="info">Duration: 2h 13m | Genres: Action, Sci-Fi, Thriller | Rating: UA13+</div>
      <button class="button">Book tickets</button>
    </div>
  </div>

  <div class="about">
    <h2>About the movie</h2>
    <p>
      Five years after the events of Jurassic World Dominion, the planet's ecology has proven largely inhospitable to dinosaurs. 
      Those remaining exist in isolated equatorial environments with climates resembling the one in which they once thrived. 
      The most colossal creatures within that tropical atmosphere hold the key to a drug that will bring miraculous life-saving 
      benefits to humans.
    </p>
  </div> 
    </>
  )
}

export default Moviepage