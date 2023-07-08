import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/';
import CartView from '../../components/CartView/CartView';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/FireStore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {categoryId} = useParams()

  const collectionRef = categoryId
  ? query(collection(db, 'products'))
  : collection(db, 'products')

  getDocs(collectionRef)
  .then(response => {
    const productsAdapted = response.docs.map(doc => {
      const data = doc.data()
      return {id: doc.id, ...data}
    })
    setProducts(productsAdapted)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    setIsLoading(false)

  })
}


export default ItemListContainer











