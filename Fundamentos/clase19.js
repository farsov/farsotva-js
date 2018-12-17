
/* Transformar arrays

function map:
En esta clase veremos cómo transformar un array. El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

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

const pasarAlturaACms = persona => ({
    ...persona,
        altura: persona.altura * 100
}) 

/*const pasarAlturaACms = persona => {
    //persona.altura *= 100

    return {
        ...persona,
        altura: persona.altura * 100
    }
}*/

var personasCms = personas.map(pasarAlturaACms)

console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)




