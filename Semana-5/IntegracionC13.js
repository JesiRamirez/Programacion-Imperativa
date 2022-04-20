//Loop de pares
//Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.

function loopDePares (numero){
    for(let i = 0; i <= 100; i++){
        console.log(i)
        
        if ((numero + i) % 2 === 0) {
            console.log(`El número ${numero+i} es par`)
        }
    } 
}

// loopDePares(1);



// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.


function loopDeImpares (numero, palabra){
        
    for(let i = 0; i <= 100; i++){
        console.log(i)
        let palabra = "Impar"
        if ((numero + i)%2 !== 0 ) {
            console.log("El numero " + " " + `${numero + i}` + " " + "es " + palabra)
        }
    } 
}

// loopDeImpares(1);


// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36

function sumatoria (num) {
    let resultado = 0;
    for (let i = 1; i <= num; i++) {
        resultado += i
    } return resultado;
}

// console.log(sumatoria(3));
// console.log(sumatoria(7));
// console.log(sumatoria(5));




//Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo: nuevoArreglo(5) debe retornar [1,2,3,4,5]

function nuevoArreglo(num){
    let arreglo = []
    for (let i = 0; i < num; i++){
        arreglo.push(i)
    }
    return arreglo
}
//console.log(nuevoArreglo(5))

//                 Similar String.split()

// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]


function split(string){
    let arr = [];

    for (let i = 0; i < string.length; i++){
        arr.push(string[i]);
    } 
    return arr;

}

// console.log(split('chau'));



//Carácter del medio
// Deberás crear una función llamada caracterDelMedio que reciba un string por parámetro y devuelva sus caracteres del medio. Ejemplo:
// caracterDelMedio(“Digital House”) debe retornar “l”
// caracterDelMedio(“hola”) debe retornar “ol”
// caracterDelMedio(“cosas”) debe retornar “s”


let caracterDelMedio = (palabra) => {
    //  let palabra2 = palabra.replace(/ /g, "")
    //  console.log(palabra)
    let posicionDelMedio = Math.ceil(palabra.length / 2) - 1;
    if (palabra.length % 2 === 0) {
      return palabra[posicionDelMedio] + palabra[posicionDelMedio + 1];
    } else {
      return palabra[posicionDelMedio];
    }
  };
  console.log(caracterDelMedio("que genial!"));















// Mover ceros a lo último
// Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
// moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]


// function moverCeros () {
//     let arrNumeros = []
// }