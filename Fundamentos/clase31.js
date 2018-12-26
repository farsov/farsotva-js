
/* 
    **Manejo de errores con callbacks
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().

*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}


function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, callback).fail(function () {
        console.log(`Sucedio un error y no se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (data) {
    console.log(`31 => hola yo soy: ${data.name}`)

    obtenerPersonaje(2, function (data) {
        console.log(`31 => hola yo soy: ${data.name}`)

        obtenerPersonaje(3, function(data){
            console.log(`31 => hola yo soy: ${data.name}`)
        })
    })
})

//
