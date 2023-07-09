import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/index";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/FireStore";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemid } = useParams();

  useEffect(() => {
    const getProducto = async () => {
      try {
        const q = query(collection(db, "items"), where("id", "==", itemid));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());
        if (data.length > 0) {
          setProducto(data[0]);
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducto();
  }, [itemid]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!producto) {
    return <p>No se encontró el producto con el ID: {itemid}</p>;
  }

  return (
    <section id="menu" className="text-center container">
      <div className="album bg-degrade">
        <div className="container">
          <div className="">
            <ItemDetail detalle={producto} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetailContainer;
