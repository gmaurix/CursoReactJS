import './cartStyle.css'
import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Cart=()=>{

   const {cartList} = useContext(cartContext)
   const {calcularTotal} = useContext(cartContext)
    
    return(
        <>
            <h2 className='p-cart'>Carrito de Compras</h2>
            <div className="list-carrito" >
                <table>
                    <tr>
                        <th>Foto</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                    {cartList.map(({ producto, cantidad }) =>
                        <tr>
                            <td><img className="figure-img" src={producto.img} alt={`Foto de ${producto.descripcion}`} loading="lazy" />                       </td>
                            <td>{producto.descripcion} </td>
                            <td>{cantidad} </td>
                            <td>{producto.Precio} </td>
                            <td>{producto.Precio * cantidad} </td>
                            <td><button className="btn btn-danger">x</button></td>
                        </tr>
                    )}                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>${calcularTotal()}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Cart;