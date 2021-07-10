// Expresion regular para validación de entrada de texto solamente
let regexp_texto = /^[A-Zá-ÿ\s]+$/im;

// Función para validar que la entrada cumpla los requisitos solicitados
let validaTexto = (palabra) => { return regexp_texto.test(palabra) }

//Función para validar la entrada, si hay error, escribe mensaje en el  label correspondiente
// retorna 1 si es correcto, 0 si no lo es
let validacion = (texto, etiquetaError, textoError) => {
    if (!validaTexto(texto)){
        document.getElementsByClassName(etiquetaError)[0].innerHTML = `Error, el ${textoError} es requerido`
        return 0
    } else {
        document.getElementsByClassName(etiquetaError)[0].innerHTML ="";
        return 1;
    }
}

// Ahora agregamos el capturador de eventos para los botones
document.getElementById("botton").addEventListener("click", function(event){
    // Se previene el funcionamiento normal del boton
    event.preventDefault();

    //Asignamos cada texto a una variable
    const nombre1 = document.getElementById("nombre").value ;
    const asunto1 = document.getElementById("asunto").value;
    const mensaje1 = document.getElementById("mensaje").value;

    // Sumamos los resultados de validar cada nombre.  Si todos están bien, la suma es igual a 3
    let enviar = validacion(nombre1, "errorNombre", "Nombre") +
                 validacion(asunto1, "errorAsunto", "Asunto") +
                 validacion(mensaje1, "errorMensaje", "Mensaje");

    //Si la suma es 3, todo salió como lo esperado y se escribe el mensaje correspondiente
    if (enviar == 3) {
        document.getElementById("enviadoExito").innerHTML = "Envíado con éxito!"
    }

})

