import React from "react";
import { useState, useEffect } from "react";
import { getUnicProd } from "../../utils/productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id}=useParams();
    console.log(id)

    useEffect(() => {
        if(id){
            getUnicProd
                .then((resp) => setProducto(resp.find(pd => pd.id===parseInt(id)) ) )      
        }else{
            
        }
    }, [id])

    return (
        <>
            <ItemDetail producto={producto}/>
        </>
    )

}
export default ItemDetailContainer