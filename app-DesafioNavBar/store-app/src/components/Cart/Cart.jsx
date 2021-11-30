import './cartStyle.css'
import {FaRegTrashAlt} from "react-icons/fa"
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
        mail:'',
        mail2:''
    })    

    function handleChange(e){
     setFormData({
        ...formData,[e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        generarOrder()        
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
                alert(
                `
                ¡COMPRA FINALIZADA EXITOSAMENTE!

                Tu Código de Orden es: "${idDoc.id}"
                
                Monto Abonado: $ ${calcularTotal()}
                
                ¡Muchas Gracias por tu Compra!
                `)))
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
                )}      
                
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
                    <h2 className='p-cart fw-bold'>CARRITO DE COMPRAS</h2>
               </Slide>
            <div className="contenedor col-sm-12 col-md-12 w-100" >                
            <div className="list-carrito" >
                <Bounce left>
                    <table className="mb-5 carrito_listado col-md-12 col-sm-12">
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
                                <td></td>
                                <td><button className="btn btn-dark btn_quitar" onClick={()=>quitarProducto(producto)} ><FaRegTrashAlt/></button></td>                            
                            </tr>                        
                        )}             
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="fw-bold">Total</td>
                            <td className="fw-bold"> $ {calcularTotal()}</td>
                            <td></td>
                            <td>
                                <button className="btn btn-dark btn_quitar w-100" onClick={()=>borrarCarrito()}><FaRegTrashAlt/> Borrar Carrito</button>
                                <Link exact to="/">
                                <button className='btn btn-primary w-100' >Seguir Comprando </button>
                                </Link>
                            </td>
                        </tr>
                    </table>             
                    </Bounce>   
             </div>
                <Bounce right>
                    <div id="formOrders">
                        <form onChange={handleChange} onSubmit={handleSubmit}>
                            <label className="text-primary fw-bold">CONFIRMACION DE COMPRA</label>
                            <input type="text" required placeholder="Ingresar Nombre" name="nombre" value={FormData.nombre}/>
                            <input type="text" required placeholder="Ingresar Telefono" name="telefono" value={FormData.telefono} />
                            <input type="text" required placeholder="Ingresar Mail" name="mail" value={FormData.mail}/>
                            <input type="text" required placeholder="Reingresar Mail" name="mail2" value={FormData.mail2}/>
                            <label className="fw-bold mt-3 text-primary">Importe a Pagar: ${calcularTotal()}</label>
                            {formData.mail !== formData.mail2 || formData.mail=='' ? 
                            <button className="orden btn btn-dark" disabled="true"  name='btn_orden' >Generar Orden</button>
                            :
                            <button className="orden btn btn-primary" name='btn_orden'>Generar Orden</button>
                            }
                        </form>
                    </div>
                </Bounce>
            </div>
        </div>}          
    </>
 )
}

export default Cart;