import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
import { products } from '../../data/products'
import './styles.css'

const ItemListContainer = ({greeting}) => {
  const agregarAlCarro = (cantidad) => {
    console.log(cantidad)
    console.log("Agregaste la cantidad ${cantidad} al carro")
  }
  
  const [productos, setProductos] = useState([])
  useEffect(()=>{
  (async ()=> {
    
    const obtenerProductos = new Promise ((accept, reject)=> {
      setTimeout(()=> {
        accept(products)
      }, 3000);
    })

    try{
      const productos = await obtenerProductos;
      //console.log(response);
      setProductos(productos);
    } catch(error){
      console.log(error);
    }
  })()
},[productos])

  return (
    <div>
        <ItemList products={productos}/>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={15} onAdd={agregarAlCarro}/>
    </div>
  )
}

export default ItemListContainer