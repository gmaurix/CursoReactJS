import './cartStyle.css'
import { cartContext } from '../../context/cartContext';
import { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Shake from 'react-reveal/Shake';
import { Link } from "react-router-dom";

const Cart=()=>{
    
    const {cartList,quitarProducto,calcularTotal,borrarCarrito} = useCartContext()
    const [formData, setFormData]=useState({
        nombre:'',
        telefono:'',
        mail:''
    })
    
    function handleChange(e){
     setFormData({
        ...formData,[e.target.name]:e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log('enviadno')
    }

    const generarOrder=()=>{
        const db=getFirestore()
        const ord=db.collection('ordenes')
        let orden={}    

        orden.date=firebase.firestore.Timestamp.fromDate(new Date());
        
        orden.buyer=formData
        
        orden.total=calcularTotal();
        
        orden.producto=cartList.map(producto =>{
            const id=producto.producto.id;
            const produc=producto.producto.descripcion;
            const price=producto.producto.Precio;
            return{id,produc,price}
        })
        
        ord.add(orden)
        .then(idDoc =>(
            alert(`Orden: ${idDoc.id}
            Generada con exito`)
        ))
        .catch(err =>(
            console.log(err)
        ))
        .finally(() =>
         setFormData({
                nombre: '',
                telefono: '',
                mail: ''
            }),
            borrarCarrito()
        )
    }      

    return(
       <>            
           {cartList.length === 0 ?
           <Shake>
            <div>
                <h2 className='p-cart text-danger'>El Carrito está vacío</h2>
                <h3 className="text-primary">No hay productos cargados</h3>
                <Link to='/' className="btn btn-primary btn_vcta" >Hacé tu Compra!</Link>
            </div>
           </Shake>
           :
           <div>
               <Slide top>
                    <h2 className='p-cart text-primary text-decoration-underline'>Carrito de Compras</h2>
               </Slide>
            <div className="contenedor" >                
            <div className="list-carrito" >
                <Bounce left>
                    <table className="mb-5">
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
                            <td className="fw-bold">Total</td>
                            <td className="fw-bold"> $ {calcularTotal()}</td>
                            <td><button className="btn btn-danger" onClick={()=>borrarCarrito()}>Vaciar Carrito</button></td>
                        </tr>
                    </table>             
                    </Bounce>   
             </div>
                <Bounce right>
                    <div id="formOrders">
                        <form onChange={handleChange} onSubmit={handleSubmit}>
                            <label className="text-decoration-underline fw-bold">Confirmar Compra</label>
                            <input type="text" placeholder="Nombre" name="nombre" value={FormData.nombre}/>
                            <input type="text" placeholder="Telefono" name="telefono" value={FormData.telefono} />                            
                            <input type="text" placeholder="Mail" name="mail" value={FormData.mail}/>
                            <input type="text" placeholder="Reingresar Mail" name="mail2" value={FormData.mail2}/>
                            <label className="fw-bold mt-3">Importe de la Compra: ${calcularTotal()}</label>
                            <button className="orden btn btn-primary" onClick={generarOrder}>Generar Orden</button>
                            
                        </form>
                    </div>
                </Bounce>
            </div> 
        </div> }          
       </> 
    
    )
}

export default Cart;