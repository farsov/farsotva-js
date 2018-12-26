
/* 
    **Promesas Encadenadas
    A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.

*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}


function obtenerPersonaje(id){

    return new Promise(function (resolve, reject){
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function (data) {
            resolve(data)
        })
        .fail(()=> reject(id))
    })
    
}

function onError(id){
    console.log(`Sucedio un error al obtener el persona ${id}`)
}

obtenerPersonaje(1)
    .then(data => {
        console.log(`El personaje 1 es ${data.name}`)
        return obtenerPersonaje(2)
    })
    .then(data =>{
        console.log(`El personaje 2 es ${data.name}`)
        return obtenerPersonaje(3)
    })
    .then(data =>{
        console.log(`El personaje 3 es ${data.name}`)
        return obtenerPersonaje(4)
    })
    .then(data =>{
        console.log(`El personaje 4 es ${data.name}`)
        return obtenerPersonaje(5)
    })
    .catch(onError)

