import React from 'react'
import { useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Shop } from '../../context/ShopProvider';
import { Link } from 'react-router-dom';
import ItemCart from '../../components/ItemCart/index.jsx'



const Cart = () => {


const {cart, totalPrice} = useContext(Shop)
    console.log('llega', cart)
    return (
        <div>
            {
                cart.length === 0 ?
                <div className='d-flex flex-column justify-content-center text-center mx-auto py-4'>
                <p className='btn btn-danger'>No hay elementos en el carrito</p>
                <Link to='/' className='btn btn-outline-dark' style={{width: ''}}>!Realiza tu compra!</Link>
            </div>
                :
                cart.map(product => 
                <ItemCart key={product.id} product={product}/>
                )
            }    
            <div className='d-flex justify-content-center'>
                <p className='btn btn-dark' style={{width: '15rem'}}>Total: ${totalPrice()}</p>
            </div>  
        </div>
    )
}


export default Cart;