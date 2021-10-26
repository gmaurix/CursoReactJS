import {FiShoppingCart} from "react-icons/fi";
import './CartWidgetStyles.css'
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";

 const CartWidget = () => {
 const {indicadorCarrito}=useContext(cartContext)
 
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