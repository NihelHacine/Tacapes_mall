// import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Boutiquecard.css';
// import { deleteboutique } from '../redux/boutiqueslice';
import { useDispatch } from 'react-redux';

function Boutiquecard({boutique,ping,setping}) {
  const dispatch=useDispatch();

  
  return (

<div className='bodyb'>
<article className="card">
  <img
    className="card__background"
    src={boutique?.image} alt="error "
    width="1920"
    height="2193"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title"> {boutique?.name} </h2>
      
           
      <p className="card__description">
      {boutique?.category} </p>
      <p className="card__description">
      {boutique?.adresse} </p>
     
  
      <Link to={`/boutique/${boutique?.name}`}><button class="card__button"> consulter la boutique</button></Link>
  </div>
  </div>
</article>
</div>
)
}


export default Boutiquecard