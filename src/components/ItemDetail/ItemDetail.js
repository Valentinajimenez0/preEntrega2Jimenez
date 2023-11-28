import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  
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
         <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/> 
        </footer>
      </div>
    </div>
  );
}

export default ItemDetail;
