import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cartprovider } from './context/cartContext';
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      {/* 
     <ItemListContainer greeting={"BIENVENIDOS A LA TIENDA"}/>
     <ItemDetailContainer /> */}

      <BrowserRouter> 
        <Cartprovider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<h1>404 Error </h1>} />
          </Routes>
        </Cartprovider>
      </BrowserRouter>

    </div>
  );
}
export default App;
