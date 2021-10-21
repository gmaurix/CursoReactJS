import { useState, createContext, useContext } from "react";

export const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext);
export default function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);

  function agregarCarrito(producto) {
    const anteriorC = [...cartList];
    if (anteriorC.some((p) => p.producto.id === producto.producto.id)) {
      anteriorC.find((p) => p.producto.id === producto.producto.id).cantidad +=
        producto.cantidad;
      setcartList(anteriorC);
    } else {
      setcartList([...cartList, producto]);
    }
  }

  function borrarCarrito() {
    cartList([]);
  }

  function quitarProducto(producto) {
    const quitarProd = cartList.filter((p) => p.producto.id !== producto.id);
    setcartList([...quitarProd]);
  }
  
  const indicadorCarrito = () => {
    return cartList.reduce((ac, producto) => ac + producto.cantidad, 0);
  };

  function calcularTotal() {
    let total = 0;
    cartList.forEach(({ producto, cantidad }) => {
      total += producto.Precio * cantidad;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        borrarCarrito,
        quitarProducto,
        indicadorCarrito,
        calcularTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
