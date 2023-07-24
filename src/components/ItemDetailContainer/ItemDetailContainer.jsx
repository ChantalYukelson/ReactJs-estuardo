// ItemDetailContainer.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/index";
import { db } from "../../services/FireStore";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const { itemid } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducto(itemid) {
      try {
        const itemRef = doc(db, "clothes", itemid); // Update collection name here
        const itemSnapshot = await getDoc(itemRef);

        if (itemSnapshot.exists()) {
          setProducto(itemSnapshot.data());
        } else {
          throw new Error("El producto no fue encontrado.");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProducto(itemid);
  }, [itemid]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ItemDetail detalle={producto} />;
}

export default ItemDetailContainer;
