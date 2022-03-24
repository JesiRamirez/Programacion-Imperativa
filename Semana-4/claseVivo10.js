let notas1 = [10, 4, 6, 9, 9, 7, 8];
let notas2 = [8, 5, 9, 10, 4]


const promedioDeNotas = arrNotas => {
    let sumatoria = 0;
    let largo = arrNotas.length
    for (let i = 0; i < largo; i++){
        sumatoria = sumatoria + arrNotas[i]
    }
    let promedio = sumatoria / largo
    return promedio
}

let promedioNotas1 = promedioDeNotas(notas1);
let promedioNotas2 = promedioDeNotas(notas2);

console.log("Promedio de notas1", promedioNotas1);
console.log("Promedio de Notas2", promedioNotas2);