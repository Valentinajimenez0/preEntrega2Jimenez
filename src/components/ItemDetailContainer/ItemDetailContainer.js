import { useState, useEffect } from "react";
import {getProductsById} from "../asyncMock";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

    const [productos, setProductos] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
      .then(res => {setProductos(res)})
      .catch(err => {console.error(err);})
    }, [itemId])

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;