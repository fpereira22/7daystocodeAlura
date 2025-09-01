// Versión definida
let numeroSecreto = 7;
let intentos = 3;
let acierto = false;

alert("Bienvenido al juego de Adivina el Número");

while (intentos > 0) {
  let intentoUsuario = parseInt(prompt(`Tienes ${intentos} intento(s). Ingresa tu número:`));

  if (intentoUsuario === numeroSecreto) {
    alert("¡Felicitaciones! Has acertado el número correcto");
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
