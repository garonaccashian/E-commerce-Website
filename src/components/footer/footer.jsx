import React from "react";
import Logo from "../assets/logo_big.png";
import "./footer.css";
const Footer =()=>{
    return(
        <div className="footer">
            <div class="logo">
                <img src={Logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footerlinks">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Footer;