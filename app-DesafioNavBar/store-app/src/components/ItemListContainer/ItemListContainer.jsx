import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainerStyle.css'



const ItemListContainer = (props) => {
    const onAdd=(c)=>{
        console.log(c)
    }    
    return (
        <>
        <div className="contenedor">                               
               <ul>
                   <li className='nav-item'>Palitos</li>
                   <li className='nav-item'>Bombones</li>
                   <li className='nav-item'>Postres</li>
                   <li className='nav-item'>Familiares</li>
                   <li className='nav-item'>Tentaciones</li>
                   <li className='nav-item'>Tortas</li>
                   <li className='nav-item'>Granel</li>
               </ul>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemListContainer;