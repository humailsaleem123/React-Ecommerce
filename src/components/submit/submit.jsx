import React from 'react';
import './submit.css'
import { Link } from "react-router-dom";

function SubmitBtn(){





    return (

<>
        <div className="text-center itms-success wrapper">

            <center><h1>YOUR ITEMS ORDER SUCCESSFULLY</h1></center>
            
            <Link to="/all"><button className="glow-on-hover">Go Back To Home Page</button></Link>
        </div>
        


        


        </>
    )
}


export default SubmitBtn;