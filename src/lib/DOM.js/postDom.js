import { obtenerNombres } from '../funcionesPuras.js'
import { guardarPublicacion } from '../funcionesPuras.js'

export function domPost() {
   let mostrarnombres = document.getElementById("nombreObtenido");
   mostrarnombres.innerHTML = "Hola " + obtenerNombres();

   const guardarPost = document.getElementById("publicar");
    guardarPost.addEventListener("click", function () {
        let guardarPost = document.getElementById("publicacion").value;
        console.log(guardarPost);
        guardarPublicacion(guardarPost);
       // window.location.hash =  "#/home";
    }
    );
}