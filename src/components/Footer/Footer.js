import React, { Fragment } from "react";
import "./Footer.css";

function Footer() {
  return (
    <Fragment>
      <div className="footer_container">
      
        <div className="footer_content">
      

     <div className="copywrite"> @LINNA2VEZES</div>
      
      <ul id="menu_footer">
             <li>
          <a alt="" href="https://abre.ai/linnanunes">Fale Conosco <img alt="logomarca" src={require("../../images/icon-whatsapp-25.png")}/></a>
        </li>
       </ul>
      </div>
      </div>
     
      
      </Fragment>
      
     
   
  );
}

export default Footer;
