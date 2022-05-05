

 import React, { Fragment } from "react";
import { Button } from "../../routes/styled";
 import "./Contact.css";
 
 function Contact() {
   return (
     <Fragment>
         
 <div className="out_form_container">
     <div className="container">

<div className= "form">
 <h3 className="title">CONTATO</h3>
 <p className="form-description">Se tem interesse em conhecer mais sobre nosso trabalho, entre em contato!</p>
 </div>
 
 <form id="formcontact" className="form">
 
 <input  type="text" name="name" placeholder="Seu nome" />

 <input  type="email" name="email" placeholder="Seu email"  />

 <textarea htmlFor="comment" name="comment" id="comment" rows="4" cols="50" placeholder="Escreva sua mensagem aqui..."></textarea> 
 <Button type="submit" id="button_form" className="button button__solid"> Enviar </Button>
 </form>
 </div>
 </div>
     
      
     </Fragment>
     
    
  
 );
}

export default Contact;