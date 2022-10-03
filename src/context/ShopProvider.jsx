import React, { useState } from 'react'
import { createContext } from "react";


export const Shop = createContext();


const ShopProvider = ({children}) => {
    
    const [cart, setCart] = useState([])


    const addItem = (item, qty) => {


        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, qty: product.qty + qty} : product
            }))
        } else {
            setCart([...cart, {...item, qty}])
        }


    }


    console.log('whott:', cart);


    const isInCart = (id) => {
        return cart.find(product => product.id === id)
    }


    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.qty * act.price, 0)
    }


    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))


    const clearCart = () => {
        setCart([])


    }



    return (
        <Shop.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice}}>
            {children}
        </Shop.Provider>
    )
}


export default ShopProvider;