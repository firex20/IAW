import React from 'react';

const Rotulo = ({rotul}) => {

    /*console.log(rotul);*/

    return (
        <div>
            <h1>{rotul.titulo}</h1>
            <h2>{rotul.nombre} {rotul.apellido}</h2>
        </div>
    )
}

export default Rotulo;