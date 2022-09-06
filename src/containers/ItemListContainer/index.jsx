import React from 'react'
import ItemCount from '../../components/ItemCount'
import './styles.css'

const ItemListContainer = ({greeting}) => {
  const agregarAlCarro = (cantidad) => {
    console.log(cantidad)
    console.log("Agregaste la cantidad ${cantidad} al carro")
  }
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={15} onAdd={agregarAlCarro}/>
    </div>
  )
}

export default ItemListContainer