const listaDeCompras = {
    "Frutas": [],
    "Lácteos": [],
    "Congelados": [],
    "Dulces": [],
    "Higiene": [],
    "Carnes": []
};

let agregarMas = true;

while (agregarMas) {
    let respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no)");

    if (respuesta.toLowerCase() !== 'sí' && respuesta.toLowerCase() !== 'si') {
        agregarMas = false;
    } else {
        const item = prompt("¿Qué alimento deseas agregar?");
        const categoria = prompt("¿En qué categoría se encaja? (Frutas, Lácteos, Congelados, Dulces, Higiene, Carnes)");

        const categoriaCapitalizada = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

        if (listaDeCompras.hasOwnProperty(categoriaCapitalizada)) {
             listaDeCompras[categoriaCapitalizada].push(item);
        } else {
             alert("Categoría no válida. Por favor, elige una de las opciones sugeridas.");
        }
    }
}

let mensajeFinal = "🛒 **Lista de compras:**\n\n";

for (const categoria in listaDeCompras) {
    mensajeFinal += `**${categoria}:** `;
    if (listaDeCompras[categoria].length > 0) {
        mensajeFinal += listaDeCompras[categoria].join(', ');
    } else {
        mensajeFinal += `*(vacío)*`;
    }
    mensajeFinal += "\n";
}
console.log(mensajeFinal);
alert(mensajeFinal);