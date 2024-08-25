
const btnEncriptar = document.querySelector(".btn-encriptar");
const text = document.querySelector(".encriptar");
const alerta = document.querySelector(".texto-alerta");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedor-salida");
const btnCopiar = document.querySelector(".btn-copiar");


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


// Función para validar el texto ingresado
function validarTexto(texto) {
    if (texto === "") {
        return "No se encontró ningún texto";
    }
    if (/[A-Z]/.test(texto)) {
        return "No debe usar letras Mayúsculas";
    }
    if (/[^a-z\s]/.test(texto)) {
        return "No deben ser utilizados letras con acentos ni caracteres especiales";
    }
    return "valido";
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Evento para encriptar el texto
btnEncriptar.addEventListener("click", function () {
    const texto = text.value;
    const validacion = validarTexto(texto);

    if (validacion === "valido") {
        const textoEncriptado = encriptarTexto(texto);
        respuesta.value = textoEncriptado;
        contenido.style.display = "none"; // Oculta el contenido
        btnCopiar.style.visibility = "inherit"; // Muestra el botón de copiar
    } else {
        alerta.textContent = validacion; // Muestra la alerta correspondiente
    }
});

// Evento para desencriptar el texto
btnDesencriptar.addEventListener("click", function () {
    const texto = text.value;
    const validacion = validarTexto(texto);

    if (validacion === "valido") {
        const textoDesencriptado = desencriptarTexto(texto);
        respuesta.value = textoDesencriptado;
        contenido.style.display = "none"; // Oculta el contenido
        btnCopiar.style.visibility = "inherit"; // Muestra el botón de copiar
    } else {
        alerta.textContent = validacion; // Muestra la alerta correspondiente
    }
});

// Evento para copiar el texto encriptado
btnCopiar.addEventListener("click", function () {
    respuesta.select();
    document.execCommand("copy");
    alerta.textContent = "Texto copiado al portapapeles";
});

