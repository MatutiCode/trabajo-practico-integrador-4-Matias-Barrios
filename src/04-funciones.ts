export {};

function sumar(a: number, b: number): number {
  return a + b;
}
console.log("sumar 4 y 6 = ", sumar(4, 6));

//parametro opcional
function saludar(nombre: string, edad?: number): void {
  if (edad) {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
  } else {
    console.log(`Hola ${nombre}.`);
  }
}

//parametro por defecto
function saludo(nombre: string, edad: number = 18): void {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
}