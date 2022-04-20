// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers.length)

// let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5]);


// let str = ["“un string cualquiera”"]
// let arrayAleatorio= ["Digital", "House", true, "string", "123","false", 54, str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])


// PELICULAS

// 1. Crear la estructura adecuada para guardar las siguientes películas:

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
// console.log(peliculas[4])

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.

function convertirMayuscula (array){
    let contenido = array.length
    for (let i = 0; i <= contenido; i++){
        let mayus = peliculas.toUpperCase()
    }
    return contenido
}
console.log(convertirMayuscula(peliculas))