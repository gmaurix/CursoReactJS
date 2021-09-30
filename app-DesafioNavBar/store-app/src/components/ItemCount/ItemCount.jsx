import { useState } from "react";
//import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './ItemCountStyle.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [changeBoton, setchangeBoton] = useState(true);



    function sumar() {
        if (count < stock) { setCount(count + 1) }
    }
    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const addCart = () => {
        onAdd(count)
        setchangeBoton(false)
    }

    return (
        <>
            <div className='addCarrito'>
                {
                changeBoton
                ?
                    <div>
                        <div>
                            <button id='btnResta' className='btn-success sumres res' onClick={restar}>-</button>
                            <span>{count}</span>
                            <button id='btnSuma' className='btn-success sumres sum' onClick={sumar}>+</button>
                        </div>
                        <button id='btnAdd' onClick={addCart} className='btn-success addcart'>Add to Cart</button>
                    </div>
                :
                    <div>
                        <Link exact to="/">
                            <button id='btnAdd'  className='btn-primary addcart'>↤ Volver </button>
                        </Link>
                        <Link exact to="/cart">
                            <button id='btnAdd'  className='btn-primary addcart'>CheckOut Compra</button>
                        </Link>

                    </div>
                }
            </div>
        </>
    )
}
export default ItemCount