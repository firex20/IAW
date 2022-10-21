//import {useState} from 'react';

const Parrafo = ({contador, setVisible, visible}) => {

    //const [visible, setVisible] = useState(true);

        return (
            visible ? <div>
                <button onClick={() => setVisible()}>Ocultar</button>
                {/*<button onClick={() => setVisible(!visible)}>Mostrar/Ocultar</button>*/}
                {/*visible && <p>Has pulsado el boton {contador} veces.</p>*/}
                {/*visible ? <p>Has pulsado el boton {contador} veces.</p> : ''*/}
                <p>Has pulsado el boton {contador} veces.</p>
            </div> : ''
        )
};

export default Parrafo;