import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar.css'


function Sidebar() {
    useEffect(() => {const sidebar = document.querySelector(".sidebar");
    const sidebarClose = document.querySelector("#sidebar-close");
    const menu = document.querySelector(".menu-content");
    const menuItems = document.querySelectorAll(".submenu-item");
    const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
    
    sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));
    
    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        menu.classList.add("submenu-active");
        item.classList.add("show-submenu");
        menuItems.forEach((item2, index2) => {
          if (index !== index2) {
            item2.classList.remove("show-submenu");
          }
        });
      });
    });
    
    subMenuTitles.forEach((title) => {
      title.addEventListener("click", () => {
        menu.classList.remove("submenu-active");
      });
    });
      
    }, [])
    
  return (
    <>

    <div className='dashboard_admin'>
        <>
  {/* Coding By CodingNepal - codingnepalweb.com */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sidebar Menu for Admin Dashboard | CodingNepal</title>
  <link rel="stylesheet" href="style.css" />
  {/* Fontawesome CDN Link */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  />
  <nav className="sidebar">
    <a href="/dashborad" className="logo">
      Tacapes Mall 
    </a>
    <div className="menu-content">
      <ul className="menu-items">
        <div className="menu-title"> <a href="/dashboard"> Menu </a>  </div>
        <li className="item">
          <a href="#"> Users </a>
        </li>
        <li className="item">
          <div className="submenu-item">
            <span> <Link to="/dashboard/articles"> Articles </Link> </span>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <ul className="menu-items submenu">
            <div className="menu-title">
              <i className="fa-solid fa-chevron-left" />
               Articles 
            </div>
          </ul>
        </li>
        <li className="item">
          <div className="submenu-item">
            
            <span> <Link to="/dashboard/boutiques"> shops </Link> </span>
            <i className="fa-solid fa-chevron-right" />
          </div>
          <ul className="menu-items submenu">
            <div className="menu-title">
              < a href="#" />
              Shops <a/>
            </div>
            </ul>
        </li>
        <li className="item">
          <span> <Link to="/dashboard/orders"> Orders </Link> </span>
        </li>
      </ul>
    </div>
  </nav>
  <nav className="navbar">
    <i className="fa-solid fa-bars" id="sidebar-close" />
  </nav>
 
</>

    </div>

    </>
  )
}

export default Sidebar