// Función para calcular el coste por noche

const noches = prompt("¿Cuantas noches te quieres quedar?");
const cadanoche = 60;

function calcularPrecioNoche(noches,cadanoche){
    let costeHotel = noches * cadanoche;
  
    return costeHotel;
}
//console.log(calcularPrecioNoche(noches,cadanoche));


// Función para calcular el coste del vuelo segun la ciudad

const ciudad = prompt("¿Qué ciudad te gustaría visitar?").toLowerCase();
const costeParis = 180;
const costeBoston = 600;
const costeLondres = 120;

function calcularCosteAvion(ciudad){
    
    if(ciudad === "Paris"){
        return costeParis;
    } else if(ciudad === "Boston"){
        return costeBoston;
    } else (ciudad === "Londres")
        return costeLondres;
    
}
//console.log(calcularCosteAvion(ciudad))

// Función para calcular el coste de alquiler por día de un coche (Incluyendo descuentos segun la cantidad de días)

const diasDeAlquilerCoche = prompt("¿Cuantos días quieres alquilar un coche?");
const costePorDiaAlquilerCoche = 40;

function calcularCosteCoche(diasDeAlquilerCoche){
    let costeTotalCoche =  diasDeAlquilerCoche * costePorDiaAlquilerCoche;
    if(diasDeAlquilerCoche >= 7){
        return costeTotalCoche - 50;
    } else if(diasDeAlquilerCoche >= 3){
    return costeTotalCoche - 20;
    }
    else{
        return costeTotalCoche;
    }
}

//console.log(calcularCosteCoche(diasDeAlquilerCoche, costePorDiaAlquilerCoche))

// Función para calcular el coste total del viaje teniendo en cuenta las funciones anteriores 

function calcularCosteViaje(noches, ciudad, diasDeAlquilerCoche){
    const totalHotel = calcularPrecioNoche(noches, cadanoche);
    const totalAvion = calcularCosteAvion(ciudad);
    const totalCoche = calcularCosteCoche(diasDeAlquilerCoche);
    const totalDelViaje = Number(totalHotel)+ Number(totalAvion)+ Number(totalCoche);

    window.alert(`El coste total del viaje es: $${totalDelViaje}`);
}

calcularCosteViaje(noches, ciudad, diasDeAlquilerCoche);

