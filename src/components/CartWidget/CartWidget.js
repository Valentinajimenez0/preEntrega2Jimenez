import img from "./Img/img3.png"

// import img1 from "./Img/cuadro1.jpeg"
// import img2 from "./Img/cuadro2.jpeg"
// import img3 from "./Img/cuadro3.jpeg"

// <img src={img1} alt="foto cuadro1"> </img>
//         <img src={img2} alt="foto cuadro2"> </img>
//         <img src={img3} alt="foto cuadro3"> </img>


function CartWidget (){
    return(
        <div>
        <img className="imgCarrito" src={img} alt="foto Carrito" ></img>
        1
        
        </div>
    )
}
export default CartWidget