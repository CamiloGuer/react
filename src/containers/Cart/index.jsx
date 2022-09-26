import React from 'react'
import { useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Shop } from '../../context/ShopProvider';


const Cart = () => {

  const {cart, removeItem, clearCart} = useContext(Shop);

  

const columns = [
  { field: 'image', headerName: 'Image', width: 400 },
  { field: 'title', headerName: 'Product', width: 250 },
  { field: 'quantity', headerName: 'Quantity', width: 130 },
  {
    field: 'remove',
    headerName: '',
    width: 120,
  }
];

const filas = []
cart.forEach(item => {
  filas.push({
    id: item.id,
    image: item.image,
    title: item.title,
    quantity: item.quantity,
    remove: <button onClick={removeItem}>borrar</button>,
  })


})

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default Cart;