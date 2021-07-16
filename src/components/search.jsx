import React, { useState } from "react";
import Data from "../data";
import Card from "./card";


function Search ({ data }) {





return(
    <>
<div className="search">
    <form className="d-flex">

        <input className="form-control me-2" type="search" onChange={data} placeholder="Search" />

    </form>



</div>


</>

     )  

     

}
export default Search;    
