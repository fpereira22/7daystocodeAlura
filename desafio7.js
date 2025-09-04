function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre 0 ";
  }
  return a / b;
}

function calculadora() {
  let opcion = "";

  while (opcion !== "5") {
    opcion = prompt(
      "=== Calculadora Pro de Pipeño ===\n\n" +
      "Elige una opción:\n" +
      "1. Sumar \n" +
      "2. Restar \n" +
      "3. Multiplicar \n" +
      "4. Dividir \n" +
      "5. Salir 🚪"
    );

    if (opcion === "5") {
      alert("Hasta la próxima 👋");
      break;
    }

    if (["1", "2", "3", "4"].includes(opcion)) {

      let num1 = parseFloat(prompt("Ingresa el primer número:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número:"));

      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa valores numéricos válidos ");
        continue;
      }

      let resultado;

      switch (opcion) {
        case "1":
          resultado = sumar(num1, num2);
          break;
        case "2":
          resultado = restar(num1, num2);
          break;
        case "3":
          resultado = multiplicar(num1, num2);
          break;
        case "4":
          resultado = dividir(num1, num2);
          break;
      }

      alert(`El resultado es: ${resultado}`);
    } else {
      alert("Opción inválida, intenta de nuevo");
    }
  }
}

calculadora();
