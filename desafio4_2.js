let numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intentos = 3;
let acierto = false;

alert("Bienvenido al juego de Adivina el Número");

while (intentos > 0) {
  let intentoUsuario = parseInt(prompt(`Tienes ${intentos} intento(s). Ingresa tu número:`));

  if (intentoUsuario === numeroSecreto) {
    alert("¡Felicitaciones! Adivinaste el número correcto");
    acierto = true;
    break;
  } else {
    alert("Número incorrecto. Intenta de nuevo.");
    intentos--;
  }
}

if (!acierto) {
  alert(`Lo siento, perdiste. El número secreto era: ${numeroSecreto}`);
}
