import React, { useState } from "react";
import Rotulo from './Rotulo';
import Input from './Input';
import Comentarios from './Comentarios';
import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';

const App = ({props}) => {

    let [comentarios, setComentarios] = useState(props.comentarios);
    console.log(comentarios[0].leido);
    const addtext = () =>{
        let newc;
        let check = document.getElementById("readed");
        if(check.checked){
            newc = {texto: document.getElementById("newcomment").value, leido: true};
        }else{
            newc = {texto: document.getElementById("newcomment").value, leido: false};
        }
        setComentarios([...comentarios, newc]);
    };
    return (

        <div>
            <Rotulo rotul={props.rotulo} />
            <Input input={props.input} onPulsar={() => addtext()}/>
            <Comentarios comment={comentarios} />
        </div>

    );
};

export default App;