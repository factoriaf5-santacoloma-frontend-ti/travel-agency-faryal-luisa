
const noches = prompt("¿Cuantas noches te quieres quedar?");
const cadanoche = 60;

function calcularPrecioNoche(noches,cadanoche){
    let costeHotel = noches * cadanoche;
  
    return costeHotel;
}
console.log(calcularPrecioNoche(noches,cadanoche));

const ciudad = prompt("¿Qué ciudad te gustaría visitar?")
const costeParis = 180;
const costeBoston = 600;
const costeLondres = 120;

function cualcularCosteAvion(ciudad){
    
    if(ciudad === "Paris"){
        return `el coste del avión és ${costeParis}`;
    } else if(ciudad === "Boston"){
        return `el coste del avión és ${costeBoston}`;
    } else (ciudad === "Londres")
        return `el coste del avión és ${costeLondres}`;
    
}
console.log(cualcularCosteAvion(ciudad))

// Interación 3 PASOS
// 1.Añade la función `calcularCosteCoche()` con las características:
// 2.Recibe como parámetro de entrada un número de días de alquiler
// 3. Devuelve el coste en función de dicho parámetro pero teniendo en cuenta los siguientes aspectos:
//   - Cada día de alquiler cuesta 40 €
//   - Si se alquila por tres o más días se obtiene un descuento de 20 €
//   - Si se alquila por 7 días o más se obtiene un descuento de 50 € (no acumulable con los 20 € de haber alquilado por más de 3 días)
// 4 .Recoge el precio fuera de la función en una variable llamada costeCoche y
// 5. comprueba que el cálculo es correcto




// Interación 4:
// 1.Crea otra funcion llamada `calcularCosteViaje()` que tendrá las siguientes características:
// - Recibirá como parámetros de entrada: número de noches, ciudad y días de alquiler
// - Dentro de esta función se llamará a las otras tres para calcular el precio total del viaje
// - Substituiremos los tres alert anteriores por un único alert que muestre el precio total del viaje