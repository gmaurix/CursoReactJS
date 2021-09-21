import React from 'react';
import './ItemListStyle.css'
import Item from '../Item/Item';
 

const ItemList = ({productos}) => {
    return (        
        <>
        <div className='listado'>
          {productos.map(producto =>  <Item producto={producto}/>) }
        </div>
        </>
       
    )
}

export default ItemList;