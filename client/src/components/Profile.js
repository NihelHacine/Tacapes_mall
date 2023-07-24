import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout, userEdit } from '../redux/userSlice';
import '../profile.css'

function Profile({ping, setping}) {
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();
    const [editeduser, setediteduser] = useState({
      'name' : user?.name,
      'lastname' : user?.lastname,
      'adress' : user?.adress,
      'phonenumber' : user?.phonenumber
    })
  return (
    <div className='profile'>
      <form method="get" action="javascript: void(0);" id="login-form" className="login-form" autoComplete="off" role="main">
        <h1 className="a11y-hidden">Login Form</h1>
        <center><h3>Bonjour {user?.lastname} {user?.name}</h3></center>
        <div>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.lastname}  onChange={(e)=>{setediteduser({...editeduser,lastname:e.target.value})}}/>
            <span className="required">Nom </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.name}   onChange={(e)=>{setediteduser({...editeduser,name:e.target.value})}}/>
            <span className="required">Prénomm </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.adress}   onChange={(e)=>{setediteduser({...editeduser,adress:e.target.value})}}/>
            <span className="required">Adresse </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.phonenumber}   onChange={(e)=>{setediteduser({...editeduser,phonenumber:e.target.value})}}/>
            <span className="required">Num-tel </span>
          </label>
          <button onClick={()=>{dispatch(userEdit({id:user?._id,editeduser}));setping(!ping)}}>modifier</button>
        </div>
  
        <figure aria-hidden="true">
          <div className="person-body" />
          <div className="neck skin" />
          <div className="head skin">
            <div className="eyes" />
            <div className="mouth" />
          </div>
          <div className="hair" />
          <div className="ears" />
          <div className="shirt-1" />
          <div className="shirt-2" />
        </figure>
        
      </form>
    </div>
  )
}

export default Profile

    // <div><button onClick={()=>{dispatch(logout()); navigate("/logInOut")}}>logout</button></div> */}