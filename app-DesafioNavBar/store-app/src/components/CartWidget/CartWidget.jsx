import {FiShoppingCart} from "react-icons/fi";
import './CartWidgetStyles.css'
import { cartContext, useCartContext } from "../../context/cartContext";
import { useContext } from "react";



 const CartWidget = () => {
 
   return (
      <>
         <div className="carritoSVG">
            <FiShoppingCart style={{margineft:'1em'}}/>
            <span id='cantidad'>0</span>
         </div>
      </>

   )
}

export default CartWidget;