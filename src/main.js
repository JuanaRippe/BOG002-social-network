// Este es el punto de entrada de tu aplicacion

import { enrrutamiento } from './lib/router.js';


const inicializar = () => {
    enrrutamiento(window.location.hash);
    window.addEventListener("hashchange", () => {
        enrrutamiento(window.location.hash);
    })
};
window.addEventListener("load", inicializar);


