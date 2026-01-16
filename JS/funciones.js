function mostrarMensaje(event) {
    event.preventDefault(); // evita que el link recargue

    const mensaje = document.getElementById("mensaje-superior");

    mensaje.classList.add("activo");

    setTimeout(() => {
        mensaje.classList.remove("activo");
    }, 3000);
}

/* FUNCIONES QUE YA TENÍAS */
function suma() {
    let resultado = 24 + 13;
    alert("Resultado de la suma es: " + resultado);
}

function resta() {
    let resultado = 24 - 13;
    alert("Resultado de la resta es: " + resultado);
}

function mul() {
    let resultado = 5 * 10;
    alert("Resultado de la multiplicación es: " + resultado);
}

function div() {
    let resultado = 24 / 12;
    alert("Resultado de la división es: " + resultado);
}
