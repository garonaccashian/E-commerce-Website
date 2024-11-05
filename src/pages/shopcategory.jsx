import React, { useContext } from "react";
import "./css/shopcategory.css";
import { Shopcontext } from "../context/shopcontext";
import dropdown from "../components/assets/dropdown_icon.png";
import Item from '../components/item/item';
const Shopcategory =(props)=>{
    const {all_product}=useContext(Shopcontext);
    return(
        <div className="shopcategory">
            <img className="banner" src={props.banner} alt=""/>
            <div class="indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 products

                </p>
                <div className="categorysort">
                    Sort by <img src={dropdown} alt="" />
                </div>
            </div>
            <div className="categoryproducts">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default Shopcategory;