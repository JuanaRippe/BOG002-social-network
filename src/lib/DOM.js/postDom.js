import { obtenerNombres, guardarPublicacion, agregarPost } from '../funcionesPuras.js'

export function domPost() {
    //Obtengo el nombre para poder usarlo también en distintas vistas 
    const nombresObtenidos = obtenerNombres();
   let mostrarnombres = document.getElementById("nombreObtenido");
   mostrarnombres.innerHTML = "Hola " + nombresObtenidos;

   //Guardo la publicación con el click y redireccionó a el home 
   const guardarPublicaciones = document.getElementById("publicar");
    guardarPublicaciones.addEventListener("click", function() {
        let guardarPost = document.getElementById("publicacion").value;
        const postAgregado = agregarPost(nombresObtenidos, guardarPost, this.id);
        
        guardarPublicacion(postAgregado);
         window.location.hash = "#/home"
    });

}
