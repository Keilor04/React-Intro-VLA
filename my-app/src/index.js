import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Se importan los componentes creados en el App.js
import App, { HelloWorld, Mostrarimagen, Contador } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Aquí se pueden agregar los componentes que se han creado */}
    <HelloWorld />
    <Mostrarimagen />
    <Contador />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
