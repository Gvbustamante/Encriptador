// Función para manejar la copia al portapapeles
async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        alert('No se pudo copiar el texto al portapapeles');
    }
}

// Función para obtener y manipular el valor del texto
function obtenerYManipularTexto(manipulador) {
    const mensajeElement = document.getElementById("mensaje");
    let frase = mensajeElement.value.toLowerCase();
    frase = manipulador(frase);
    document.getElementById("cuadroDeTexto").innerHTML = frase;
    return frase;
}

// Funciones de encriptación y desencriptación
function encriptarTexto() {
    obtenerYManipularTexto(frase => {
        return frase.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
    });
}

function desencriptarTexto() {
    obtenerYManipularTexto(frase => {
        return frase.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
    });
}

// Función para copiar el texto encriptado/desencriptado
function copiarTexto() {
    const texto = document.getElementById("cuadroDeTexto").innerText;
    copiarAlPortapapeles(texto);
}
