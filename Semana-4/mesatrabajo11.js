// 1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes (cuentas bancarias).

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];


  // podes continuar tu codigo a partir de aca!

// 2.  Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes” que estará compuesta de la lista de objetos obtenidos en el punto anterior.

// const banco = {
//     clientes: arrayCuentas
// }

// console.log(banco)


// 3.  Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
//   Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);


const banco = {
  clientes: arrayCuentas,
  consultaCliente : function (nombre) {
    let mensajeError = "no se encontaron coincidencias"
    let clienteEncontrado 
    for (let i = 0; i < this.clientes.length; i++){
      if (this.clientes[i].titularCuenta === nombre) {
        clienteEncontrado = this.clientes[i];
      }
    } return clienteEncontrado ? clienteEncontrado : mensajeError
  }, 


// console.log(banco.consultaCliente("Jacki Shurmer"))



// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos. Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su nuevo saldo es: XXXX”.


  deposito : function (nombre, cantDeposito){
    let clienteEncontrado = this.consultaCliente(nombre);
    let mensaje
    if (typeof clienteEncontrado !== "string") {
      let nuevoSaldo = clienteEncontrado.saldoEnPesos += cantDeposito;
      mensaje = "Depósito realizado correctamente. Su nuevo saldo es " + nuevoSaldo
    }else{
      mensaje = "No se encontró ninguna coincidencia. Por favor verifique los datos"
    }
    return mensaje
},


// console.log(banco.deposito("Jacki Shurmer", 10000))


// 5. Crear un último método llamado extracción que recibirá también dos parámetros: el titular de cuenta y el monto a extraer. El método debe obtener la cuenta correspondiente y restar el monto al saldo actual. En caso de que el resultado sea menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”. De lo contrario, deberá imprimir “  XXXX”.


extraccion : function (nombre, monto){
  let clienteEncontrado = this.consultaCliente(nombre);
  let mensaje
  if (typeof consultaCliente !== "string"){
    if (clienteEncontrado.saldoEnPesos - monto >= 0){
    clienteEncontrado.saldoEnPesos -= monto
    mensaje = "Extracción realizada correctamente, su nuevo saldo es: " + (clienteEncontrado.saldoEnPesos)
    }else{
      mensaje = "Fondos Insuficientes"
  }
 } else {
      mensaje = "No se encontró ninguna coincidencia. Por favor verifique los datos"
  }
  return mensaje
    
  }   
 
}

// console.log(banco.extraccion("Jacki Shurmer", 10000))



//** BONUS EXTRA  **//

const alumno = {
  nombre: "Leandro",
  legajo: 123456,
  listadoNotas: [7, 2, 3, 5, 10],
  promedio : function (nombre){
    let cantidad = this.listadoNotas.length;
    let suma = 0
    for (let i = 0; i < cantidad; i++)
    suma += this.listadoNotas[i]
    return suma/cantidad
  },
  estado : function (notaMin){
    let promedio = this.promedio();
    return `El alumno ${this.nombre} está ${
    promedio > notaMin ? "aprobado" : "desaprobado"}. Su promedio de notas es ${promedio}`
    }
}
console.log(alumno.promedio("Leandro"));
console.log(alumno.estado("Leandro"))


let notaMin = 7;

let alumnos = {
  nombre: "Jesica",
  legajo: 26852,
  listadoNotas: [9,9,8.10,8,7],
  promedio : function (){
    let cantidad = this.listadoNotas.length;
    let suma = 0
    for (let i = 0; i < cantidad ; i++ ) {
      suma += this.listadoNotas[i]
    }
    return suma / cantidad
  },
  estado: function (notaMin){
    let promedio = this.promedio()
    return `El alumno ${this.nombre}  está  ${promedio > notaMin ? "aprobado" : "desaprobado"}. Su promedio de nota es ${this.promedio()}`
  }
}
console.log(alumnos.promedio())

console.log(alumnos.estado("Jesica"))