const Boton = ({rotulo, onPulsar}) => {

    //const [contador, setContador] = useState(0);

    return (
        <button onClick={onPulsar}>{rotulo}</button>
    );
};

export default Boton;