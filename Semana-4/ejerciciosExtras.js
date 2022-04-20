// let sku = "XXXXXXXXX/XX"; //generico

let sku = "216434000/*S";
let sku5 = "384858000/*M"

/*
Reemplaza las comillas para obtener 
la salida solicitada al imprimir cada variable
*/

// let codigo = sku.slice(0,6);
// let color = sku.slice(6,9);
// let talle = sku.slice(10, 12);

// console.log(codigo); //216434
// console.log(color); //000
// console.log(talle); //*S

// Ejercico 2, modificar el orden de los codigos.

// let codigo = sku.slice(0,6);
// let color = sku.slice(6,9);
// let talle = sku.slice(10, 12);

// // console.log(codigo); //216434
// // console.log(color); //000
// // console.log(talle); //*S

// let sku1 = sku.replace(talle, color);
// let colorTercero = sku1.replace(color, talle);

// console.log(colorTercero)


// Ejercicio 3. Para finalizar con la manipulación del sku se solicita reemplazar el slash (/) del sku del artículo por un guión medio (-).

// let codigo = sku.slice(0,6);
// let color = sku.slice(6,9);
// let talle = sku.slice(10, 12);

// let sku1 = sku.replace(talle, color);
// let colorTercero = sku1.replace(color, talle);



// let reemplazoConGuion = colorTercero.replace("/","-");
// console.log(reemplazoConGuion)


// Ejesrcio 4. Dado que hay miles de sku por modificar necesitaremos tres funciones que realice lo que desarrollamos en el punto 1, 2 y 3, así podemos reutilizar el código para hacer modificaciones del sku cuantas veces necesitemos.

// function modificarOrden(){
//     // for (let i = 0 ; i <= 10; i++)
//     {
//         let codigo = sku.slice(0,6);
//         let color = sku.slice(6,9);
//         let talle = sku.slice(10, 12);

//         let sku1 = sku.replace(talle, color);
//         let colorTercero = sku1.replace(color, talle);

//         let reemplazoConGuion = colorTercero.replace("/","-")

//         console.log(reemplazoConGuion)
//     }

    
// }
// modificarOrden()

// ARRAY
//  Ejercicio 1. Obtenemos arrays de Alumnos y Notas donde por un error de carga necesitamos editar e imprimir los resultados solicitados a continuación:
// Él array alumnos contiene los siguientes elementos

// let alumnos = ['Logitech','Martin', 'Leandro', 'Ezequiel', 'Esteban'];

// // a. Utilizando algún método de arrays realizar la eliminación del primer elemento ‘Logitech’ y agregar en su lugar al alumno ‘Nelson’.

// console.log(alumnos.shift());
// console.log(alumnos.unshift("Nelson"));


// // b. Él array de Notas contiene los siguientes elementos. Similar al punto anterior, debemos reemplazar el elemento ‘mouse’ por un 10.


// let arrayNotas = ["mouse",4,8,8,10];

// console.log(arrayNotas.shift());
// console.log(arrayNotas.unshift("10"));

// // c. Imprimir por pantalla los dos arrays modificados.

// console.log(alumnos.join(", "))
// console.log(arrayNotas.join(", "))


// Ejercicio 3. Nuevamente obtenemos un array de notas que está corrupto, se representa con string “siete” cuando la nota es 7 por un error de ingreso de datos, nuestra tarea será buscar los elementos strings  y reemplazarlos por un number 7 para esto se solicita crear una función que resuelva.
/*Deberá imprimir*/
//[7, 4, 8, 8,10, 7, 7]

let arrayNotas = ["siete",4,8,8,10,"siete","siete"];

// function corregirArray(array){
//     let corregido = arrayNotas.indexOf();
//     for (let i = 0; i <= arrayNotas.indexOf("siete"); i++){
//         if (arrayNotas.indexOf("siete") === "siete"){
//                 let eliminar = arrayNotas.shift();
//                 let renombrar = arrayNotas.unshift("7");
//             }
//         }
//         return corregirArray;
        
//     }
// console.log(corregirArray());

//// NO FUNCIONA!!!!

let buscar = arrayNotas.replace("siete", "7")
// let eliminar = arrayNotas.shift();
// let renombrar = arrayNotas.unshift("7");
console.log(arrayNotas)


