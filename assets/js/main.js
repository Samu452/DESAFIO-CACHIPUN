const cuantasVeces = +prompt("¿Cuantas veces quieres jugar?");

if (isNaN(cuantasVeces)) {
  alert("No es un número, por favor ingresa un número");
} else {
  for (let i = 0; i < cuantasVeces; i++) {
    let jsUser;

    do {
      jsUser = prompt(
        "Elige tu jugada (piedra, papel o tijera):"
      ).toLowerCase();

      if (jsUser !== "piedra" && jsUser !== "papel" && jsUser !== "tijera") {
        alert("Por favor, ingresa una opción válida (piedra, papel o tijera).");
      }
    } while (jsUser !== "piedra" && jsUser !== "papel" && jsUser !== "tijera");

    const pcOpc = ["piedra", "papel", "tijera"];
    const jsPc = pcOpc[Math.floor(Math.random() * pcOpc.length)];

    console.log("Tu jugada:", jsUser);
    console.log("Jugada de la computadora:", jsPc);

    if (jsUser === jsPc) {
      console.log("Empate");
    } else if (
      (jsUser === "piedra" && jsPc === "tijera") || (jsUser === "papel" && jsPc === "piedra") || (jsUser === "tijera" && jsPc === "papel")
    ) {
      console.log("¡Ganaste!");
    } else {
      console.log("Perdiste!");
    }
  }
}
