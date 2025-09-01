let area = prompt("¿Quieres ir por Front-End o Back-End?");
area = area ? area.trim().toLowerCase() : "";

if (area !== "front-end" && area !== "frontend" && area !== "back-end" && area !== "backend") {
  alert("Respuesta inválida. Reinicia el juego y elige correctamente.");
} else {
  let tecnologia = "";

  if (area.includes("front")) {
    tecnologia = prompt("Estás en Front-End. ¿Quieres aprender React o Vue?");
    tecnologia = tecnologia ? tecnologia.trim().toLowerCase() : "";

    if (tecnologia !== "react" && tecnologia !== "vue") {
      alert("Respuesta inválida. Reinicia el juego.");
    } else {
      alert(`¡Genial! Aprenderás ${tecnologia.toUpperCase()} para el desarrollo Front-End.`);
    }
  } else {
    tecnologia = prompt("Estás en Back-End. ¿Quieres aprender C# o Java?");
    tecnologia = tecnologia ? tecnologia.trim().toLowerCase() : "";

    if (tecnologia !== "c#" && tecnologia !== "csharp" && tecnologia !== "java") {
      alert("Respuesta inválida. Reinicia el juego.");
    } else {
      alert(`¡Perfecto! Aprenderás ${tecnologia.toUpperCase()} para el desarrollo Back-End.`);
    }
  }

  let camino = prompt("¿Quieres especializarte en tu área o convertirte en Fullstack?");
  camino = camino ? camino.trim().toLowerCase() : "";

  if (camino.includes("full")) {
    alert("¡Excelente! Serás Fullstack, dominarás Front-End y Back-End.");
  } else {
    alert(`Te enfocarás en ${area.includes("front") ? "Front-End" : "Back-End"}. ¡A dominar tu área! 🚀`);

  let tecnologiasExtra = [];
  let seguir = "ok";

  while (seguir.toLowerCase() === "ok") {
    let tech = prompt("¿Qué otra tecnología te gustaría aprender?");
    if (tech && tech.trim() !== "") {
      tecnologiasExtra.push(tech);
      alert(`¡Buena elección! ${tech} te servirá bastante.`);
    }

    seguir = prompt('¿Hay alguna otra tecnología que te gustaría aprender? Escribe "ok" para continuar o cualquier otra cosa para salir.');
    if (!seguir) break;
  }

  console.log("=== RESUMEN DE TU RUTA ===");
  console.log(`Área elegida: ${area}`);
  console.log(`Primera tecnología: ${tecnologia}`);
  console.log(`Camino: ${camino}`);
  console.log(`Tecnologías extra: ${tecnologiasExtra.length > 0 ? tecnologiasExtra.join(", ") : "Ninguna"}`);
  alert("¡Gracias por jugar! Revisa la consola para ver tu resumen final.");
}
