
// Se obtiene la colección de botones y se crea un arreglo con ellas.
const botones = document.querySelectorAll("button");

// Con este ciclo, se le agrega a cada boton el capturador de eventos para revisar que se esté haciendo click
for (let i = 0; i < botones.length; i++){

    botones[i].addEventListener("click", function(){
        // Cuando se hace click en un botón, simplemente cambia el color de la caja por el color del boton
        caja.style.backgroundColor = botones[i].style.backgroundColor;
        //y como un extera, escribe el código rgb del color dentro de la caja
        document.getElementById("colorCaja").innerHTML = `El color seleccionado es ${botones[i].style.backgroundColor}`
    })
}