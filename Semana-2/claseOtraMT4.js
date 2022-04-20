// let nombre = "Jesica";
// let edad = 29;
// let fechaNac = "18/02/1993";
// let ciudad = "Tartagal";
// let profesion = "Ingeniera en Perforación";
// let hobbie = "ir al gimnasio"

// console.log("Me llamo " + nombre + ", " + "tengo " + edad + " " + "años" + ". " + "Nací el"+ " " + fechaNac + ". Vivo en la ciudad de " + ciudad + ". Soy " + profesion + " " + "y mi hobbie es "+ hobbie + ".");



const prompt=require("prompt-sync")();

// let nombreIngresado = prompt("Ingrese su nombre: ");
// let edadIngresada = Number(prompt("Ingrese su edad: "));
// let fechaNacIngresada = prompt("Ingrese su fecha de nacimiento (dd/mm/aaaa): ");
// let ciudadIngresada = prompt("Ingrese su ciudad: ");
// let profesionIngresada = prompt("Ingrese su profesión: ");
// let hobbieIngresado = prompt("Ingrese su hobbie: ");

// console.log("Me llamo " + nombreIngresado + ", " + "tengo " + edadIngresada + " " + "años" + ". " + "Nací el"+ " " + fechaNacIngresada + ". Vivo en la ciudad de " + ciudadIngresada + ". Soy " + profesionIngresada + " " + "y mi hobbie es "+ hobbieIngresado + ".");


// // Calcular dias de vida
// let tuEdad = Number(prompt("¿Cuál es tu edad? "));
// let diasVida = tuEdad * 365
// console.log(diasVida)


//// Abastecimiento de por vida
// parte I COMIDA CHATARRA

// let edad = 29;
// let edadMax = 90;
// let snack = "papas fritas";
// let snackxDia = 2;

// let calculo = snackxDia * 365 * (edadMax - edad)
// console.log("Vas a necesitar " + calculo + " " + "platos de " + snack + " " + "para que te alcancen hasta los " + edadMax + " " + "años.")

// // parte II VIAJE
// let cantDiasViaje = 15;
// let presupuesto = 70000;
// let totalComidas = 45;

// let presupuestoxComida = presupuesto / totalComidas
// console.log("Podes gastar " + presupuestoxComida + " " + "en cada comida para que te alcance la plata durante los " + cantDiasViaje + " " + "días de viaje.")


// parte III que el usuario ingrese los valores

// let edadIngresada = Number(prompt("¿Cuál es su edad actual?"));
// let edadMaxIngresada = Number(prompt("¿Cuántos años cree que vivirá?"));
// let snackIngresado = prompt("¿Cuál es su snack favorito?");
// let snackxDiaIngresado = Number(prompt("¿Cuántos platos/paquetes de snack estima que puede comer por día?"))

// let calculoUsuario = snackxDiaIngresado * 365 * (edadMaxIngresada - edadIngresada)
// console.log("Vas a necesitar " + calculoUsuario + " " + "platos de " + snackIngresado + " " + "para que te alcancen hasta los " + edadMaxIngresada + " " + "años.")

let cantDiasViajeIng = Number(prompt("¿Cuántos días estará de viaje?"));
let presupuestoIng = Number(prompt("¿Cuál es su presupuesto total para comida?"));
let comidasxDia = Number(prompt("¿Cuántas comidas consume al día?"))

let presupuestoxComidaUsuario = presupuestoIng / (comidasxDia * cantDiasViajeIng)
console.log("Podes gastar " + presupuestoxComidaUsuario + " " + "en cada comida para que te alcance la plata durante los " + cantDiasViajeIng + " " + "días de viaje.")