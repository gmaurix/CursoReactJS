import { Link } from "react-router-dom";
import './ItemStyle.css';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
//import { useState, useEffect } from 'react';

const Item = ({producto}) => {
     const onAdd = (c) => {
        console.log(c)
    }
    return (
        <>
            <div className='catalogo'>                
                    <div key={producto.id} className='card '>
                        <img src={producto.img} className="card-img-top" alt="foto producto" loading="lazy"  />
                        <div className="card-body">
                            <h5 className="card-title"> {producto.descricpion}</h5>
                            {/* <p className="card-text" >Descripcion:{producto.descricpion}</p>
                            <p className="card-text" >Stock: {producto.stock}</p> */}
                            <p className="card-text" id="precio">Precio ${producto.Precio}</p>
                           <Link extact to="/ItemDetailContainer"> 
                            <button className="btn btn-primary" id="comprar" >Ver Detalle</button>
                           </Link>
                        </div>
                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                    </div>
                
            </div>
        </>
    )
}

export default Item;