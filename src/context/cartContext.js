import { createContext, useState } from "react";
//import { act } from "react-dom/test-utils";

export const CartContext = createContext({
    cart: []
})

export const Cartprovider = ({children}) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isinCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.log("ya esta añadido al carrito")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {

        setCart([])
    }


    const isinCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price, 0)
    }

    const totalQuantity = ()=> cart.reduce((acum, itemsActual)=> acum + itemsActual.quantity, 0);



    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

