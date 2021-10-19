import React from "react";
import { useState, useEffect } from "react";
import { getFirestore } from "../../services/getFirebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading]=useState(true);
    const {id}=useParams();
    const db=getFirestore()

    useEffect(() => {
        if(id){
            db.collection('productos').get()
                .then((resp) => {
                    let pd=resp.docs.map(producto =>({id:producto.id, ...producto.data()}) )                    
                    setProducto(pd.find(pd => pd.id===id))
                })      
                .catch((error) => console.log(error))
                .finally(()=>setLoading(false))
            }
    }, [id])

    return (
        <>
        <div >
            <br />
          {loading ? <h2 styles="top:5em">Cargando...</h2>:<ItemDetail producto={producto}/>}
        </div>
        </>
    )
}
export default ItemDetailContainer