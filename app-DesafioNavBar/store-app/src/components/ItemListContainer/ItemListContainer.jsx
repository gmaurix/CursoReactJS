import ItemList from '../ItemList/ItemList'
import './ItemListContainerStyle.css'



const ItemListContainer = (props) => {
     
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
        
        </div>
        <ItemList/>
        </>
    )
}

export default ItemListContainer;