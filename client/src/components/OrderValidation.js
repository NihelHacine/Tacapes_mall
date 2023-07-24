import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { addorder } from '../redux/orderSlice';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


function OrderValidation() {
  const navigate = useNavigate();
  //alert 
  const alert =()=> Swal.fire({
    title: 'Valider votre commande ?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'valider ma commande',
    denyButtonText: `annuler la commande`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      validOrder();
      navigate("/panier");
      Swal.fire('Commande validée avec succès!', '', 'success')
    } else if (result.isDenied) {
      cancelOrder();
      Swal.fire('Vous avez vider votre panier! recommencez votre shop', '', 'info')
      navigate("/panier");
    }
  })
  //fin alert
  const cart = useSelector((state) => state.cart) ; 
  const dispatch = useDispatch();
  
const cu_user = useSelector((state) => state.user?.user);

const [order, setorder] = useState({
  orderItems : cart.cartItems,
  // orderTotal : cart.cartTotalAmount,
  orderTotal : cart.cartTotalAmount,
  orderStatus : "en cours de traitement",
  current_user : cu_user?.email,
  user_adress : cu_user?.adress,
  user_gsm : cu_user?.phonenumber,
  user_fullname : cu_user?.name + " " + cu_user?.lastname,
  date_v : Date(),

})

const validOrder =() => {
  dispatch(addorder(order));
  dispatch(clearCart());
}
const cancelOrder =() => {
  dispatch(clearCart(order));
}
   
  return (
 <div style={{padding:'10%'}}>
  <h1 align='center'>Voulez vous confirmer votre commande ??</h1>
  <div style={{display:'flex', justifyContent:'center'}}>
   <button style={{backgroundColor:'blue', color:'white', border:'0px', height:'40px',borderRadius:'5px'}}  onClick={()=>alert()}>Confirmer</button>
   </div>
 </div>
  );
}



export default OrderValidation