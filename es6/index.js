//JavaScript clasico
function saludar(nombre){
    return "Hola mundo!" + nombre;
}

hello = saludar("Pedro");
console.log(hello);

//JavaScript funciones anonimas
hello = function (nombre){
    return "Hello World!" + nombre;
};
console.log(hello("Pedro"));

//JavaScript funciones flecha
halo = () => "Hola mundo con funciones flecha";
console.log(halo());

halo2 = nombre => `Hola ${nombre}`;
console.log(halo2("Pedro"));