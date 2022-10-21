import React from "react";

//const App = ({rotulo, comentarios}) => {
const App = (props) => {
    /*console.log({rotulo})*/
    console.log(props.rotulo)

    //const lista = props.comentarios.map((comentario) => <li>{comentario.texto}</li>)

    //console.log(lista)
    return (

        <div>
            {/*<h1>{rotulo.titulo}</h1>
            <h2>{rotulo.nombre} {rotulo.apellido}</h2>*/}
            <h1>{props.rotulo.titulo}</h1>
            <h2>{props.rotulo.nombre} {props.rotulo.apellido}</h2>
            {/* Un componente */}
            <fieldset>
                <legend>Comentarios</legend>
                <input type="text" placeholder="introduce el texto"/>
                <input type="button" value="añadir" />
            </fieldset>
            {/* comentarios */}
            <ul>
                {props.comentarios.map((comentario) => {
                console.log(comentario);
                return (<li>{comentario.texto}</li>)
                })}
            </ul>
        </div>

    );
};

export default App;