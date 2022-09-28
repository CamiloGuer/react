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
import Cart from './containers/Cart';
import ShopProvider from './context/ShopProvider';


function App() {

const categorias = ["Vinos Y Espumantes","Whisky","Cervezas","Espirituosas"];
  
  
  return (
    <ShopProvider>
          <BrowserRouter>
            <NavBar categories={categorias}/>
            <Routes>

              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<NotFound/>}/>

            </Routes>
          </BrowserRouter>
    </ShopProvider>


  );

}

export default App;
