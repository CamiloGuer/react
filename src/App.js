import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer';

function App() {

const categorias = ["Vinos Y Espumantes","Whisky","Cervezas","Espirituosas"];
  
  
  return (
    
    <>
      <NavBar categories={categorias}/>
      {/*<ItemListContainer greeting={"Item List Container"}/>*/}
      <ItemDetailContainer/>
    </>

  );

}

export default App;
