import {FiShoppingCart} from "react-icons/fi";
import './CartWidgetStyles.css'
import { cartContext, useCartContext } from "../../context/cartContext";
import { useContext } from "react";



 const CartWidget = () => {
 const {indicadorCarrito}=useContext(cartContext)
 const comprobar=()=>{
    if(indicadorCarrito<=0){
       console.los('ocultar')
    }else{
      console.los('mostrar')
    }
 }
   return (
      <>
         <div className="carritoSVG">
            <FiShoppingCart style={{margineft:'1em'}}/>
            <span id='cantidad'>{indicadorCarrito()}</span>
         </div>
      </>

   )
}

export default CartWidget;