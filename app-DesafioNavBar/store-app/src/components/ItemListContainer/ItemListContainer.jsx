import ItemList from '../ItemList/ItemList';
import './ItemListContainerStyle.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getProducts} from '../../utils/productos.js';


const ItemListContainer = () => {

const [productos, setproductos] = useState([]);
const [loading, setLoading]=useState(true);
const {idcategoria}=useParams();

useEffect(()=>{
    if(idcategoria){
        getProducts
            .then((result) => {
                setproductos( result.filter(pd => pd.categoria===idcategoria ))
            })
            .catch((error) => console.log(error))
            .finally(()=>setLoading(false))
    }else{

        getProducts
            .then((result) => {
                setproductos(result)
            })
            .catch((error) => console.log(error))
            .finally(()=>setLoading(false))
    }
    },[idcategoria])
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