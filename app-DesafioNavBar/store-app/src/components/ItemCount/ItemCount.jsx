import { useState } from "react";
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
                            <button id='btnResta' className='btn-primary sumres res' onClick={restar}>-</button>
                            <span>{count}</span>
                            <button id='btnSuma' className='btn-primary sumres sum' onClick={sumar}>+</button>
                           <button id='btnAdd' onClick={addCart} className='btn-primary addcart'>Add to Cart</button>
                        </div>
                    </div>
                :
                    <div>
                        <Link exact to="/">
                            <button id='btnAdd'  className='btn-primary addcart'>Seguir Comprando </button>
                        </Link>
                        <Link exact to="/cart">
                            <button id='btnAdd'  className='btn-primary addcart'>Terminar Compra</button>
                        </Link>

                    </div>
                }
            </div>
        </>
    )
}
export default ItemCount