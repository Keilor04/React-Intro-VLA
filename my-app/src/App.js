import logo from './logo.svg';
import './App.css';
//Consideraciones generales de React 
//#1 components son funciones 
//#2 se debe retornar un solo elemento dentro de parentesis 
// 
function App() {

  //Este espacio es de javascript 
  const mostrarimagen = true; //Se pueden definir variables como en javascript
  return (
    //Este espacio en para escribir HTML
    //ClassName se usa para definir clases en JSX en lugar de usar Class como en Vue 
    <div className="App">
      <header className="App-header">
        {/* Las llaves se usan como sustitutos al v-bind de Vue  */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div> 
           {/* se agrega este espacio para agregar o ocultar una imagen */}
        {/* && sirve para evaluar la condición de mostrarimagen y si se cumple "igual a true"
        entonces se agrega al HTML la parte derecha  */}
      {mostrarimagen && <span>Hola</span>}
{/* En este caso seria un condicional para verificar si mostrarimagen se cumple "?" con 
que sea igual a "true" entonces se agrega la imagen sino ":" se escribe el mensaje */}
      {mostrarimagen? <img src={logo} className="App-logo" alt="logo" /> : 'No hay una imagen para mostrar'}
      </div>



    </div>
  );
}


//Práctica de un componente

function HelloWorld() {
  let nombre = "Hola Mundo"; //Se pueden definir variables como en javascript
  let parrafo = "Este es un componente de React"; //Se pueden definir variables como en javascript

  return (
    <div className="App">
      <header className="App-header">
        <h1> {nombre} </h1>
        <p> {parrafo} </p>
        <p>  lorem ipsum  </p>
      </header>
    </div>
  );
}


export default App;

export { HelloWorld };