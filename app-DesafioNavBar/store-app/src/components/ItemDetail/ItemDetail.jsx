import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetailStyle.css';
//import { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";


const ItemDetail = ({ producto }) => {    

  const { cartList, agregarCarrito } = useContext(cartContext)

  console.log(cartList)

  console.log(agregarCarrito)

  const onAdd = (c) => {

    agregarCarrito({ producto, c })
  }

    return (
      <>
      <Zoom top>
        <div className='card-detalle ' key={producto.id}>
            <img src={producto.img} className="card-img-top" alt={`Foto de ${producto.descricpion}`} loading="lazy" />
            <div className="card-body">
                <h3 className="card-title"> {producto.descricpion}</h3>
                <p className="card-text" >{producto.detalle}</p>
                <p className="card-text" >Stock: {producto.stock}</p>
                <p className="card-text" id="precio">Precio ${producto.Precio}</p>
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} producto={producto}/>
            </div>
        </div>
      </Zoom>
    </>

    )
}


export default ItemDetail;