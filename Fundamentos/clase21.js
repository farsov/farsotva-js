
/* Cómo funcionan las clases en JavaScript
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.

*Hablar de objetos en javascript es hablar de prototipos.
*this hace referencia al nuevo objeto que se acaba de crear.
*la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
*La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
*/

function Persona(nombre, apellido, altura){
    //console.log('Me ejecutarion')
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto =  function() {
    console.log(`${this.nombre} ${this.altura >= 1.8 ? 'es una persona' : 'no es una persona'} alta`)
}

var sacha = new Persona('Sacha', 'Perez', 1.82)
var Arturo = new Persona('Arturo', 'Martinez', 1.5)
sacha.saludar()

