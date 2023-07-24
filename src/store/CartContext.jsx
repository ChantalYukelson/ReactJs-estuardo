import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.cant += cant;
          return copyItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const estaEnCarrito = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getItemFromCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const getItemQuantity = (id) => {
    const item = getItemFromCart(id);
    return item ? item.cant : 0;
  };

  function precioTotal() {
    let total = 0;
    cart.map((i) => (total += i.price * i.cant));
    return total;
  }

  function itemsTotal() {
    let cantidad = 0;
    cart.map((i) => (cantidad += i.cant));
    return cantidad;
  }

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        estaEnCarrito,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        getItemFromCart,
        getItemQuantity,
        precioTotal,
        itemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
