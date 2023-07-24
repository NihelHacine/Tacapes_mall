import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLogin, userRegister } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import '../logInOut.css';

function LogInOut() {
  const dispatch = useDispatch();
  //redirection 
  const navigate = useNavigate();

  //state register
  const [register, setregister] = useState({
    name : "",
    lastname : "" , 
    adress: "",
    phonenumber : "",
    email : "" ,
    password :"" , 
    role : "user"
  });
  //state login 
  const [login, setlogin] = useState({
    email : "" ,
    password :"" , 
  })


  //js de la page
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }, [])
    
  return (
    //registration
    <div className='log'>
        <h2 className='h2'>Welcome to Tacapes' Mall</h2>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form className='form' onSubmit={(e)=>e.preventDefault()}>
              <h1 className='h1'>Create Account</h1>
              <span className='span'>or use your email for registration</span>
              <input className='input' type="text" placeholder="Name" onChange={(e)=> setregister({...register,name : e.target.value})} required/>
              <input className='input' type="text" placeholder="LastName" onChange={(e)=> setregister({...register,lastname : e.target.value})} required/>
              <input className='input' type="text" placeholder="Adress" onChange={(e)=> setregister({...register,adress : e.target.value})}/>
              <input className='input' type="text" placeholder="Phone number" onChange={(e)=> setregister({...register,phonenumber : e.target.value})} required/>
              <input className='input' type="email" placeholder="Email" onChange={(e)=> setregister({...register,email : e.target.value})}/>
              <input className='input' type="password" placeholder="Password" onChange={(e)=> setregister({...register,password : e.target.value})} required/>
              <button className='button' onClick={() => {dispatch(userRegister(register));
              setTimeout(() => {
                navigate("/profile")
              }, 1000);
              }}>Sign Up</button>
            </form>
          </div>

          <div className="form-container sign-in-container">
            <form className='form' onSubmit={(e)=> e.preventDefault()}>
              <h1 className='h1'>Sign in</h1>
              <span className='span'>or use your account</span>
              <input className='input' type="email" placeholder="Email" onChange={(e)=> setlogin({...login,email : e.target.value})}/>
              <input className='input' type="password" placeholder="Password" onChange={(e)=> setlogin({...login,password : e.target.value})}/>
              <a className='a' href="#">Forgot your password?</a>
              <button className='button' onClick={() => {dispatch(userLogin(login)); 
                setTimeout(() => {
                  navigate("/")
                }, 1000);
                // setTimeout(() => {
                //   window.location.reload();
                // }, 1000);
                
                }
                
                }>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className='h1'>Welcome Back!</h1>
                <p className='p'>To keep connected with us please login with your personal info</p>
                <button className="ghost button" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className='h1'>Hello, Customer!</h1>
                <p className='p'>Enter your personal details and start shopping with us</p>
                <button className="ghost button" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LogInOut