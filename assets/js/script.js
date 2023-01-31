// Logica

// Scope es el ambito donde estas trabajando actualmente en el codigo

// Scope global SE USA VAR

// Variable global de encriptador
const letrasNoEncriptadas = ["e", "i", "a", "o", "u"];
const letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];

// Es la misma variable
// const matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];



//  El encriptador es una función que permite encriptar y desencriptar  un determinado texto dado
//  Los parametros que reciben es un mensaje, y luego la forma. Donde "1" es encriptar y "2" es desencriptar
//  Ejemplo: encriptador("hola", 1) retorna hoberlai.
//  Ejemplo: encriptador("hoberlai", 2) retorna hola. 

function encriptador(mensaje, forma) {
    // Se utiliza el toLowerCase para convertir el texto recibido en minusculas, para su encriptacion.
    mensaje = mensaje.toLowerCase();

    // Se "recorre" o "itera" las listas de las letras del encriptador para encriptar el mensaje recibido

    // Se decide cual es la forma
    // Si es 1, encripta un mensaje

    if (forma == 1) {
        // Scope local - let NO SE USA VAR
        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
            // Se utiliza el mensaje recibido y se cambia las letras con el metodo replaceAll para cambiar las letras desencriptadas a encriptadas
            mensaje = mensaje.replaceAll(letrasNoEncriptadas[i], letrasEncriptadas[i]);
        }
    }

    // Si es 2, desencripta un mensaje
    else if (forma == 2) {
        // Scope local - let NO SE USA VAR
        for (let i = 0; i < letrasNoEncriptadas.length; i++) {
            // Se utiliza el mensaje recibido y se cambia las letras con el metodo replaceAll para cambiar las letras desencriptadas a encriptadas
            mensaje = mensaje.replaceAll(letrasEncriptadas[i], letrasNoEncriptadas[i]);
        }
    }

    // Se retorna el mensaje nuevo
    return mensaje;
}

// DOM
const textoEntrada = document.querySelector("#textoEntrada");
const btnEncriptar = document.querySelector("#btnEncriptar");
const textoSalida = document.querySelector("#textoSalida");
const btnCopiar = document.querySelector("#btnCopiar")
const btnDesencriptar = document.querySelector("#btnDesencriptar")
const seccion2 = document.querySelectorAll(".grid-item-2")

const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const muneco = document.querySelector('#muneco')


// Añadir btn de Encriptador para encriptar
btnEncriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 1);
            textoEntrada.value = "";
            textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);

// Añadir boton para copiar
btnCopiar.addEventListener("click",
    () => {
        mostrarBranding();
        textoEntrada.value = textoSalida.value; // Copiado automatico
        textoSalida.value = ""; // Se limpia el valor del texto
    }
);
// Añadir btn de Encriptador para desencriptar
btnDesencriptar.addEventListener("click",
    () => {
        if (textoEntrada.value !== "") {
            ocultarBranding();
            let mensaje = encriptador(textoEntrada.value, 2);
            textoEntrada.value = "";
            textoSalida.value = mensaje;
        }
        else {
            alert('No puede estar vacio')
        }
    }
);


// Funciones DOM
function ocultarBranding() {
    titulo.classList.add("hide")
    parrafo.classList.add("hide")
    muneco.classList.add("hide")
    textoSalida.classList.remove("hide")
    btnCopiar.classList.remove("hide")
}

function mostrarBranding() {
    titulo.classList.remove("hide")
    parrafo.classList.remove("hide")
    muneco.classList.remove("hide")
    textoSalida.classList.add("hide")
    btnCopiar.classList.add("hide")
}