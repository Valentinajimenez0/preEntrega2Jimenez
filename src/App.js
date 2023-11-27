import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import MostrarCard from "./components/MostrarCard";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <NavBar/>
     <ItemListContainer greeting={"BIENVENIDOS A LA TIENDA"}/>
      <MostrarCard/> 
     <ItemDetailContainer /> */}
   
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 Error </h1>}/>

    </Routes>
    </BrowserRouter>
   
   
   
   
    </div>
  );
}
export default App;
