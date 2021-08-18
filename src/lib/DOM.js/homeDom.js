import { obtenerPublicacion } from '../funcionesPuras.js'

export function domHome() {
    const publicacionesGuardadas = obtenerPublicacion();
    //console.log(publicacionesGuardadas);

        for(let i=0; i<publicacionesGuardadas.length; i++){
           // console.log(publicacionesGuardadas[i].publicacion);

         let tarjetaPost = document.createElement("div");
        tarjetaPost.setAttribute("id", "post"); 
        
 
         let nombreUsario = document.createElement("h3");
         nombreUsario.textContent = publicacionesGuardadas[i].nombre;
         tarjetaPost.appendChild(nombreUsario);
 
         let texto = document.createElement("p");
         texto.textContent = publicacionesGuardadas[i].publicacion;
         tarjetaPost.appendChild(texto);
         
         let botonEliminar = document.createElement("button");
         botonEliminar.textContent = "eliminar";
         botonEliminar.setAttribute("id", "btnEliminar");
         tarjetaPost.appendChild(botonEliminar);

        document.getElementById("divPublicaciones").appendChild(tarjetaPost);
        }

        //Eliminar la publicación 
    const eliminarPublicacion = document.getElementById("btnEliminar");
    eliminarPublicacion.addEventListener("click", eliminar);

     function eliminar() {
       if (e.target.id = "post")
         var elementoHijo = document.getElementById("post");
         var elementoPadre = elementoHijo.parentNode;
         elementoPadre.removeChild(elementoHijo);
         
    }

}