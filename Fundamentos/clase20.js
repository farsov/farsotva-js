
/* Reducir arrays

El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.
*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 90
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 91
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 100
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 111
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 130
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
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

//var acum = 0

/*example 1
for (let i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros;
}*/

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros


//.reduce(FUNCTION_NAME, VALOR_INICIAL_DEL_ACUMULADOR)
var totalDeLirbos = personas.reduce(reducer, 0)

/*console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)*/
console.log(`En total todos tienen ${totalDeLirbos} libros`)




