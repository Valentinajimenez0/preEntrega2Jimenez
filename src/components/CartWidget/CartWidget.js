import { useContext } from "react"
import img from "./Img/img3.png"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"


function CartWidget (){

    const {totalQuantity} = useContext (CartContext)

    return(
        <Link to='/cart' style={{ display : totalQuantity > 0 ? 'block' : "none"}}>
        <img className="imgCarrito" src={img} alt="foto Carrito" ></img>
        {totalQuantity}
        
        </Link>
    )
}
export default CartWidget