import { Link } from "react-router-dom";
import './ItemStyle.css';

import React from 'react';
import Zoom from 'react-reveal/Zoom';
//import { useState, useEffect } from 'react';

const Item = ({producto}) => {
 
    return (
        <>
            <div className='catalogo'>
                <Zoom>                
                    <div key={producto.id} className='card '>                       
                            <img src={producto.img} className="card-img-top" alt={`Foto de ${producto.descripcion}`} loading="lazy"  />                        
                        <div className="card-body">
                            <h5 className="card-title"> {producto.descripcion}</h5>                            
                            <p className="card-text" id="precio">Precio ${producto.Precio}</p>
                           <Link to={`/itemDetail/${producto.id}`}> 
                            <button className="btn btn-primary" id="comprar" >Ver Detalle</button>
                           </Link>
                        </div>
                      
                    </div>
                </Zoom>
            </div>
        </>
    )
}

export default Item;