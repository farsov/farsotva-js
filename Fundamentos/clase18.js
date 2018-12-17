
/* Arrays

En esta clase aprenderemos como filtrar los arrays. Para filtrar siempre necesitamos establecer una condición. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

Reto: escribe el filtrado de personas bajas.

*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//const esAlta = persona =>  persona.altura > 1.80

const esAlta = ({ altura }) => altura > 1.80
const esBaja = ({ altura }) => altura < 1.80

var personas = [sacha,alan,martin,dario,vicky,paula]

/* lleva como parametro una condicion */
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)




