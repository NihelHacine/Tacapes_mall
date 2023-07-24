import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import Boutiquecard from './Boutiquecard';






function Boutiquelist({ping,setping}) {
  const boutiques= useSelector((state)=>state.boutique?.boutiquelist);
  const [text, settext] = useState("")

  return (
    <div className='boutique'>
      <div className='addb'>
      {/* <input type="text" onChange={(e)=>settext(e.target.value)}/>  */}
            <div className="searchBox">
        <input className="searchInput" type="text" onChange={(e)=>settext(e.target.value)} name placeholder="Search" />
        <button className="searchButton" href="#">
          <i className="material-icons">
            search
          </i>
        </button>
      </div>
      {/* <Addboutique ping={ping} setping={setping} /> */}
      </div>
      <div className='container'>
       {boutiques?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=>( <Boutiquecard boutique={el} ping={ping} setping={setping} /> ))} 
 
 
 
 </div>
 </div>

  )
}

export default Boutiquelist