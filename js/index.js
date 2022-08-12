// Aquí mi primera entrega de proyecto final. Sé que no agregué algunas cosas mas avanzadas que aprendimos en el curso, me limité a 
// agregar las caracteristicas minimas requeridas para este trabajo, pero estoy seguro de que voy a mejorarlo con las siguientes entregas de proyectos
// Como se puede observar, es un simulador de un conversor de divisas, las cuales solo utilicé 3 monedas (Basandome en el precio del BNA). No pude escribir en el documento utilizando innerHTML o APPEND pero lo intenté
// De todas formas, este trabajo cuenta con variables, funciones, estructura html, un array, un objeto y un metodo de busqueda de array. Espero cumpla con las condiciones. Muchas gracias



alert("Bienvenido al convertor de Divisas Online");

let divisas = {
    dolar: 140,
    euro: 132.5,
    libra: 163,
};

let con = 0;
let r = 0;

let resultados = [];


let cantidad = parseInt(prompt("¿Cuantas conversiones quiere realizar?"));


convertir();
mostrarEnDocumento();

function convertir()
{   
    for(let i=0; i < cantidad; i++)
    {
    let monto = parseInt(prompt("Ingrese la cantidad de dinero en pesos argentinos a convertir:"));
    let moneda = prompt("Ingrese la moneda a la que quiere convertir (Dolar, Euro o Libra):");
    switch(moneda.toLowerCase()) 
    {
        case "dolar":
            if (monto < divisas.dolar)
                {
                alert("El monto ingresado es insuficiente para realizar la conversion, no se pudo realizar la converión.");
                }
                else
                {
                con = monto / divisas.dolar;
                alert("El cambio de peso argentino a dolar es de: $" + con + " dolares");
                let r = con;
                resultados[i] = parseInt(r); 
                }
            break;
        case "euro": 
            if (monto < divisas.euro)
                {
                alert("El monto ingresado es insuficiente para realizar la conversion, no se pudo realizar la converión.");
                }
                else 
                {
                con = monto / divisas.euro;
                alert("El cambio de peso argentino a euro es de: $" + con + " euros");
                let r = con;
                resultados[i] = parseInt(r); 
                }
            break; 
        case "libra":
            if (monto < divisas.libra)
                {
                alert("El monto ingresado es insuficiente para realizar la conversion, no se pudo realizar la converión.");
                }
                else
                {
                con = monto/ divisas.libra;
                alert("El cambio de peso argentino a libra es de: $" + con + " libras");
                let r = con;
                resultados[i] = parseInt(r); 
                }
            break;

        default:
            alert("No ha ingresado una de las monedas disponibles, La conversion no se pudo realizar.")
        }
    }
}


function mostrarEnDocumento() 
{

    for(i=0; i<resultados.length; i++)
    {
        r = resultados[i];

        if ( r == undefined)
        {
            console.log("Esta conversion no fue realizada");
        }
        else 
        {
            console.log("El resultado de esta conversion fue de:  $" + r);
        }
    }
}