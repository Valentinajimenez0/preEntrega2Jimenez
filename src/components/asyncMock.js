const productos = [
    { id: '1', name: 'SWITCHES', price: 1000, category: 'SWITCHES', img: 'https://www.instaladoresdetelecomhoy.com/imagenes/2023/02/switches-DELL.jpg', stock: 25, description: 'une o conecta dispositivos en red' },
    { id: '2', name: 'ROUTERS', price: 5600, category: 'ROUTERS', img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/02/router-wifi-2623703.jpg?tf=3840x', stock: 15, description: 'permite interconectar redes con distinto prefijo' },
    { id: '3', name: 'SERVIDORES', price: 9000, category: 'SERVIDORES', img: 'https://infase.net/wp-content/uploads/2021/11/Servidores.png', stock: 10, description: 'conjunto de computadoras capaces de atender las peticiones de un cliente ' },
]

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(product => product.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(product => product.category === categoryId))
        }, 500)
    })

}