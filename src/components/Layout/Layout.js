import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout() {
  return (
    <Fragment>
      <div className="out_container ">
      
        <nav className="navbar">
      <img className = " img" alt="logomarca" src={require("../../images/logo.png")}/>

      <AuthStatus  />
      
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/protected">Faça Login</Link>
        </li>
      </ul>
      </nav>
      </div>
      <div className="container">
      <Outlet />
      </div>
      <Contact />
      <Footer />
      
      </Fragment>
      
     
   
  );
}

export default Layout;
