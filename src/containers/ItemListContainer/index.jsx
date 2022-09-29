import React, { useEffect } from 'react'
import { useState } from 'react'
//import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
//import { products } from '../../data/products'
import './styles.css'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  console.log(categoryId);

  useEffect(() => {
      (async () => {
          try {
            

            const q = query(collection(db, "products"));
            
            const querySnapshot = await getDocs(q);
            const productosFirebase = []
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              productosFirebase.push({id: doc.id, ...doc.data()})
            });

            setProductos(productosFirebase)
            
            
            {/*if (categoryId){
                const response = await fetch(
                  "https://fakestoreapi.com/products/category/" + categoryId
              );
              const productos = await response.json();
              setProductos(productos);
              }
              else {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const productos = await response.json();
                setProductos(productos);
              }*/}
          } catch (error) {
              console.log(error);
          }
      })();
  }, [categoryId]);

  return <ItemList products={productos} />;
};

export default ItemListContainer