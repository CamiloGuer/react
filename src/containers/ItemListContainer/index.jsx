import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
//import { products } from '../../data/products'
import './styles.css'

const ItemListContainer = ({greeting}) => {
  const agregarAlCarro = (cantidad) => {
    console.log(cantidad)
    console.log("Agregaste la cantidad ${cantidad} al carro")
  }
  
  const [productos, setProductos] = useState([])
  useEffect(()=>{
  (async ()=> {
    
    
    /*
    const obtenerProductos = new Promise ((accept, reject)=> {
      setTimeout(()=> {
        accept(products)
      }, 3000);
    })
    */


    try{
      if (categoryId){
        const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
        const productos = await response.json();
        setProductos(productos);

      }
      else {      
      const response = await fetch("https://fakestoreapi.com/products");
      const productos = await response.json();
      setProductos(productos);}

    } catch(error){
      console.log(error);
    }
  })()
},[categoryId])

  return (
    <div>
        <ItemList products={productos}/>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={15} onAdd={agregarAlCarro}/>
    </div>
  )
}

export default ItemListContainer