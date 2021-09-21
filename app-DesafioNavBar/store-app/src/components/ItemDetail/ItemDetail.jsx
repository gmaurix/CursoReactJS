import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetailStyle.css';

const ItemDetail = ({ producto }) => {    
    const onAdd = (c) => {
        console.log(c)
    }
    return (
      <>
        <div className='card-detalle '>
            <img src={producto.img} className="card-img-top" alt="foto producto" loading="lazy" />
            <div className="card-body">
                <h3 className="card-title"> {producto.descricpion}</h3>
                <p className="card-text" >{producto.detalle}</p>
                <p className="card-text" >Stock: {producto.stock}</p>
                <p className="card-text" id="precio">Precio ${producto.Precio}</p>
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    </>

    )
}


export default ItemDetail;