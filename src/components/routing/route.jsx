import React , {useState} from "react";
import { Link , NavLink } from "react-router-dom";



function DRoute({ count , changeCat , setAll}) {


    return (
<>

        <div className="middle">

            <ul className="nav nav-pills">

                <li  className="nav-item">

                   <NavLink className="nav-link" to="/all"  onClick={setAll}   style={{textDecoration:'none'}} >All</NavLink>

                </li>


                <li className="nav-item">

                    <NavLink className="nav-link" to="/furniturePage"  style={{textDecoration:'none'}}  onClick={() => changeCat('garments')} >garments</NavLink>

                </li>


                
                <li className="nav-item">

                    <NavLink  className="nav-link" to="/bagsPage" style={{textDecoration:'none'}}  onClick={() => changeCat('bags')} >bags</NavLink>

                </li>


                                
                <li className="nav-item">

                    <NavLink  className="nav-link" to="/decorationPage"   style={{textDecoration:'none'}} onClick={() => changeCat('edibles')} >EDIBLES</NavLink>

                </li>


                <li className="nav-item">

                    <NavLink  className="nav-link" to="/shoesPage" style={{textDecoration:'none'}}  onClick={() => changeCat('shoes')} >shoes</NavLink>

                </li>


            </ul>

           

        </div>

        <div>

         <h5 className="pl-5 pb-3">Total Products = {count} </h5>
   
         </div>
</>
        )
}

export default DRoute;