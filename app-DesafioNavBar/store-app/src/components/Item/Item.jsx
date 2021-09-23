import { Link } from "react-router-dom";
import './ItemStyle.css';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
//import { useState, useEffect } from 'react';

const Item = ({producto}) => {
  /*    const onAdd = (c) => {
        console.log(c)
    } */
    return (
        <>
            <div className='catalogo'>
                <Zoom>                
                    <div key={producto.id} className='card '>                       
                            <img src={producto.img} className="card-img-top" alt={`Foto de ${producto.descricpion}`} loading="lazy"  />                        
                        <div className="card-body">
                            <h5 className="card-title"> {producto.descricpion}</h5>                            
                            <p className="card-text" id="precio">Precio ${producto.Precio}</p>
                           <Link to={`/itemDetail/${producto.id}`}> 
                            <button className="btn btn-primary" id="comprar" >Ver Detalle</button>
                           </Link>
                        </div>
                      {/*   <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} /> */}
                    </div>
                </Zoom>
            </div>
        </>
    )
}

export default Item;