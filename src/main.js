// Este es el punto de entrada de tu aplicacion

import { enrrutamiento } from './lib/router.js';
import { ingresar } from './lib/vistas/ingresar.js';

const inicializar = () => {
    let contenedor = document.getElementById("root")
    contenedor.appendChild(ingresar());
    window.addEventListener("hashchange", () => {
        enrrutamiento(window.location.hash);
    })
};
window.addEventListener("load", inicializar);


const guardar = () => {
    console.log("hice click");
    let nombreIngresado = document.getElementById("nombreIngresado").value;
    localStorage.setItem("nombre de usuario", nombreIngresado);
    window.location.hash = "#/home"
    };

    const guargarNombre = document.getElementById("botonIngresar");
    guargarNombre.addEventListener("click", guardar());


