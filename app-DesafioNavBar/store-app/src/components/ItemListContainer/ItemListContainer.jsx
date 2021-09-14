import ItemList from '../ItemList/ItemList'
import './ItemListContainerStyle.css'
import { useEffect, useState } from 'react'
import {getProducts} from '../../util/productos.js'



const ItemListContainer = () => {

const [productos, setproductos] = useState([]);
const [loading, setLoading]=useState(true);

useEffect(()=>{
    getProducts
        .then((result) => {
            setproductos(result)
        })
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[])
    return (
        <>
        <div className="contenedor">                               
   
            <div className='listProductos'>
               {loading ? <h2>Cargando...</h2>:<ItemList productos={productos}/>}
             </div>
        </div>
        
        </>
    )
}

export default ItemListContainer;