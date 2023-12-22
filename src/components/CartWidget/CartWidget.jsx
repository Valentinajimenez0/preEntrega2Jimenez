import { useContext } from "react"
import img from "./Img/img3.png"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"


function CartWidget (){

    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' >
        <img className="imgCarrito" src={img} alt="foto Carrito" />
        <div>{totalQuantity}</div>
        
        </Link>
    )
}
export default CartWidget