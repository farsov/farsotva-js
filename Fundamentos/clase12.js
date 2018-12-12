
/* Arrow Functions

En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

*/

var nombre = {
    nombre : 'Pepito',
    apellido : 'Perez',
    edad : 26,
    ingeniero : true,
    cantante : false,
    cocinero : false,
    dj : false,
    guitarrista : false,
    drone: true,
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('ingeniero')
    }else{
        console.log('No es ingeniero')
    }

    if(persona.cocinero){
        console.log('cocinero')
    }else{
        console.log('No es cocinero')
    }

    if(persona.drone){
        console.log('drone')
    }else{
        console.log('No es drone')
    }

    
}

const MAYORIA_DE_EDAD = 18

/* Examples:

const esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
*/

const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

this.imprimirProfesiones(nombre)
this.imprimirSiEsMayorDeEdad(nombre)
this.permitirAcceso();
