import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInOut from './components/LogInOut';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userCurrent } from './redux/userSlice';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import PrivateRoute from './routes/PrivateRoute';
import Articlelist from './components/Articlelist';
import { getarticles } from './redux/articleSlice';
import Article from './components/Article';
import Navbarr from './components/Navbarr';
import Femmes from './components/Femmes';
import Home from './components/Home';
import Panier from './components/Panier';
import Boutiquelist from './components/Boutiquelist';
import { getboutique } from './redux/boutiqueSlice';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderValidation from './components/OrderValidation';
import Orderlist from './components/Orderlist';
import { getorders } from './redux/orderSlice';
import Contact from './components/Contact';
import About from './components/About';
import Categorie from './components/Categorie';
import Sidebar from './components/Sidebar';
import Articlelistadmin from './components/Articlelistadmin';
import BoutiqueListadmin from './components/BoutiqueListadmin';
import CommandeListadmin from './components/CommandeListadmin';



function App() {
  const dispatch= useDispatch();
  const isAuth = localStorage.getItem("token");
  // useEffect(() => {
  //   if (isAuth ) {
  //    dispatch(userCurrent());
  //   }
  // }, [])

  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getarticles());
    dispatch(getboutique());
    dispatch(userCurrent());
    dispatch(getorders());
  }, [ping])
  
  return (
    <div>
      <Navbarr/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/articlelist" element={<Articlelist ping = {ping} setping = {setping}/>}/>
        <Route path="/boutique/femmes" element={<Femmes ping={ping} setping={setping}/>}/>
        <Route path='/article/:id' element={<Article/>} />
        <Route path="/logInOut" element={<LogInOut/>}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile ping = {ping} setping = {setping}/>}/>
        <Route path="/panier" element={<Panier/>}/>
        <Route path="/validation" element={<OrderValidation/>}  />
        <Route path="/orders" element={<Orderlist/>} />
        <Route path="/dashboard" element={<Sidebar/>} ping = {ping} setping = {setping}/>
        <Route path="/dashboard/articles" element={<Articlelistadmin/>} ping = {ping} setping = {setping}/>
        <Route path="/dashboard/boutiques" element={<BoutiqueListadmin/>} ping = {ping} setping = {setping}/>
        <Route path='/dashboard/orders' element={<CommandeListadmin/>} ping = {ping} setping = {setping}/>
        </Route>
        <Route path="/boutiques" element={<Boutiquelist ping={ping} setping={setping}/>}/>
        <Route path='/boutique/:name' element={<Articlelist/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cat' element={<Categorie/>} />

      </Routes>
      
    </div>
  );
}

export default App;
