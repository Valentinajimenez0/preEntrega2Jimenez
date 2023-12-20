import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = ({name, price, id, quantity}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div>
            <h2>{name}</h2>
            <p>cantidad: {quantity}</p>
            <p>precio por unidad: {price}</p>
            <p>subtotal: { price * quantity}</p>
            <button onClick={()=> removeItem(id)}>eliminar item</button>
        </div>
    )
}
export default CartItem