import './app.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

const categorias = ["Vinos Y Espumantes","Whisky","Cervezas","Espirituosas"];
  
  
  return (
    
    <>
      <NavBar categories={categorias}/>
      <ItemListContainer greeting={"Item List Container"}/>
    </>

  );

}

export default App;
