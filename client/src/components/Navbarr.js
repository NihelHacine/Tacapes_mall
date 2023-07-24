import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,  } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { clearCart } from "../redux/cartSlice";


function Navbarr() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const {cartTotalQuantity} = useSelector ((state) => state.cart);
  const isAuth = localStorage.getItem("token");
  return (
   <div className="navbarr">
        <img src="logo.png" alt=""/>
    <ul className="nav">
      <Link to={'/'}><li>Home</li></Link>
      <Link to={'/boutiques'}><li>Mall</li></Link>
      <Link to={'/about'}><li>About</li></Link>
      <Link to={'/contact'}><li>Contact</li></Link>
    </ul>
    <ul className="nav">
      {isAuth?(<div style={{display:'flex'}}><Link to={'/profile'} ><li>{user?.name} {user?.lastname}</li></Link>
      <Link to={'/panier'}>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg"
           height="1em" viewBox="0 0 576 512" 
           >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>
            <span>{cartTotalQuantity}</span>
            </li>
            </Link>
      <li><button style={{borderRadius:'50%', backgroundColor:'white', border:'none'}} onClick={()=>{dispatch(logout()); dispatch(clearCart()); navigate("/logInOut")}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" ><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
      </svg></button></li>
      </div>
      ):<Link to={'/logInOut'}><li><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" ><path  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></li></Link>}
    </ul>
    {/* <nav className="deroul">

  <label for="touch"><span>Mon compt</span></label>               
  <input type="checkbox" id="touch"/> 

  <ul className="slide">
    <li><a href="#">mes commande</a></li> 
    <li><a href="#">Mon profil</a></li>
    <li><a href="#">se déconnecter</a></li>
  </ul>

</nav>  */}
   </div>
  )
}

export default Navbarr


