import CartWidget from "./CartWidget/CartWidget"
import "./CartWidget/Estilos.css"
import { NavLink ,Link } from "react-router-dom"

function NavBar() {
    return (
        <div> 
           <Link to="/" className="text-center"> ISECOM </Link>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <Link className="navbar-brand" href="#" to="/">  INICIO </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  to={`/category/SWITCHES`} className="nav-link active" aria-current="page" href="#">SWITCHES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/ROUTERS`} className="nav-link" href="#">ROUTERS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/category/SERVIDORES`} className="nav-link" href="#">SERVIDORES</NavLink>
                            </li>
                            <div className="contenedorCarrito">
                                 <CartWidget/>
                           </div>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       
    )
}

export default NavBar