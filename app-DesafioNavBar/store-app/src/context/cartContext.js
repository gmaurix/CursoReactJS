import { useState, createContext, useContext } from "react";

export const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);

  function agregarCarrito(producto, cantidad) {
    const index = cartList.findIndex((x) => x.id === producto.id);

    if (index > -1) {
      const anteriorC = cartList[index].cantidad;
      cartList.splice(index, 1);
      setcartList([...cartList, { producto, cantidad: cantidad + anteriorC }]);
    } else {
      setcartList([...cartList, { producto, cantidad }]);
    }
  }

  function borrarCarrito() {
    cartList([]);
  }

  return (
    <cartContext.Provider value={{ cartList, agregarCarrito, borrarCarrito }}>
      {children}
    </cartContext.Provider>
  );
}
