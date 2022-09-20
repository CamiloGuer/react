import React from 'react'
import { useNavigate } from 'react-router-dom'
//import ItemCount from '../ItemCount';

const Item = ({product}) => {

  const navigate = useNavigate();
  const handleNavigate = ()=> {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div onClick={handleNavigate}>
      <img src={product.image} width={250} alt="product" />
      <h1>{product.title}</h1>
    </div>
  )
}

export default Item