import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    
    useEffect(()=> {

        

        const getProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/6');
                const data = await response.json();
                setProductDetail(data);
                } catch (error) {
                    console.log(error);
                }
        }
        getProducts()

    }, [])
    
    
    return (
    <div>
        <ItemDetail product={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer