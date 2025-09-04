let listaCompras = [];
let opcion = "";

while (opcion !== "3") {
  opcion = prompt(
    `Lista de compras actual: [${listaCompras.join(", ")}]\n\n` +
    "Elige una opción:\n" +
    "1. Agregar un alimento\n" +
    (listaCompras.length > 0 ? "2. Eliminar un alimento\n" : "") +
    "3. Salir 🚪"
  );

  if (opcion === "1") {
    let nuevoAlimento = prompt("Ingresa el alimento que deseas agregar:");
    if (nuevoAlimento) {
      listaCompras.push(nuevoAlimento.trim());
      alert(`${nuevoAlimento} fue agregado a la lista`);
    } else {
      alert("No ingresaste ningún alimento");
    }
  }

  else if (opcion === "2" && listaCompras.length > 0) {
    let eliminarAlimento = prompt(
      `Tu lista actual: [${listaCompras.join(", ")}]\n\n` +
      "Escribe el nombre exacto del alimento que deseas eliminar:"
    );
    let index = listaCompras.indexOf(eliminarAlimento);

    if (index !== -1) {
      listaCompras.splice(index, 1);
      alert(`${eliminarAlimento} fue eliminado de la lista`);
    } else {
      alert("¡No fue posible encontrar el elemento en la lista!");
    }
  }

  else if (opcion === "3") {
    alert("Saliendo del programa. ¡Hasta la próxima!");
  }

  else {
    alert("Opción inválida. Intenta nuevamente");
  }
}
