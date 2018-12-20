
/* 
    **Callbacks
    En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

    Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción.
*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}
const onResponse = function (data) {
    console.log(`29 => hola yo soy: ${data.name}`)
}

/*/$.get(lukeUrl, opts, function (data) {
    console.log(`hola yo soy: ${data.name}`)
})*/

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)
}

//$.get(lukeUrl, opts, onResponse)
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
