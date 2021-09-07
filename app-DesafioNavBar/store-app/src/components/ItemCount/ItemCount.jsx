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
                    <button className='btn-primary sumres' onClick={restar}>-</button>
                    <span>{count}</span>
                    <button className='btn-primary sumres' onClick={sumar}>+</button>
                </div>
                <button onClick={addCart} className='btn-primary addcart'>Add to Cart</button>
            </div>
        </>
    )
}
export default ItemCount