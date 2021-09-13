import { useState } from "react"

import './ItemCountStyle.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    
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
    }

    return (
        <>
            <div className='addCarrito'>
                <div>
                    <button id='btnResta' className='btn-success sumres res' onClick={restar}>-</button>
                    <span>{count}</span>
                    <button id='btnSuma' className='btn-success sumres sum' onClick={sumar}>+</button>
                </div>
                <button id='btnAdd' onClick={addCart} className='btn-success addcart'>Add to Cart</button>
            </div>
        </>
    )
}
export default ItemCount