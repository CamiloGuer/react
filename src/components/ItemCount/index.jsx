import React, {useState} from 'react'
import { useEffect } from 'react';
import './styles.css'


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const sumar = () => {
        if(count < stock){
        setCount(count + 1)
    }
    else{ alert("No hay stock")};}


    const resta = () => {
        if(count > 0)
        {setCount(count - 1)}
    }
    useEffect(()=>{


    },[count])


    const addCart = () => {
        onAdd(count)
        setCount(initial)
    }


    return (
    <>
        <div className='contador'>
        <button onClick={resta}>-</button>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        </div>
        <button className='carritos' onClick={addCart}>Agregar al Carrito</button>
    </>
  )
}


export default ItemCount;