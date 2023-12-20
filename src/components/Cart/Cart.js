// import { useContext } from "react";
// import { CartContext } from "../../context/cartContext";
// import CartItem from "../CartItem/CartItem"
// import { Link } from "react-router-dom";

// const Cart = () => {

//     const { cart  , clearCart , totalquantity , total } = useContext (CartContext)

//     if (totalquantity === 0 ) {
//         return (
//             <div>
//                 <h1>el carrito esta vacio</h1>
//                 <Link to= '/' className="option">Productos</Link>
//             </div>
//         )
//     }
//     return (
//         <div>
//             { cart.map(p => <CartItem key = {p.id} {...p}/>)}
//             <h2>total : $ {total}</h2>
//             <button onClick={() => clearCart()} className="Button"> Limpiar carrito</button>
//             <Link to='/checkout' className="Option">checkout</Link>
//         </div>
//     )


// }

// export default Cart

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, clearCart, removeItem, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>el carrito esta vacio</h1>
                <div className="row">
                <Link to="/" className="option ">regresar a Productos</Link>
                </div>
            </div>
        )
    }


    return (
        <div >
            {cart.map(p => <CartItem key={p.id} {...p} removeItem={removeItem} />)}
            <h3>Totalll ${total}</h3>
            <div >
                <button onClick={() => clearCart()} className="btn btn-danger">Limpiar Carrito</button>
                <Link to="/checkout" className="btn btn-secondary">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;
