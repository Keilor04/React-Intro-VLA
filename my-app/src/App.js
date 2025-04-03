import logo from './logo.svg';
import './App.css';
//Consideraciones generales de React 
//#1 components son funciones 
//#2 se debe retornar un solo elemento dentro de parentesis 
// 
function App() {

  //Este espacio es de javascript 

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