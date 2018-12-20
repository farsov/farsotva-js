
/* 
    **Funciones como parámetros
    En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.
*/

class Persona {

    constructor(nombre, apellido, altura){
        //console.log('Me ejecutarion')
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn){
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto(){
        return  this.altura >= 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super (nombre, apellido, altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}y soy desarrollador`)
        if (fn){
            fn(this.nombre,this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia  ${nombre} ${apellido}`)
    if(esDev){
        console.log('Eres desarrollador')
    }
}

var nombre1 = new Persona('Pepito', 'Perez', 1.80)
var nombre2 = new Persona('Arturo', 'Martinez', 1.85)
var nombre3 = new Desarrollador('Sacha', 'Lifszyc', 1.65)

nombre1.saludar()
nombre2.saludar(responderSaludo)
nombre3.saludar(responderSaludo)





