import React , { useState } from 'react';
import { Link } from "react-router-dom";

import './login.css'


function Login () {


    const handleClick = (e) => {

        return e.target.classList.add('focus');

    }

    const nohandleClick = (e) => {

        return e.target.classList.remove('focus');

    }




const [value , setValue] = useState('');

const [errors , setErrors] = useState([]);

function isRequired(val) {

    return val.length > 0 ? "" : "*cannot be blank";
}

function validate (validations){
    setErrors(validations.map(errorsFor => errorsFor(value)))
}

// const adminUser = {
    
//     name = "humailsaleem",
//     password = "admin123"
// }

// const [user , setUser] = useState ({name="" , password=""});

// const [error , setError] = useState("");

// const Login = details => {

//     console.log("login");

// }

// const Logout = () =>{


//     console.log("logout");

// }





    return (


            <div>

                    <h1 className="text-center mt-5 pt-5">ONLINE SHOPPING STORE</h1>

            <form action="/submitPage" className="login-form">

            <h2>LOGIN SYSTEM</h2>


            <div  className="txtb" onFocus={handleClick} onBlur={nohandleClick} onBlur={() => validate([isRequired])} >


                <input type="text"  valuex={value} onChange={(e) => setValue(e.target.value)}  required /> <span data-placeholder="Username"> </span> 

            
                

            </div>
                       
            {
                    errors.length > 0 ? ( <span className="has-error" >{errors.join(", ")} </span> ) : null
                }
           

            <div className="txtb" onFocus={handleClick}  onBlur={nohandleClick} onBlur={() => validate([isRequired])}  >

                <input type="password"   values={value} onChange={(e) => setValue(e.target.value)} required /> <span data-placeholder="Password"></span> 

            </div>

            {
                    errors.length > 0 ? ( <span className="has-error" >{errors.join(", ")} </span> ) : null
                }

                 < input type="submit" class="logbtn"  value="LOGIN" />


            </form>
      
            </div>



    )


}



export default Login;