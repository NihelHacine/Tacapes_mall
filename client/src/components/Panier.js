import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import '../panier.css';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../redux/cartSlice';
import { addorder } from '../redux/orderSlice';
import Swal from 'sweetalert2'

function Panier() {
  // const carttotal = localStorage.getItem("cartTotal")
  
const dispatch = useDispatch();

const cart = useSelector((state) => state.cart) ; 

const handleRemoveItem = (cartItem) => {
  dispatch(removeFromCart(cartItem));
}
useEffect(() => {
 dispatch(getTotals());
}, [cart])

  return (
    <div className='panier'>
    <div className='cartcontainer'>
      <h2>Panier</h2>
      {cart.cartItems.length === 0 ? (
      <div className='cart-empty'>
        <p>Votre panier est vide ! </p>
        <div className='start-shopping'> 
          <Link to="/boutiques">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
</svg>
           <span>Visiter notre Mall</span>
          </Link>
        </div>
      </div>
      ) : (
      <div className=''>
        <div className='titles'>
          <h3 className='product-title'>Produit</h3>
          <h3 className='product-price'>Prix</h3>
          <h3 className='quantity'>Quantité</h3>
          <h3 className='total'>Total</h3>
        </div>
        <div className='cart-items'>
           {cart.cartItems?.map((cartItem)=>(
           <div className='cart-item' key={cartItem.id}>
              <div className="cart-product">
                <img src={cartItem.image}/>
                <div className=''>
                  <h3>{cartItem.name}</h3>
                  <button onClick={()=>handleRemoveItem(cartItem)}>Supprimer</button>
                </div>
              </div>
              <div className='cart-product-price'>
                {cartItem.price}
              </div>
              <div className='cart-product-quantity'>
                <button onClick={() => dispatch(decreaseCart(cartItem))}>-</button>
                {cartItem.cartQuantity}
                <button onClick={() => dispatch (addToCart(cartItem))}>+</button>
              </div>
              <div className='cart-product-total-price'>
               DT{cartItem.price * cartItem.cartQuantity}
              </div>
           </div>
           ))}
        </div>
        <div className='cart-summary'>
          <button className="clear-cart" onClick={() => dispatch(clearCart())}>Vider votre panier</button>
          <div className='cart-checkout'>
            <div className='subtotal'>
              <span>Subtotal</span>
              <span className='amount'>DT {cart.cartTotalAmount}</span>
              <p>Valider votre commande et gagner une livraison gratuite</p>
              <button ><Link to="/validation">Valider</Link></button>
              <div className='continue-shopping'>
          <Link to="/boutiques">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
</svg>
           <span>Continuer vos achats</span>
          </Link>
        </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
  )
}

export default Panier