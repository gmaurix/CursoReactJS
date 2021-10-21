import './cartStyle.css'
import { cartContext } from '../../context/cartContext';
import { useContext, useState } from 'react';
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore';
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-router-dom";




const Cart=()=>{
    
    const [formData, setFormData]=useState({
        nombre:'',
        telefono:'',
        mail:''
    })
    
    const {cartList,quitarProducto,calcularTotal, borrarCarrito} = useContext(cartContext)
    
    function handleChange(e){
     setFormData({
        ...formData,[e.target.name]:e.target.value
        })
    }
    console.log(formData)
    function handleSubmit(e){
        e.preventDefault()
        console.log('enviadno')
    }

    const generarOrder=()=>{
        const db=getFirestore()
        const od=db.collection('ordenes')
        let orden={}    
        orden.date=firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer={nombre:'bondiu', telefono:'1213432', mail:'bondiu@mail.com'}
        orden.total=calcularTotal();
        orden.Items=cartList.map(itemCart =>{
            const id=itemCart.id;
            const produc=itemCart.descripcion;
            const price=itemCart.Precio;
            return{id,produc,price}
        })
        od.add(orden)
        .then(idDoc =>(
            console.log(idDoc.id)
        ))
        .catch(err =>(
            console.log(err)
        ))
        .finally()
    }
      

    return(
       <>
            
           {cartList.length === 0 ?
           <div>
            <h2 className='p-cart'>Carrito de Compras vacío</h2>
            <h2>No hay productos cargadados</h2>
            <Link to='/' className="btn btn-primary">Ver Catalogo</Link>
           </div>
           :
           <div><h2 className='p-cart'>Carrito de Compras</h2>
            <div className="contenedor" >
                
                <div className="list-carrito" >
                <Bounce left>
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
                                <td key={producto.id}><img className="figure-img" src={producto.img} alt={`Foto de ${producto.descripcion}`} loading="lazy" />                       </td>
                                <td>{producto.descripcion} </td>
                                <td>{cantidad} </td>
                                <td>{producto.Precio} </td>
                                <td>{producto.Precio * cantidad} </td>
                                <td><button className="btn btn-danger" onClick={()=>quitarProducto(producto)} >x</button></td>                            
                            </tr>                        
                        )}             
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td> $ {calcularTotal()}</td>
                            <td><button className="btn btn-danger" onClick={()=>borrarCarrito()}>Vaciar Carrito</button></td>
                        </tr>
                    </table>             
                    </Bounce>   
                </div>
                <Bounce right>
                    <div id="formOrders">
                        <form onChange={handleChange} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Nombre" name="nombre"/>
                            <input type="text" placeholder="Telefono" name="telefono" />
                            <input type="text" placeholder="Mail" name="mail" />
                            <button className="orden btn btn-primary" onClick={generarOrder}>Generar Orden</button>
                        </form>
                    </div>
                </Bounce>
            </div> 
            </div>
            }          
       </> 
    
    )
}

export default Cart;