import ItemList from '../ItemList/ItemList';
import './ItemListContainerStyle.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getFirebase, getFirestore } from '../../services/getFirebase';


const ItemListContainer = () => {

const [productos, setproductos] = useState([]);
const [loading, setLoading]=useState(true);
const {idcategoria}=useParams();

useEffect(()=>{
    const db=getFirestore()
    if(idcategoria){
        db.collection('productos').get()
        .then(resp => {            
            let pd=resp.docs.map(producto =>({id:producto.id, ...producto.data()}) )
            setproductos(pd.filter(productos => productos.categoria === idcategoria))

        })
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }else{
        db.collection('productos').get()
        .then(resp =>{
            let pd=resp.docs.map(producto =>({id:producto.id, ...producto.data()}) );
            setproductos(pd.sort(function(a, b){return a.Precio - b.Precio}))
        })
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }
    },[idcategoria])

    console.log(productos)
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