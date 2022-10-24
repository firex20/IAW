import React from 'react';

const Input = ({input, onPulsar}) => {

    return (
        <fieldset>
        <legend>{input.titulo}</legend>
        <input type="text" placeholder={input.placeholder} id="newcomment"/>
        <input type="button" value="añadir" onClick={() => onPulsar()}/>
        <input type="checkbox" id="readed" name='readed'/><label htmlFor="readed">¿Leido?</label>
        </fieldset>
    )
}

export default Input;