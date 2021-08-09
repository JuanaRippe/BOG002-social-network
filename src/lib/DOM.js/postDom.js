import { obtenerNombres, guardarPublicacion, agregarPost } from '../funcionesPuras.js'

export function domPost() {
    const nombresObtenidos = obtenerNombres();
   let mostrarnombres = document.getElementById("nombreObtenido");
   mostrarnombres.innerHTML = "Hola " + nombresObtenidos;

   const guardarPublicaciones = document.getElementById("publicar");
    guardarPublicaciones.addEventListener("click", function () {
        let guardarPost = document.getElementById("publicacion").value;
        const postAgregado = agregarPost(nombresObtenidos, guardarPost);
        guardarPublicacion(postAgregado);
         window.location.hash = "#/home"
    }
    );

}
