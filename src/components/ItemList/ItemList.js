
import Item from "../Item/Item"

const ItemList = ({ productos }) => {
    console.log(productos);
    return (

        <div className="row justify-content-center">
            {productos?.map(prod => <Item key={prod.id} {...prod} />)}
            {/* {products?.map(prod => <Item key={prod.id} product={prod} />)} */}
        </div>
    )
}

export default ItemList