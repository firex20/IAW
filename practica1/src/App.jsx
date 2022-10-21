import React from "react";

const App = ({titulo, nombre, apellido}) => {
    return (
        
        <div>
            <h1>{titulo}</h1>
            <h2>{nombre} {apellido}</h2>
            {/* Un componente */}
            <fieldset>
                <legend>Comentarios</legend>
                <input type="text" placeholder="introduce el texto"/>
                <input type="button" value="añadir" />
            </fieldset>
        </div>

    );
};

export default App;