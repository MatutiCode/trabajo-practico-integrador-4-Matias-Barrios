# Trabajo Práctico Integrador: Investigación en TypeScript

## ¿Qué es TypeScript

- ¿Qué es TypeScript y quién lo desarrolla?
TypeScript es un superconjunto de JavaScript desarrollado por Microsoft que agrega tipado estático opcional. Todo código JavaScript válido es también TypeScript válido. Antes de ejecutarse, el código TypeScript se convierte en JavaScript puro.

- ¿Qué diferencias tiene con JavaScript?
JavaScript usa tipado dinámico y TypeScript permite definir tipos de datos de forma estático.

- ¿Qué ventajas ofrece?
1. Permite detectar errores mientras se escribe el código, antes de ejecutarlo
2. Mejora el autocompletado y la refactorización en el editor
3. Hace el código más mantenible y escalable
4. Los tipos funcionan como documentación del propio código

- ¿Cuál es su versión actual?
Su versión más actual es TypeScript 7 que salio el 8 de julio de 2026.

## Crear y ejecutar un proyecto

- ¿Cómo se instala TypeScript en un proyecto?
Se instala usando el siguiente comando:
    npm i -D typescript

- ¿Para qué sirve el archivo tsconfig.json?
Es el archivo de configuración del proyecto. Le indica a TypeScript tres cosas:
1. Qué archivo forman el proyecto: include
2. Qué tan estricto debe ser al verificar tipos: strict y opciones relacionadas
3. Cómo generar el JavaScript versión(target), sistema de módulos(module) y carpeta de salida(outDir)

- ¿Que hace el comando tsc?
genera el JavaScript que se ejecuta en producción

- ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
archivo con tsc, tsx y node?

1. tsc verifica los tipos y genera archivos .js, pero no ejecuta nada (después se ejecuta con Node).

2. tsx ejecuta el .ts directamente y lo recarga al guardar, pero no verifica tipos.

3. node archivo.ts ejecuta el .ts borrando los tipos, pero no verifica nada y no soporta enum ni parameter properties.

## Tipos Básicos

-¿Qué son los tipos string, number y boolean?

1. String es una cadena de texto
2. number son numeros enteros o decimales
3. boolean asigna un valor true o false

-¿Cómo se declara un array con tipo?

se escribe el tipo de los elementos seguido de un []

- ¿Qué es un tipo unión?

Un tipo unión permite que la variable acepte uno u otro tipo con |.
ejemplo
let id: string | number = "ABC123";
id = 456;

- ¿Por qué se recomienda evitar any?



## Funciones

- ¿Cómo se indican los tipos de los parámetros?

En TypeScript, los tipos de los parámetros de una función se indican escribiendo dos puntos (:) seguidos del tipo de dato justo después del nombre del parámetro.

- ¿Cómo se indica el tipo de retorno?

´function sumar(a: number, b: number): number {
    return a + b;
}´
number es el tipo de retorno de la funcion sumar.

fuentes: Retorno de funciones en TypeScript. https://www.luisllamas.es/retorno-de-funciones-en-typescript/

- ¿Qué es un parámetro opcional?

En los parametros opcionales se utiliza el signo de interrogación ( ? )
´function saludar(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola ${nombre}, tienes ${edad} años.`);
    } else {
        console.log(`Hola ${nombre}.`);
    }
}´

- ¿Qué es un parámetro por defecto?

En los parametros por defecto se utiliza el operador de asignación ( = )
´function saludar(nombre: string, edad: number = 18): void {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
}´

fuentes: Parámetros de funciones en TypeScript. https://www.luisllamas.es/typescript-parametros-funciones/

# Interfaces y type

- ¿Qué es una interfaz y para qué sirve?

Las interfaces son útiles para asegurar que los objetos cumplan con ciertos requisitos y para proporcionar una forma clara de comunicación entre diferentes partes del código.
Sirve para difinir contratos dentro del código, asegurando que los objetos tengan una estructura específica.

fuentes: https://medium.com/@ingenieroandrade/typescript-interfaz-8ee845a08950

- ¿Qué es un type?

Un type es un nombre o alias que se le da a cualquier tipo existente. Tambien permite combinar tipos con ' | '(union) y ' & '(interseccion).

fuentes: https://www.webtutoriales.com/articulos/2024/01/11/tipos-typescript/

- ¿Cómo se declara una propiedad opcional?

Para declarar una propiedad opcional se debe colocar el signo de interrogación (?) despues del nombre de la propiedad.

- ¿Cuándo conviene usar cada uno?

interface se usa cuando describimos la estructura de objetos y clases.
type: se usa cuando necesitamos describir tipos primitivos, uniones y intersecciones.

fuentes: https://dev.to/joodi/when-to-use-type-vs-interface-in-typescript-2dld

# Enums y tipos literales

- ¿Qué es un enum?

Es una característica de TypeScript que permite definir un conjunto de valores constantes bajo un mismo nombre.

fuentes: https://www.luisllamas.es/typescript-enums/

- ¿Qué es un tipo literal?

Los tipos literales son tipos que permiten definir variables con valores específicos y prefijados en lugar de tipos amplios como string o number.

fuentes: https://www.luisllamas.es/typescript-literales/

- ¿En qué se parecen y en qué se diferencian?

Ambos restringen un valor a un conjunto fijo de opciones y TypeScript avisa si se usa un valor que no corresponde.
La diferencia es que el enum genera código javascript u no funciona con "node", mientras que el tipo literal desaparece al compilar y no genera nada.

fuentes: https://www.luisllamas.es/typescript-literales/

- ¿En qué situaciones se puede usar cada uno?

El enum se usa siempre que se necesita representar un conjunto fijo de constantes.
El tipo literal se usa cuando solo se quiere restringir los valores al escribir código, sin generar nada extra.

fuentes: https://blog-logrocket-com.translate.goog/typescript-enums-vs-types/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc