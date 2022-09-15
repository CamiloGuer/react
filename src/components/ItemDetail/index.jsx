import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div className='detail-container'>
        <h1>{product.title}</h1>
        <img className='detail-img' src={product.image} alt="x" />
        <ItemCount/>
    </div>
  )
}

export default ItemDetail