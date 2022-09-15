import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {

const categorias = ["Vinos Y Espumantes","Whisky","Cervezas","Espirituosas"];
  
  
  return (
    
    <BrowserRouter>
      <NavBar categories={categorias}/>
      <Routes>

    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
    <Route path='*' element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>

  );

}

export default App;
