import React from 'react'
import '../articlecard.css';
import '../product.css'
import { useDispatch } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

function ArticleCard({article}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (article) => {
    dispatch(addToCart(article));
    navigate("/panier");
  }
  return (
    <div className="row card">
    <div className="col-md-3 col-sm-6">
      <div className="product-grid">
        <div className="product-image">
          <a href="#" className="image">
            <img className="pic-1" src={article?.image} />
          </a>
          <ul className="product-links">
            <li><button onClick={()=> handleAddToCart(article)}><i className="fa fa-shopping-bag" /> Add to cart</button></li>
            <li><a href="#"><i className="fa fa-search" /> Quick View</a></li>
          </ul>
        </div>
        <div className="product-content">
          <h3 className="title"><a href="#">{article?.name}</a></h3>
          <div className="price">{article?.price} dt <Link to={`/article/${article?._id}`}><button >Consulter</button></Link></div>
        </div>
      </div>
    </div>
 
  </div>

/* <div className='product'> 
<div className="container">
<div className="overlay">
  <div className="items" />
  <div className="items head">
    <p>{article?.name}</p>
    <hr />
  </div>
  <div className="items price">
    <p className="old">DT{article?.price} </p>
  </div>
  <div className="items cart">
    <i className="fa fa-shopping-cart" />
    <span>ADD TO CART</span>
  </div>
</div>
</div> 
</div>
*/
  )
}

export default ArticleCard