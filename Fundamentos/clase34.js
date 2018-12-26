
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

var ids = [1,2,3,4,5,6,7]
/*var promesas = ids.map(function (id){
    return obtenerPersonaje(id)
})*/
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(data => console.log(data))
    .catch(onError)



