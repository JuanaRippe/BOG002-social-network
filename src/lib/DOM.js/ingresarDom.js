import { guardarNombres } from '../funcionesPuras.js'

export function domIngresar() {
    const guardarNombre = document.getElementById("botonIngresar");
    guardarNombre.addEventListener("click", function () {
        let nombreIngresado = document.getElementById("nombreIngresado").value;
        guardarNombres(nombreIngresado);
        window.location.hash = "#/home"
    }
    );
}
