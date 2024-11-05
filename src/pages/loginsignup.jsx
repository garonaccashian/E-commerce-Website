import React from "react";
import "./css/login.css";
const LoginSignup =()=>{
    return(
        <div className="loginsignup">
            <div className="logincontainer">
                <h1>Sign Up</h1>
                <div className="loginfields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="password" placeholder="Your Password"/>
                    
                </div>
                <button className="continue">Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
                <div className="loginagree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the terms & conditions</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup;