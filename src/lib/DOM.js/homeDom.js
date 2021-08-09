import { obtenerPublicacion, obtenerNombres } from '../funcionesPuras.js'

export function domHome() {
      
    const publicacionesGuardadas = obtenerPublicacion();
    console.log(publicacionesGuardadas);

        for(let i=0; i<publicacionesGuardadas.length; i++){
            console.log(publicacionesGuardadas[i].nombre);

         let tarjetaPost = document.createElement("div");
         tarjetaPost.id = "publicacion" + [i];
 
         let nombreUsario = document.createElement("h3");
         nombreUsario = obtenerNombres();
         tarjetaPost.appendChild(nombreUsario);
 
         let texto = document.createElement("p");
         texto = guardarPost;
         tarjetaPost.appendChild(texto);
     
 
         docucument.getElementById("divPublicaciones").appendChild(tarjetaPost);
        }
       
}