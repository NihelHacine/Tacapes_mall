import React from 'react'
import Categorie from './Categorie'

function Home() {
  return (
    <div >
      <div className='video' >
      <video autoPlay loop muted  style={{ width:'100%', height : 'auto'}} >
  <source src="viva.mp4" type="video/mp4"/>
    </video>
    </div>
    <button className='home-button'>Shopping Now</button>
    </div>
  )
}

export default Home