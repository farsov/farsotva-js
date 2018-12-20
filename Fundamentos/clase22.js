
/* 
Modificando un prototipo:

En esta clase veremos cómo se modifican las clases de herencias. JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

El contexto de las funciones: quién es this

En esta clase explicamos por qué al introducir el arrow function salió un error. El error del contexto de this en javascrip es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.
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

Persona.prototype.soyAlto = () => {
    return  this.altura >= 1.8
}

var sacha = new Persona('Sacha', 'Perez', 1.82)
var arturo = new Persona('Arturo', 'Martinez', 1.5)

sacha.saludar()
sacha.soyAlto()


