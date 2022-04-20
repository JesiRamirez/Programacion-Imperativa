estudiante = {
    nombre: "Jesica",
    apellido: "Ramirez",
    camada: 7,
    esParcial: true
}

// crear una funcion que retorne el estado! 

// crear una function con parametro
// condiciones
// retornar solamente el estado.


function futuraNota(nota){
    let mensaje
    if(nota>7){
        mensaje = "está promocionado"
    }else if (4 <= nota && nota <= 7){
        mensaje = "debe rendir examen final"
    }else{
        mensaje = "está desaprobado"
    }
    return (`la nota del alumno es ${nota} y su condicion es ${mensaje}`)
}

// console.log(futuraNota(9));
// console.log(futuraNota(6));
// console.log(futuraNota(3))



// ejercicio 2

const clase = [
    {
        nombre: "Esteban",
        apellido: "Piazza",
        bimestre: 1, 
    },

    {
        nombre: "Leandro",
        apellido: "Borrelli",
        bimestre: 1, 
    },

    {
        nombre: 'Martin',
        apellido: "Cejas",
        bimestre: 1, 
    },
]

// console.log(clase);
// console.table(clase)


function siguienteCursada (arrayClase) {
    for (let i = 0 ; i < arrayClase.length; i++){
        arrayClase[i].bimestre += 1
    }
    return arrayClase
}

// antes de la cursada
console.log("Antes")
console.table(clase);
// despues de la siguiente cursada
console.log("DEspues de la siguiente cursada")
console.table(siguienteCursada(clase))







