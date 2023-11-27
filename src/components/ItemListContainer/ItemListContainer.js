import { useState, useEffect } from "react";
import { getProducts, getProductsById, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

function ItemListContainer ({greeting}){

        const [productos, setProductos] = useState ([])

        const {categoryId} = useParams()

        useEffect(() => {

                const asyncFunction = categoryId ? getProductsByCategory : getProducts

                asyncFunction(categoryId)
                .then(res => {setProductos(res)})
                .catch(err =>{ console.error(err)})
        }, [categoryId])

        
   return(
    <div>
            <h1 className="text-center">{greeting} </h1>
            <ItemList productos = {productos}/>
    </div>

   )
}

export default ItemListContainer;