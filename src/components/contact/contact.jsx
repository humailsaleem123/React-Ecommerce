import React from 'react';
import './contact.css'

function Contact () {





return (


<>

<section className="contact-p">

<h1 className="text-center mt-5"> CONTACT / SUPPORT OUR TEAM !</h1> 
<center>
<header className="contact-container">

<form action="/" className="contact">   
  

<label for="fname" style={{float : 'left'}}>First Name</label>

<input className="in-class" type="text" name="firstname" placeholder="Your name.." required />

<label for="lname" style={{float : 'left'}}>Last Name</label>

<input  className="in-class" type="text"  name="lastname" placeholder="Your last name.." required/>


<label for="country" style={{float : 'left'}}>Country</label>


<select className="contact-select" id="country" name="country" required>

<option value="pakistan">Pakistan</option>
<option value="canada">Canada</option>
<option value="usa">USA</option>

</select>



<label for="subject" style={{marginTop : '19px', float : 'left'}} >Subject</label>
    <textarea  name="subject" placeholder="Write something.." style={{height : '200px' , resize : 'none'}} required></textarea>

    <input  className="in-class" type="submit" />
   
</form>

</header>

</center>
</section>

   

</>

)




}

export default Contact;