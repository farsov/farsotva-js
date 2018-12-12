
/* Condicionales 
En esta clase seguiremos trabajando con condicionales para desglosar las funciones en funciones más pequeñas que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello utilizamos los símbolos >=.

Return detiene la ejecución de una función y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.
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

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

this.imprimirProfesiones(nombre)
this.imprimirSiEsMayorDeEdad(nombre)

