import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"; // Importar desde "../ItemDetail" en lugar de "../ItemDetail/ItemDetail"
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../services/FireStore";
import { doc, getDoc } from "firebase/firestore";

async function getProducto(itemid) {
  try {
    const itemRef = doc(db, "items", itemid);
    const itemSnapshot = await getDoc(itemRef);

    if (itemSnapshot.exists()) {
      return itemSnapshot.data();
    } else {
      throw new Error("El producto no fue encontrado.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { itemid } = useParams();

  useEffect(() => {
    getProducto(itemid)
      .then(respuestaPromise => {
        setProducto(respuestaPromise);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemid]);

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
