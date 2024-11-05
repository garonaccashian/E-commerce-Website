import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const Shopcontext = createContext(null);
const getDefaultCart=()=>{
    let cart = {};
    for(let index=0; index<= all_product.length;index++){
        cart[index]=0;

    }
    return cart;
}
const ShopContextProvider = (props)=>{
    
    const [cartitem,setCart]=useState(getDefaultCart());
    
    const addtocart=(itemid)=>{
        setCart((prev)=>({...prev,[itemid]:prev[itemid]+1}));
        console.log(cartitem);
    }
    const removefromcart=(itemid)=>{
        setCart((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const getTotal=()=>{
        let totalamount = 0;
        for(const item in cartitem){ 
            if(cartitem[item]>0)
                {
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                let total= iteminfo.new_price * cartitem[item];
                totalamount+=total;
                
            }
           
           
        }
        return totalamount;
    }
    const contextValue = {getTotal,all_product,cartitem,addtocart,removefromcart};
    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider;