
/* Objetos */

var nombre1 = {
    nombre: 'Pepito',
    apellido: 'Perez',
    edad: 24
}

var nombre2 = {
    nombre: 'Julanito',
    apellido: 'Perez',
    edad: 27
}

/* example 1 */
function imprimirNombreEnMayusculas(persona){
    var nombre  = persona.nombre.toUpperCase()
    console.log(nombre)
}

function imprimirNombreEnMayusculas2(persona){
    //var nombre  = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

this.imprimirNombreEnMayusculas(nombre1)
this.imprimirNombreEnMayusculas2(nombre2)



