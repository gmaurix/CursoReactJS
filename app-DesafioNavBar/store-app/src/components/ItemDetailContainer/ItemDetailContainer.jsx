import React from "react";
import { useState, useEffect } from "react";
import { getUnicProd } from "../../utils/productos";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        getUnicProd
            .then((resp) => { setProducto(resp); console.log(resp) })
    }, [])

    return (
        <>
            <ItemDetail producto={producto}/>
        </>
    )

}
export default ItemDetailContainer