import  React, {useState} from "react";
import Data from "../data";
import Card from "./card";
import { Link , NavLink} from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import Slider from './Add-to-Cart/slider'





function Header({ click  , countCartItems   }){


  
 


        return(

          <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/all" className="navbar-brand"> Online Shopping Store</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 px-2 mb-lg-0">
              <li className="nav-item">
               <NavLink className="nav-link" to="/all">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
              </li>

              <li className="nav-item">
                 <NavLink  className="nav-link" to="/Aboutus">About Us</NavLink>
              </li>



            </ul>
  


                          
        
          

            <div className="setting-icon">



                              <FaShoppingCart onClick={click}  />

                              {countCartItems ? (
                                    <button className="slider-btn badge">{countCartItems}</button>) : ('')}  {''}
                                    


            </div>


            <div className="setting-icon">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
            </div>
          </div>
        </div>
      </nav>


      

       </>
 
        )


      
      
}
export default Header;