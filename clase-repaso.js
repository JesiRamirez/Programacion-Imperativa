function mostrarDecimales(){
    for(let i = 0; i <= 9; i++){
        for(let j = 0; j <= 9; j++){
            if(i===9) return 
            console.log(`${i}.${j}`)
        }
    }
}

// mostrarDecimales()

// const contarVocales = function (str)
// {
//     let strMin = str.toLowerCase();
//     let vocales = ["a", "e", "i", "o", "u"]
//     let cantVocales = 0
//     for (let i = 0; i < strMin.length; i ++){
//         if ( vocales.includes(strMin[i])){
//             cantVocales += 1
//         }
//     }
//     return cantVocales
// }
// console.log(contarVocales("Programacion Imperativa"))


let fila1 = [4, 9, 2];
let fila2 = [3, 1, 7];
let fila3 = [8, 0, 6];


let matrizDe3 = [];

matrizDe3.push(fila1, fila2, fila3)

// console.table(matrizDe3)




function sumarFilas(matriz){
    for(let i = 0; i < matriz.length; i ++){
        
        let sumatoria = 0

        for (let j = 0; j < matriz[i].length; j++) {
            
        sumatoria += matriz[j][i]    
        }
    }
    console.log(sumatoria)
}
// sumarFilas(matriz)



function impreimirMultiplicacion(matriz){
    for(let i = 0; i < matriz.length; i ++){
        let producto = 1
        for (let j = 0; j < matriz[i].length; j++) {
            producto *= matriz[i][j]
           }
           if (producto % 2 === 0){
            console.log(producto)
        }       
    }
}

// impreimirMultiplicacion(matrizDe3)

function contarVocales(str) {
  let vocales = ["a", "e", "i", "o", "u"];
  let cantVocales = 0;
  let strMin = str.toLowerCase();

  for (let i = 0; i <= strMin.length; i++) {
    if (vocales.includes(strMin[i])) {
      cantVocales += 1;
    }
  }
  return cantVocales;
}

// console.log(contarVocales("Programación Imperativa"));


let arrNum = [3, 6, 1, 8, 5, 0, 7];

function inverso(Num) {
  let arrInvertido = [];
  for (let i = 0; i < Num.length; i++) {
    arrInvertido.reverse(arrNum);
  }
  return arrInvertido;
}

// console.log(inverso(arrNum));


function piramide(num1, num2) {
 
  for (let i = num1; i < num2; i++) {
    for (let j = 0; j < i; j++) {
       repeat(j < i);
    }
  }
  return ;
}
console.log(piramide(1, 30));