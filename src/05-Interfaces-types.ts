export {};

//interface
interface persona {
    nombre: string;
    apellido: string;
    email: string;
    edad: number;
    domicilio: string;
}

//alias de un tipo
type edad = number;
const miEdad: edad = 21;

//union de tipos
type codigo = string | number;
const codigoMateria: codigo = "tpl2";
const codigoAula: codigo = 12;

//interseccion
type Nombre = { nombre: string };
type Edades = { edad: number };

type Persona = Nombre & Edades;

const persona: Persona = { nombre: "Matias", edad: 21 };
console.log(persona);