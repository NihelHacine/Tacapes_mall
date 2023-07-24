import React from 'react'
import { useSelector } from 'react-redux'
import ArticleCard from './ArticleCard';

function Femmes({ping , setping}) {
    const articles = useSelector((state) => state.article.article);
  return (
    <div>
{articles?.filter((el)=>el?.gender==='femme').map((el)=>(<ArticleCard article = {el} ping={ping} setping={setping}/>))}
    </div>
  )
}

export default Femmes