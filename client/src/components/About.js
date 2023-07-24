import React from 'react'
import '../About.css';

function About() {
  return (
    <div>
         <div className='about '>
      <video className='vid' autoPlay loop muted   >
  <source src="video.mp4" type="video/mp4"/>
    </video>
    <h4>Description </h4>
<center> <h5>Notre site "TACAPES MALLL" est le premier MAll en ligne à Gabès. Il renferme plusieurs boutiques de différentes catégories pour les deux sexes(hommmes et femmes): vetements, chaussures, accesoires et cosmétique.
    Sans aucun déplacement, vous pouvez faire alors votre shopping par un simple clique.
   </h5></center> 
    </div>

    </div>
  )
}

export default About