import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(<App titulo="Muro" nombre="Pepe" 
                apellido="Moldenaber"/>);