import logo from './logo.svg';
import './App.css';
import Boton from './Boton';
import Parrafo from './Parrafo';
import {useState} from 'react';

/*let contador = 0

const alertacion = (msj) => {
  alert(`Hola ${msj}`);
  contador = contador++;
  console.log(contador);
};*/

function App() {

let brotulo;
const [contador, setContador] = useState(0);
const [visible, setVisible] = useState(true);
/*const incrementa = () => {
  setContador(contador+1);
};
const reduce = () => {
  setContador(contador-1);
};*/
const cuenta = (op) => {
  /*if(op == "suma"){
    setContador(contador+1);
  }
  if(op == "resta"){
    setContador(contador-1);
  }*/
  switch(op){
    case '+':
      setContador(contador+1);
    break;
    case '-':
      setContador(contador-1);
    break;
  }
}

if (visible){
  brotulo = "ocultar"
}else{
  brotulo = "mostrar"
}
  return (
    <div className="App">
      {/*<button onClick={() => {
        alertacion('Pepe');
      }}>
        incrementa
    </button>*/}
    {/*<button onClick={() => {
      setContador(contador+1);
    }}>
      incrementa
    </button>
  <p>Has pulsado el boton {contador} veces.</p>*/}
      <Boton rotulo="incrementa" onPulsar={() => cuenta("+")}/>
      <Boton rotulo="reduce" onPulsar={() => cuenta("-")}/>
      <Boton rotulo={brotulo} onPulsar={() => setVisible(!visible)}/>
      <Parrafo contador={contador} setVisible={() => setVisible(false)} visible={visible}/>
    </div>
  );
}

export default App;
