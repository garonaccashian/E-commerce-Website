import React, { useContext } from "react";
import './display.css';
import staricon from "../assets/star_icon.png";
import stardullicon from "../assets/star_dull_icon.png";
import { Shopcontext } from "../../context/shopcontext";
const Displayproduct=(props)=>{
    const {product} = props;
    const {addtocart}=useContext(Shopcontext);
    return(
        <div className="display">
            <div className="displayleft">
                <div className="displayimages">
                   { /*you can either use the props it this way*/}
                    <img src={props.product.image} alt=""/>
                     {/* or this way */}
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="mainimg">
                    <img src={product.image} alt="" />
                </div>

            </div>
            <div className="displayright">
                <h1>{product.name}</h1>
                <div className="displayrightstar">
                    <img src={staricon} alt=""/>
                    <img src={staricon} alt=""/>
                    <img src={staricon} alt=""/>
                    <img src={staricon} alt=""/>
                    <img src={stardullicon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="productprices">
                    <div className="oldprice">
                       $ {product.old_price}
                    </div>
                    <div className="newprice">
                    $ {product.new_price}
                    </div>
                    <div className="description">
                        Jacket knitted well
                    </div>
                    <div className="size">
                        <h1>Select Size</h1>
                        <div className="displaysizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addtocart(product.id)}} className="addtocart">Add To Cart</button>
                    <p className="categorydisplay">
                        <span>Category: </span> Women
                    </p>
                    <p className="categorydisplay">
                        <span>Tags: </span> Modern
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Displayproduct;