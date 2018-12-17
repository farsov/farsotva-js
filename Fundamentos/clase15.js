
/* Do While

Otra estructura repetitiva es el do-while. A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

Reto, resuelve el bug que tiene el ejercicio.

*/

var nombre1 = {
    nombre : 'Pepito',
    apellido : 'Perez',
    edad : 26,
    peso: 75,
}

console.log(`Al inicio del año ${nombre1.nombre} pesa ${nombre1.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar  = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


/* example 1 */
const META = nombre1.peso - 3 
var dias = 0 

while (nombre1.peso > META) {
    //debugger //detener la ejecucion

    if (comeMucho()) {
        /// aumenta de peso
        aumentarDePeso(nombre1)
    }
    if (realizaDeporte()) {
        //adelgaza
        adelgazar(nombre1)
    }

    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${nombre1.nombre} adelgazo 3Kg`)


