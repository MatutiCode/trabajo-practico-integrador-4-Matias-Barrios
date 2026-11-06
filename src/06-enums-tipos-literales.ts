//enum

enum estado {
    pendiente = "Pendiente",
    completado = "Completado",
}

let estadoTarea: estado = estado.pendiente;
console.log("estado inicial:", estadoTarea);
estadoTarea = estado.completado;
console.log("estado actualizado:", estadoTarea );

//enum numerico:
enum dia {
    lunes,
    martes,
    miercoles,
}

console.log("Dia.Martes =", dia.martes, "| nombre del 1 =", dia[1]);

//tipo literal

type Semaforo = "rojo" | "amarillo" | "verde";


//texto
let luz: Semaforo = "rojo";
luz = "verde";
console.log("Luz:", luz);

//numerico
type CarasDado = 1 | 2 | 3 | 4 | 5 | 6;

const tirada: CarasDado = 4;
console.log("Tirada:", tirada);