import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let props = {comentarios:[
    {texto: 'hola, que tal', leido: true},
    {texto: 'va todo bien?', leido: false}
],
rotulo:{titulo: 'Muro', nombre: 'Pedro', apellido: 'Moldenhauer'},
input:{titulo: 'Comentarios', placeholder: 'Introduce el texto'}};

const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(<App props={props}/>);