import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const [cantidadAgregada, setCantidadAagregada] = useState(0)

  const {addItem} = useContext (CartContext)

  const handleOnAdd = (quantity) => {
    setCantidadAagregada(quantity)

    const item = {
      id, name, price
    }
  
    addItem(item, quantity)
    
  }

  

  return (
    <div className="Card cardDetail" >
      <img src={img} className="Card-Img-Top imgDetalle" alt={name} />
      <div className="Card-Body">
        <h5 className="Card-Title">{name}</h5>
        <p className="Card-Text">Precio: ${price}</p>
        <p className="Card-Text">Stock disponible: {stock}</p>
        <p className="Card-Text">category: {category}</p>
        <p className="Card-Text">description: {description}</p>
        <footer className='card-text'>
          {
            cantidadAgregada > 0 ? (
             
              <Link to='/cart' > terminar compra </Link>
              // console.log (`se agregoo ${cantidadAgregada} `)
            ) :
          (<ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />)
          }
        </footer>
      </div>
    </div>
  );
}

export default ItemDetail;
