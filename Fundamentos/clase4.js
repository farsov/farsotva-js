
/* Funciones */

var nombre = 'pepito', edad = '25'

/* example 1 */
function imprimirEdad(){
    console.log(`${nombre} tiene ${edad} años`)
}

this.imprimirEdad()

/* example 2 */
function imprimirEdad2(n ,e){
    console.log(`${n} tiene ${e} años`)
}

this.imprimirEdad2(nombre, edad)
