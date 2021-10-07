import { useState, createContext, useContext } from "react";

export const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);

  function agregarCarrito(producto) {
    /* -------------------------------------------------------------------------- */
    /*    aca creo un array y guardo el cartList actual con lo que sea q tenga    */
    /* -------------------------------------------------------------------------- */
    const anteriorC = [...cartList];
    
    // y pregunto si en el array hay algun producto q coincida con el ID del producto que le estoy por agregar
    // hace un busqueda y busca la coincidencia x el ID, si se da le setea el carrito
    
    
    if (anteriorC.some((p) => p.producto.id === producto.producto.id)) {
      anteriorC.find((p) => p.producto.id === producto.producto.id).cantidad +=
        producto.cantidad;
      setcartList(anteriorC);
    } else {
      //sino agrega el producto
      setcartList([...cartList, producto]);
    }
  }

  function borrarCarrito() {
    cartList([]);
  }

  function quitarProducto(id) {
    setcartList(cartList.filter((p) => p.id !== id));
  }

  function calcularTotal() {
    let total = 0;
    cartList.forEach(({ producto }) => {
      total += producto.Precio * producto.cantidad;
    });
    console.log("total");
    console.log(total);
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        borrarCarrito,
        quitarProducto,
        calcularTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
