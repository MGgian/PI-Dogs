

// import React from 'react'
// import ReactDOM from "react-dom";
// import App from "./App";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
  
//       <App />
    
// );

// import React from "react";
// import ReactDOM from "react";
// import App from './App';
// // import {provider} from '.redux/store';
// // import store from './redux/store';
// // import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
  
//     <App/>,

//   // decument.getElementById('root');

// );
import React from "react";
import ReactDOM from "react-dom"; // Importa ReactDOM correctamente
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store ={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root') // Añade esta línea para especificar dónde renderizar tu aplicación
);






// ReactDOM.render(
  
//   <App />
  
  
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

