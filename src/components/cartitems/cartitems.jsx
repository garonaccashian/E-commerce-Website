import React, { useContext } from "react";
import './cartitems.css';
import { Shopcontext } from "../../context/shopcontext";
import removeicon from "../assets/cart_cross_icon.png";
const Cartiems=()=>{
    const {getTotal,all_product,cartitem,removefromcart}=useContext(Shopcontext);
    return(
        <div className="cartitems">
            <div className="cartitemmain">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if(cartitem[e.id]>0){
                 return   <div>
                <div className="cartitemsformat cartitemmain">
                    <img src={e.image} alt="" className="producticon" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitemsqty">{cartitem[e.id]} </button>
                    <p> ${e.new_price*cartitem[e.id]} </p>
                    <img className="removeicon" src={removeicon} onClick={()=>{removefromcart(e.id)}} alt="" />
                </div>
                <hr/>
            </div>
                }
                return null;
            })}
            <div className="cartitemsbottom">
                <div className="cartitemstotal">
                    <h1>Total</h1>
                    <div className="totalcontainer">
                        <div className="carttotal">
                            <p>Subtotal</p>
                            <p>{getTotal()}</p>
                        </div>
                        <hr/>
                        <div className="carttotal">
                            <p>VAT 11%</p>
                            
                        </div>
                        <hr/>
                        <div className="carttotal">
                            <h3>Total:</h3>
                            <h3>${getTotal()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cartiems;