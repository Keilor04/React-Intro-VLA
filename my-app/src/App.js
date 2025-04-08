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
      <div className="App">
        {/* se agrega este espacio para agregar o ocultar una imagen */}
        {/* && sirve para evaluar la condición de mostrarimagen y si se cumple "igual a true"
        entonces se agrega al HTML la parte derecha  */}
        {mostrarimagen && <span>Hola</span>}
        <br></br>
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
      <br></br>
    </div>
  );
}

//Práctica de un componente

function Mostrarimagen() {
  const mostrarimagen = true; //Se pueden definir variables como en javascript
  // Removed unused variable 'imagen'
  return (
    <div className="App">
      <header className="App-header">
        {/* En este caso seria un condicional para verificar si mostrarimagen se cumple "?" con 
que sea igual a "true" entonces se agrega la imagen sino ":" se escribe el mensaje */}
        {mostrarimagen ? <img src={logo} className="App-logo" alt="logo" /> : 'No hay una imagen para mostrar'}
      </header>
      <br></br>
    </div>
  );
}


//Práctica de un componente

function Contador() {
  const contador = 5; //Se pueden definir variables como en javascript

  return (
    <div className="App">
      <header className="App-header">
        {/* En este caso si el valor de contador es menor a 5 y se cumple "?" entonces
        se escribe la información de la derecha sino ":" entonces se escribe la 
        información indicada luego de : */}
        {contador < 5 ? <h1>El contador es menor a 5</h1> : <h1>El contador es mayor a 5</h1>}
      </header>
      <br></br>
    </div>
  );
}


//Práctica de un menú como el del Github 07-04-2025

function MenuconObjetos() {
//Se crea un array de objetos para el menú
//Se le asigna un id, nombre, url y un valor booleano para indicar si la opción esta activa o no
  const opcionesmenu = [
    { id: 1, nombre: "Code", url: "https://www.google.com", isSelected: true },
    { id: 2, nombre: "Issues", url: "https://www.google.com", isSelected: true },
    { id: 3, nombre: "Pull - Requests", url: "https://www.google.com", isSelected: false },
  ];

  return (
    //Se usa un solo div para envolver todo el contenido del componente para mostrarlo en el index.js
    <div className="container">
      <h3 className="text-center my-4">Menu de opciones con React - práctica en clase 07-04-2025</h3>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        {/* Se usa el map para recorrer el array de objetos y se le asigna un key a cada elemento */}
          {opcionesmenu.map((opcion) => (
            // Se le asigna la clase m-1 btn btn-info a cada elemento del array con Bootstrap 
            <li key={opcion.id} className='m-1 btn btn-info' type='button'>
              <a href={opcion.url} className='text-decoration-none text-light'>
                {opcion.nombre}
                {/* Esta forma es para realizar el condicional si la opción del menu esta activa (TRUE) o no (FALSE) */}
                {opcion.isSelected ? <span> * </span> : <span> ( ) </span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;

//Exportar los componentes para poder usarlos en el index.js

export { HelloWorld };

export { Mostrarimagen };

export { Contador };

export { MenuconObjetos };
