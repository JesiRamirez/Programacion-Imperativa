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
//  Ejercicio 1. 