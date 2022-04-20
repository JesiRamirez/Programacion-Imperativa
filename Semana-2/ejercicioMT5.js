const prompt=require("prompt-sync")();

// 1. Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

// Fn Declarada
// function convertirPulgxCm (){
//     let numero = Number(prompt("Ingrese un número: "))
//     return numero*2.54
// }
// console.log(convertirPulgxCm());

// Fn flecha!
// let numero = Number(prompt("Ingrese un número: "))
// let convertirPulgxCm = () => {return numero*2.54}
// console.log(convertirPulgxCm())

// Fn Expresada
// let numero = Number(prompt("Ingrese un número: "))
// let convertirPulgxCm = function () {return numero*2.54}
// console.log(convertirPulgxCm())


// 2. Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”

// Fn Declarada
// function usuario() {
//     let nombre = prompt("Ingrese un nombre: ")
//     console.log("Su pagina web es https://www." + `${nombre}` + ".com")
// }

// usuario()


//Fn Flecha

// let nombre = prompt("Ingrese un nombre: ")
// let usuario = () => {return "Su pagina web es https://www." + `${nombre}` + ".com"}
// console.log(usuario())


// Fn Expresada

// let nombre = prompt("Ingrese un nombre: ")
// let usuario = function () {return "Su pagina web es https://www." + `${nombre}` + ".com"}
// console.log(usuario())


// 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

// function fraseAdmiracion (){
//     let frase = prompt("Ingrese una frase: ")
//     return ("¡" + `${frase}` + "!")
// }

// console.log(fraseAdmiracion());

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

// function edadPerros (){
//     let edadIngresada = Number(prompt("¿Cuál es la edad de tu perro? "))
//     return ("Su edad en años perrunos es " + edadIngresada * 7 + " " + "años")
// }

// console.log(edadPerros())


// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. (considerá que tu mes de trabajo tiene 40 horas.)

// function sueldoxHora () {
//     let sueldoMensual = Number(prompt("Ingrese su sueldo mensual: $"))
//     return ("Su sueldo por hora es" + " " + "$" + sueldoMensual / 40)
// }

// console.log(sueldoxHora())



// 6.Crear la función calculadorIMC() “Índice de Masa corporal = kg/(mt2)” que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

// function calculadorIMC() {
//     let alturaIngresada = Number(prompt("¿Cuál es su altura en metros(separado por un punto)? "))
//     let pesoIngresado = Number(prompt("¿Cuál es su peso en Kg(separado por un punto)? "))
//     let IMC = pesoIngresado/(alturaIngresada**2)
//     return ("Tu Indice de Masa Corporal es: " + IMC)
// }

// console.log(calculadorIMC())


