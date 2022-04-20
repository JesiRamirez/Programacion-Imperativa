// function mayor(arraynumeros){
//     let elmayor = arraynumeros[0]
//     for (let i = 0; i < arraynumeros.length; i++){
//       if(arraynumeros[i] > elmayor) {
//         let mensaje = "El mayor es " + arraynumeros[i]
//       }
//     }
//     return elmayor
//   }
//   console.log(mayor())

// function numeros() {
//   let arrayNuevo = [];
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arrayNuevo.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       arrayNuevo.push("Buzz");
//     } else if (i % 3 === 0) {
//       arrayNuevo.push("Fizz");
//     } else {
//       arrayNuevo.push(i);
//     }
//     return arrayNuevo;
//   }
// }

// console.log(numeros());

let arrNum = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100
];

function repetidos(arrNum) {
  let auxiliares = [];
  let repetidos = [];
  for (let i = 0; i <= arrNum.length; i++) {
    if (!arrNum.length[i] === auxiliares) {
      auxiliares = arrNum.push(i);
    } else if (arrNum.length[i] === auxiliares) {
      auxiliares = arrNum.push(i);
    } else {
      repetidos = arrNum.push(i);
    }
  }
  return repetidos;
}

repetidos(arrNum);
