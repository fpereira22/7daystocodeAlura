const nombre = prompt("¿Cuál es tu nombre?")
const edad = prompt("¿Cuántos años tienes?")
const lenguaje = prompt("¿Que lenguaje de programación estás aprendiendo?")

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

const gustos = prompt(`Te gustaría estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if(gustos == 1){
    alert('¡Muy Bien! Sigue estudiando y tendrás mucho éxito')
}
else{
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?')
}