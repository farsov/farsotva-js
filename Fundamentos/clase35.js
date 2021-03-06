
/* 
    **Async-await: lo último en asincronismo
Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.

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

 async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var data = await Promise.all(promesas)
        console.log(data)
    } catch (id) {
        onError(id)
    }
    
 }


obtenerPersonajes()



