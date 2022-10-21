import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

let comentarios = [
    {texto: 'hola, que tal', leido: true},
    {texto: 'va todo bien?', leido: false}
];

let rotulo = {titulo: 'Muro', nombre: 'Pedro', apellido: 'Moldenhauer'};

const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(<App rotulo={rotulo} comentarios={comentarios}/>);