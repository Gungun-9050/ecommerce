import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);



const getDefaultCart = () => {
    let cart = []
    for (let i = 0; i < 300+1; i++) {
        cart[i] = 0;            
    }
    // console.log(cart);
    return cart;
}


const ShopContextProvider = (props) => {
    
    const [all_product, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=> {
        fetch('http://localhost:8080/allproducts')
        .then((res)=> res.json()).then((data)=> setAllProduct(data))
    },[])

    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:8080/getcart',{ 
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-type':'application/json'
            },
            body:"",
            }).then((res)=> res.json()).then((data)=> setCartItems(data) )
        }
    
    
    const addToCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:8080/addtocart',{
                method: 'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((res) => res.json())
        }
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:8080/removefromcart',{
                method: 'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((res) => res.json())
        }

    }

    const getTotalCartAmount = ()=> {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item]>0) {
                 let itemInfo = all_product.find((product) => product.id===Number(item))
                 totalAmount += itemInfo.new_price * cartItems[item];
            } 
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0) {
                totalItems += cartItems[item]
            }
        }
        return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart,getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider