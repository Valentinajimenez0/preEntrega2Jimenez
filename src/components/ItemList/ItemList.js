import Item from "../Item/Item";

function ItemList ({productos}){
    return (
        <div>
            {productos.map(productos => (
                <Item key={productos.id} 
                name={productos.name}
                price={productos.price}
                img={productos.img}
                stock={productos.stock}/>
            ))}
        </div>
    )
}

export default ItemList;