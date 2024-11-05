import React, { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrums/breadcrum";
import Displayproduct from "../components/displayproduct/displayproduct";

const Product =()=>{
    const {all_product} =useContext(Shopcontext);
    const {productId}=useParams();
    const product=all_product.find((e)=> e.id === Number(productId));

    return(
        <div>
            <Breadcrum product={product}/>
            <Displayproduct product={product}/>
        </div>
    )
}

export default Product;