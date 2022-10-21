import React from 'react';

const Input = ({input}) => {

    /*console.log(rotul);*/

    return (
        <fieldset>
        <legend>{input.titulo}</legend>
        <input type="text" placeholder={input.placeholder}/>
        <input type="button" value="añadir" />
        </fieldset>
    )
}

export default Input;