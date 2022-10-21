import React from "react";
import Rotulo from '/src/Rotulo';
import Input from '/src/Input';
import Comentarios from '/src/Comentarios';

//const App = ({rotulo, comentarios}) => {
const App = ({props}) => {
    /*console.log({rotulo})*/
    console.log(props.rotulo)

    //const lista = props.comentarios.map((comentario) => <li>{comentario.texto}</li>)

    //console.log(lista)
    return (

        <div>
            {/*<h1>{rotulo.titulo}</h1>
            <h2>{rotulo.nombre} {rotulo.apellido}</h2>*/}
            {/*<h1>{props.rotulo.titulo}</h1>
            <h2>{props.rotulo.nombre} {props.rotulo.apellido}</h2>*/}
            <Rotulo rotul={props.rotulo} />
            {/* Un componente */}
            <Input input={props.input} />
            {/* Otro componente */}
            <Comentarios comment={props.comentarios} />
        </div>

    );
};

export default App;