/* 
    CONSULTA #1

    * VARIABLES
    * OPERADOS
    * FUNCIONES
    * CONDICIONALES
    * BUCLES
    * TIPOS DE DATOS

*/
/* 

Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. 

Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)
sumatoria(30) debe retornar X porque hace (1+2+3+4+5+6+7+8+9+10......)
sumatoria(300) debe retornar X porque hace (1+2+3+4+5+6+7+8+9+10......)

*/




// function sumatoria(numero) {
//     let resultado = 0;


//     for (let i = 1; i <= numero; i++) {
//         resultado = resultado + i
//     }

//     return resultado

// }

// console.log(sumatoria(5));






let nombres = ['pepe', 'juan', 'maria'];
//indices[  0   ,     1  ,      2 ]        
//element[  1ro   ,  2do  , 3ro  ]
// console.log(nombre[0]); // maria


let persona = {
    nombre: 'Pepe',
    edad: 16,
    vacunado: true,
    saludar: function () {
        return 'Hola mi nombre es ' + this.nombre + ' y tengo ' + this.edad;
    },
}

let persona2 = {
    nombre: 'Maxi',
    edad: 22,
    vacunado: true,
    saludar: function () {
        return 'Hola mi nombre es ' + this.nombre + ' y tengo ' + this.edad;
    },
}

// console.log(persona.nombre);
//  console.log(persona.edad);

// console.log(persona.saludar());




let arrayPersonas = [
    {
        nombre: 'Pepe',
        edad: 16,
        vacunado: true,
        saludar: function () {
            return 'Hola mi nombre es ' + this.nombre + ' y tengo ' + this.edad;
        }
    },
    {
        nombre: 'Maxi',
        edad: 22,
        vacunado: true,
        saludar: function () {
            return 'Hola mi nombre es ' + this.nombre + ' y tengo ' + this.edad;
        },
    }
]

// console.log(arrayPersonas[0].nombre)
// console.log(arrayPersonas[0].saludar())

// console.log(arrayPersonas[1].nombre)
// console.log(arrayPersonas[1].saludar())


/* 
 
Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
 
 En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X (la suma de i + numero) es par”.
 
 */

function loopDePares(numero){
   
    for (let i = 0; i <= 100 ; i++) {
        console.log(i);

        if ((i + numero) % 2 === 0) {
            console.log('El número '+ (i + numero) +' es par');
        }
        
    }
}

// loopDePares(5);

//promedio
let numeros = [1,2,3,4,5,6 , '9s'];



let arrEdades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function menores (arrEdades) {
    let nuevoArray =[]
    for (let i = 0; i < arrEdades.length; i++){
        if (arrEdades[i] < 18)
            nuevoArray.push(arrEdades[i])
    }
    return nuevoArray
}

console.log(menores(arrEdades));

