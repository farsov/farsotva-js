
/* Condicionales 
En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el flujo de nuestro código.

Empezaremos con los condiconales. Los condicionales nos permiten decidir si un código se ejecuta o no. También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o verdadero. Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.
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

    if(persona.edad >= 18){
        console.log('Mayor de edad')
    }else{
        console.log('Menor de Edad')
    }
}


this.imprimirProfesiones(nombre)

