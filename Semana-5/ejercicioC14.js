// Obtener en un nuevo array las edades menores a 18.

const arrEdades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function menoresA18 (arrEdades) {
    let nuevoArray =[]
    for (let i = 0; i < arrEdades.length; i++){
        if (arrEdades[i] < 18){
            nuevoArray.push(arrEdades[i])}
    }
    return nuevoArray
}

// console.log(menoresA18(arrEdades));


// Obtener en un nuevo array las edades mayor o igual a 18.


function mayoresA18 (arrEdades) {
    let segundoArray =[]
    for (let i = 0; i < arrEdades.length; i++){
        if (arrEdades[i] >= 18){
            segundoArray.push(arrEdades[i])}
    }
    return segundoArray
}

// console.log(mayoresA18(arrEdades));


// Obtener en un nuevo array las edades igual a 18.

function igualA18 (arrEdades) {
    let tercerArray =[]
    for (let i = 0; i < arrEdades.length; i++){
        if (arrEdades[i] === 18){
            tercerArray.push(arrEdades[i])}
    }
    return tercerArray
}

// console.log(igualA18(arrEdades));


// Obtener el menor.

function menorEdad (arrEdades) {
    let elMenor = arrEdades[0]
    for (let i = 0; i < arrEdades.length; i++){
        if (arrEdades[i] < elMenor){
            elMenor = arrEdades[i]
        }
    }
    return elMenor
}

// console.log(menorEdad(arrEdades));



// Obtener el mayor. 


function mayorEdad (arrEdades) {
    let elMayor = arrEdades[0]
    for (let i = 0; i < arrEdades.length; i++){
        if (arrEdades[i] > elMayor){
            elMayor = arrEdades[i]
        }
    }
    return elMayor
}

//console.log(mayorEdad(arrEdades));



// Obtener el promedio de edades.

function promedio (arrEdades) {
    let suma = 0;
    let cantidad = arrEdades.length
    for (let i = 0; i < cantidad; i++){
        suma += arrEdades[i]
    }
    return (suma / cantidad)
}

// console.log(promedio(arrEdades))



function edadMenoresA18 (arrEdades) {
    let suma = 0
    let cantidad = 0
        for (let i = 0; i < arrEdades.length; i++){
            suma += arrEdades[i]
            cantidad ++
        }
        return suma/cantidad
    }
    // console.log(edadMenoresA18(arrEdades));

// Incrementar en 1 todas las edades.

function incrementarEdad (arrEdades) {
    let incremento = []
    for (let i = 0; i < arrEdades.length; i++) {
        incremento.push(arrEdades[i] + 1);
        
    }
    return incremento

}

// console.log(incrementarEdad(arrEdades))



// 2. Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada



const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 37,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 37,
        tipoCuenta: "sueldo"
},
{
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
}
]


//Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

function menoresA30 (arrayCuentas) {
    let menores = []
        for (let i = 0; i < arrayCuentas.length; i++){
            if (arrayCuentas[i].edadTitular < 30){
            menores.push(arrayCuentas[i])
        }
    }
    return menores
}

// console.log(menoresA30(arrayCuentas))



// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

function mayoresOIgualesA30 (arrayCuentas) {
    let mayOIgualA30 = []
        for (let i = 0; i < arrayCuentas.length; i++){
            if (arrayCuentas[i].edadTitular >= 30){
                mayOIgualA30.push(arrayCuentas[i])
        }
    }
    return mayOIgualA30
}

//console.log(mayoresOIgualesA30(arrayCuentas))




// Obtener un nuevo array de cuentas cuyas edades sean igual a 30.


function igualesA30 (arrayCuentas) {
    let igualA30 = []
        for (let i = 0; i < arrayCuentas.length; i++){
            if (arrayCuentas[i].edadTitular === 30){
                igualA30.push(arrayCuentas[i])
        }
    }
    return igualA30
}

//console.log(igualesA30(arrayCuentas))


// Obtener la cuenta con el titular de la misma más joven.


function elMenorDeTodos (arrayCuentas) {
    let elMenor = arrayCuentas[0].edadTitular
        for (let i = 0; i < arrayCuentas.length; i++){
            if (arrayCuentas[i].edadTitular < elMenor){
                elMenor = arrayCuentas[i]
        }
    }
    return elMenor
}

console.log(elMenorDeTodos(arrayCuentas))



// Obtener un nuevo array por cada tipo de cuenta.
// Obtener un nuevo array con las cuentas habilitadas.
// Obtener un nuevo array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.

