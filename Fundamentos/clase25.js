
/* 
    **Clases en JavaScript
    Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

    La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

    El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.
*/

class Persona {

    constructor(nombre, apellido, altura){
        //console.log('Me ejecutarion')
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return  this.altura >= 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super (nombre, apellido, altura) // llamar constructor clase padre
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}y soy desarrollador`)
    }
}




