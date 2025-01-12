import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    const [menu,setMenu]=useState("shop");
    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>setMenu("shop")}> <Link to='/' style={{textDecoration:"none"}}>Shop</Link>  {menu==="shop"?<hr/>:<></>} </li>
                <li onClick={()=>setMenu("men")}> <Link to='/men' style={{textDecoration:"none"}} >Men</Link> {menu==="men"?<hr/>:<></>} </li>
                <li onClick={()=>setMenu("women")}> <Link to='/women' style={{textDecoration:"none"}} > Women </Link>  {menu==="women"?<hr/>:<></>} </li>
                <li onClick={()=>setMenu("kids")}><Link to='/kids' style={{textDecoration:"none"}} >Kids </Link> {menu==="kids"?<hr/>:<></>} </li>
            </ul>
            <div className='login-cart'>
              <Link to='/login'><button>Login</button></Link>  
              <Link to='/cart'>  <img src={cart_icon} alt=""/></Link>
                <div className='cart-count'>
                    0
                </div>
            </div>

        </div>
    )
}

export default Navbar;