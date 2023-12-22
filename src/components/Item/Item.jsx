import { Link } from "react-router-dom";
import "./item.css"

function Item ({id, name, price,img,stock}){
    return(
        
        <article className="CardItem  ">
            <header className="Header">
            <h1 className="ItemHeader title">{name}</h1>
            </header>
            <picture>
                <img className="ItemImg" src={img} alt={name}  />
            </picture>
            <section>
                <p className="Info">
                    PRECIO: ${price}
                </p>
                <p className="Info">
                    STOCK DISPONIBLE: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="option btn btn-primary"> Ver detalle</Link>
            </footer>

        </article>
       
    )
}

export default Item;