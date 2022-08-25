import './app.css'
import NavBar from './components/NavBar';

function App() {

let numeroDeClase = 40;
const estilos =  {
  color: "salmon",
  paddingTop: "10px",
}
  return (
    <>
      <NavBar/>
      <div className="App">
        {/* Estilos en linea */}
        <p style={estilos}>Probando cosas aca {numeroDeClase} !
        </p>
        <hr/>
        <input placeholder='Ingrese algun contenido'/>
      </div>
    </>
  );
}

export default App;
