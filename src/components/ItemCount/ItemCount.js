import { useState } from "react";
import "bulma/css/bulma.css"
import "./itemCount.css"

function ItemCount ({stock, initial, onAdd}){

    const [quantity, setQuantity] = useState(initial)

    function increment (){
        if (quantity <= stock){
            setQuantity(quantity + 1)
        }
    }
    function decrement (){
        if (quantity > 0){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
                <div className="Controls">
                    <button className="button is-primary" onClick={increment}>+</button>
                    <button className="button is-warning" onClick={decrement}>-</button>
                    <h2 className="Number">cantidad: {quantity}</h2>

                </div>
                <div>
                    <button className="button is-active" onClick={() => onAdd(quantity)}>
                        agregar al carrito
                    </button>
                </div>
        </div>
    )
}

export default ItemCount;