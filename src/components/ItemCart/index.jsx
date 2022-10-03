import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'


const ItemCart = ({product}) => {
    console.log(product, 'ahhh');
    const {removeItem} = useContext(Shop)
    return (
        <div className='itemCart d-flex align-items-center justify-content-evenly my-4'>
            <img src={product.image} alt={product.title} width={200} className=''/>
            <div className=''>
                <p className='h6 my-3'>{product.title}</p>
                <p>Cantidad: {product.qty}</p>
                <p>Precio x unidad: ${product.price}</p>
                <p>Subtotal: ${product.price * product.qty}</p>
                <p className='btn btn-danger' onClick={() => removeItem(product.id)}>Eliminar</p>
            </div>
        </div>
    )
}


export default ItemCart