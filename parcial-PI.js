// Ejercicio 1:
//  Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos: nombre, apellido, camada, esParcial (VERDADERO)


estudiante = {
    nombre: "Jesica",
    apellido: "Ramirez",
    camada: 7,
    esParcial: true
}

// console.table(estudiante)

// Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
// 	 NOTA < 4 :desaprobado
//  4 <= NOTA < 7 :  debe rendir examen final 
// 	 NOTA >= 7 : promocionado.  
// La función deberá retornar la condición final del alumno (solo retorna la palabra). 
// Al momento de llamar a la función, deberás mostrar la siguiente frase: “El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 

function situacionAlumno (nota){
    let mensaje
    if(nota >= 7){
        mensaje = "Promocionado"
    }else if (4 <= nota && nota < 7){ 
        mensaje = "Debe rendir examen final"
    }else{
        mensaje = "Desaprobado"
    } 
    return (`La nota del alumno es: ${nota} y su condicion es: ${mensaje}`)
}



// console.log(situacionAlumno(9));
// console.log(situacionAlumno(7));
// console.log(situacionAlumno(4));
// console.log(situacionAlumno(3));



// Ejercicio 2:
// Crea 1 array llamado clase.  
// Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
// Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
// Agrega estos 3 objetos al array llamado clase.
// Imprimir el array para ver que contenga esos objetos.


let clase = [
    {
        nombre: "Alejandra",
        apellido: "Vedoya",
        bimestre: 2
    },
    {
        nombre: "Danna",
        apellido: "Velasquez",
        bimestre: 2
    },
    {
        nombre: "Camila",
        apellido: "Bosio",
        bimestre: 2
    }
]

// console.log(clase)
// console.table(clase)


// Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
// Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada. 


function siguienteCursada (arrayClase) {
    for (let i = 0 ; i < arrayClase.length; i++){
        arrayClase[i].bimestre += 1
    }
    return arrayClase
}

// // antes de la cursada
// console.log("Antes")
// console.table(clase);
// // despues de la siguiente cursada
// console.log("Después de la siguiente cursada")
// console.table(siguienteCursada(clase))


// Ejercicio 3:
// 1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán: 

// Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 

// La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround del alumno.

// Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 
// Deberá retornar un string aprobado o desaprobado según corresponda


const asistenciaMinima = 23

function estadoAlumno (asistencias, playground){
    let estado
    if (asistencias >= asistenciaMinima  && playground === true) {
        estado = "aprobado"
    }else{
        estado = "desaprobado"
    }
    return "El alumno está " + estado
} 

// console.log(estadoAlumno(23,true));
// console.log(estadoAlumno(23,false));
// console.log(estadoAlumno(18,true));
// console.log(estadoAlumno(20,false));










