
/* 
    La verdad oculta sobre las clases en JavaScript
    Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

    La herencia prototipada
*/

function heredaDe(prototipoHIjo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHIjo.prototype = new fn
    prototipoHIjo.prototype.constructor = prototipoHIjo
}

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

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}y soy desarrollador`)
}


