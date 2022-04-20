// Crear un array llamado misMascotas
// Dentro de este array crearemos un objeto para cada mascota. Cada objeto deberá tener:
// nombre
// raza
// edad
// sonido
// un método que nos retorne ese sonido 2 veces
// Cuando esté listo, verificar en consola


let misMascotas = [
    {
    nombre: "Roma",
    raza: "Negra",
    edad: 2,
    sonido: "miau",
    repetirSonido: function () {
        return `${this.sonido} ${this.sonido}`;
        },
    },
    {
      nombre: "Pachi",
      raza: "blanco y negro",
      edad: 6,
      sonido: "miau",
      repetirSonido: function () {
        return `${this.sonido} ${this.sonido}`;
      },
    },
    {
      nombre: "Bruna",
      raza: "ovejera",
      edad: 7,
      sonido: "guau",
      repetirSonido: function () {
        return `${this.sonido} ${this.sonido}`;
      },
    },
    {
    nombre: "milka",
    raza: "angus",
    edad: 11,
    sonido: "muu",
    repetirSonido: function () {
        return `${this.sonido} ${this.sonido}`;
    },
    },
  ];
  // Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.
  
  function aumentarEdad(arrayMascotas) {
    for (let i = 0; i < arrayMascotas.length; i++) {
      arrayMascotas[i].edad += 1;
    }
    return arrayMascotas;
  }
  // console.table(misMascotas);
  // console.table(aumentarEdad(misMascotas));
  
  // Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
  // Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
  // Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
  // Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
  
//   function aumentarEdad2(arrayMascotas) {
//     for (let i = 0; i < arrayMascotas.length; i++) {
//       if (arrayMascotas[i].edad < 6) {
//         arrayMascotas[i].edad += 1;
//       } else if (arrayMascotas[i].edad <= 10) {
//         arrayMascotas[i].edad += 2;
//       } else {
//         arrayMascotas[i].edad += arrayMascotas[i].edad / 2;
//       }
//     }
//     return arrayMascotas;
//   }
//   console.table(misMascotas);
//   console.table(aumentarEdad2(misMascotas));
  
  // Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

//   function generarId (arrayMascotas) {
//     for (let i = 0; i < arrayMascotas.length; i++) {
//     //arrayMascotas[i].ID = [x] ;
//         for (let x = 1 ; x <= arrayMascotas.length ; x++) {
//           arrayMascotas[i].ID = [x] 
//         }  
//     return arrayMascotas;
//     }
//   }

  
// //    console.table(agregarNum(misMascotas));
  
//   console.table(generarId(misMascotas));


  // Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los animalitos son iguales 💘💞

//   function eliminarRaza (arrayMascotas) {
//     for (let i = 0; i < arrayMascotas.length; i++) {
//     arrayMascotas[i] = delete(raza);
//     }
//     return arrayMascotas;
//   }

// console.table(eliminarRaza(misMascotas));
// console.table(misMascotas);



