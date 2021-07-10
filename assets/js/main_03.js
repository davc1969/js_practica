// Primero, validaremos la entrada, admitiendo solo números
//podemos hacerlo con regexp
const validacionNumeros = /^-?[0-9.]+$/
const numeroValido = (x) => { return validacionNumeros.test(x) };



const operar = (tipo) => {
    // Validamos que las entradas en las cajas de texto sean números
    // Si ambos son números, la union de ambas evaluaciones será verdadera
    let valido = numeroValido(document.getElementById("valor1").value) &&
                 numeroValido(document.getElementById("valor1").value);

    // Si son números se procede a hacer los cálculos
    if (valido) {
        
        // Obtenermos los valores de cada caja de texto y el objeto donde escribiremos el resultado
        const v1 = document.getElementById("valor1").value * 1;
        const v2 = document.getElementById("valor2").value * 1;
        const lbl_resultado = document.getElementsByClassName("resultado")[0];

        // El llamado a esta función se hizo con la opcion "onclick" dentro del objeto button, poniendo un parámetro numérico
        // Si ese parámetro (argumento tipo de esta función) es cero (0), es suma, si es uno (1), es resta
        if (tipo == 0){
            // Se escribe el resultado de la suma
            lbl_resultado.innerHTML = (v1 + v2);
        } else {
            // Se escribe el mayor número entre el 0 y la resta de v1 - v1.  Esto pone cero en el caso que el resultado sea negativo
            lbl_resultado.innerHTML = Math.max(v1 - v2, 0)
        }
    } else {
        // Si las entradas no son válidas, se le indica al usuario que las revise
        alert("Ingrese números solamente, no deje las cajas en blanco")
    }
    return
}