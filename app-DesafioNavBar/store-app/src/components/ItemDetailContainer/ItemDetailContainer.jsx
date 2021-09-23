import React from "react";
import { useState, useEffect } from "react";
import { getUnicProd } from "../../utils/productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading]=useState(true);
    const {id}=useParams();
    console.log(id)

    useEffect(() => {
        if(id){
            getUnicProd
                .then((resp) => setProducto(resp.find(pd => pd.id===parseInt(id)) ) )      
                .catch((error) => console.log(error))
                .finally(()=>setLoading(false))

            }
    }, [id])

    return (
        <>
        <div >
            <br />
          {loading ? <h2 styles="top:5em"  >Cargando...</h2>:<ItemDetail producto={producto}/>}
        </div>
        </>
    )

}
export default ItemDetailContainer