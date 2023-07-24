import React from 'react'
import ArticleCard from './ArticleCard'
import {useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Articlelist({ping, setping}) {
    const articles = useSelector((state) => state.article?.article);
    const n = useParams();
    const article = articles?.filter((el) => el?.nom_boutique === n.name);
    console.log(article);
  return (
    <div className='articlelist'> 
      {article?.map((el)=>(<ArticleCard article = {el} ping={ping} setping={setping}/>))} 

    </div>
    
  )
}

export default Articlelist