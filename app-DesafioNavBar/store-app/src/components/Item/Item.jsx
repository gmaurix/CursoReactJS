import './ItemStyle.css'
import ItemCount from '../ItemCount/ItemCount';
import impulsivos from '../../productos.js'

const Item = () => {
    const onAdd = (c) => {
        console.log(c)
    }
    return (
        <>
         <div className='catalogo'>
            {impulsivos.map((pd) =>
                <div className='card '>
                    <img  src={pd.img} className="card-img-top" alt="Bombon Escoces caja" />
                    <div className="card-body">
                        <h5 className="card-title"> {pd.descricpion}</h5>
                        <p className="card-text" >Descripcion:{pd.descricpion}</p>
                        <p className="card-text" >Stock: {pd.stock}</p>
                        <p className="card-text" id="precio">Precio ${pd.Precio}</p>
                        <a href="#algo" className="btn btn-primary" id="comprar">Ver Detalle</a>
                    </div>
                    <ItemCount stock={pd.stock} initial={1} onAdd={onAdd} />
                </div>
            )}
        </div>
        </>
    )
}

export default Item;