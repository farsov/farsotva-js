
/* For

En esta clase estudiaremos una de las estructuras básicas de control. El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro los paŕentesis irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.

*/

var nombre1 = {
    nombre : 'Pepito',
    apellido : 'Perez',
    edad : 26,
    peso: 75,
}

console.log(`Al inicio del año ${nombre1.nombre} pesa ${nombre1.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar  = persona => persona.peso -= INCREMENTO_PESO

/* example 1 */
for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if(random < 0.25) {
        // aumenta de peso
        aumentarDePeso(nombre1)
    } else if (random < 0.5){
        //adelgazar
        adelgazar(nombre1)
    }
}

console.log(`Al final del año ${nombre1.nombre} pesa ${nombre1.peso.toFixed(2)}kg`)

