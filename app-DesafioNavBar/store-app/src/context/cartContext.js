import { useState, createContext, useContext } from "react";

export const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);
  function addToCart(producto) {
    setcartList([...cartList, producto]);
  }

  function borrarCarrito() {
    cartList([]);
  }

  return (
    <CartContextProvider value={{ cartList, addToCart, borrarCarrito }}>
      {children}
    </CartContextProvider>
  );
}
