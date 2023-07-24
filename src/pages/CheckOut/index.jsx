import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/FireStore";
import TextField from "@mui/material/TextField";
import MessageSuccess from "../../MessageSuccess/MessageSuccess";
import { useCartContext } from "../../store/CartContext"; // Importa el contexto CartContext

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const ShopPage = () => {
  const { clearCart } = useCartContext(); // Obtiene la función clearCart del contexto CartContext
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Nuevo estado para mostrar el mensaje

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Agregamos el nuevo documento con los valores del formulario
      const docRef = await addDoc(collection(db, "purchasesCollection"), {
        ...values,
      });

      // Actualizamos el estado para mostrar el mensaje de éxito
      setPurchaseID(docRef.id);
      setShowSuccessMessage(true);

      // Vaciamos el carrito después de completar la compra
      clearCart();

      // Reiniciamos los valores del formulario
      setValues(initialState);
    } catch (error) {
      console.error("Error al agregar el documento:", error);
    }
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "white" }}>Shop</h1>
      {showSuccessMessage ? ( // Mostramos el mensaje de éxito si showSuccessMessage es true
        <MessageSuccess purchaseID={purchaseID} />
      ) : (
        <form className="FormContainer" onSubmit={onSubmit}>
          <TextField
            placeholder="Name"
            style={{ margin: 10, width: 400 }}
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Last Name"
            style={{ margin: 10, width: 400 }}
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="City"
            style={{ margin: 10, width: 400 }}
            name="city"
            value={values.city}
            onChange={handleOnChange}
          />
          <button className="btnASendAction" type="submit">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ShopPage;
