1. void: Tipo de retorno de una función que no devuelve ningún valor.
```ts
function saludar(nombre: string): void {
  console.log(`Hola ${nombre}`);
}
```
2. tsc: es el compilador, revisa los tipos y genera los archivos .js
3. tsx: ejecuta el archivo .ts directo, sin compilar antes y no verifica tipos.
4. any: Tipo que desactiva la verificación de tipos. Conviene evitarlo porque los errores aparecen recién al ejecutar.
```ts
let dato: any = "texto";
dato = 42;
dato.metodoQueNoExiste(); //falla al ejecutar
```
5. unknow: Tipo para valores cuyo tipo no se conoce; obliga a verificarlo antes de usarlo. Es la alternativa segura a `any`.
```ts
const valor: unknown = "hola";
if (typeof valor === "string") {
  console.log(valor.toUpperCase());
}
```
6. strict: es una opción del tsconfig.json que activa todos los controles estrictos de tipos.
7. dist: es la carpeta donde tsc deja el JavaScript compilado.
8. extend: Palabra clave que hace que una interface herede las propiedades de otra y agregue más.
```ts
interface Persona {
  nombre: string;
}
interface Alumno extends Persona {
  carrera: string;
}
const a: Alumno = { nombre: "Matias", carrera: "Software" };
```
9. @types/node: Paquete con las definiciones de tipos de Node.js. Sin él, TypeScript no reconoce cosas de Node como `process`.
```ts
console.log(process.version); 
```
10. inferencia de tipos: TypeScript deduce el tipo a partir del valor inicial, sin que haya que escribirlo.
```ts
let ciudad = "Formosa";
```