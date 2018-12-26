
/* 
    **Promesas 
    En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tre estados:

    pending
    fullfilled
    rejected
    Las promesas se invocan de la siguiente forma:

    new Promise( ( resolve, reject ) => {
    // --- llamado asíncrono
    if( todoOK ) {
        // -- se ejecutó el llamado exitosamente
        resolve()
    } else {
        // -- hubo un error en el llamado
        reject()
    }
    } )
    No olvides ver el material adjunto de esta clase.

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
    .then(function (data) {
        console.log(`El personaje 1 es ${data.name}`)
    })
    .catch(onError)

