import { obtenerPublicacion } from '../funcionesPuras.js'

export function domHome() {
    const publicacionesGuardadas = JSON.parse(obtenerPublicacion());
   // console.log(publicacionesGuardadas);

        for(let i=0; i<publicacionesGuardadas.length; i++){
           // console.log(publicacionesGuardadas[i].publicacion);

         let tarjetaPost = document.createElement("div");
        tarjetaPost.setAttribute("id", "tarjeta");
 
         let nombreUsario = document.createElement("h3");
         nombreUsario.textContent = publicacionesGuardadas[i].nombre;
         tarjetaPost.appendChild(nombreUsario);
 
         let texto = document.createElement("p");
         texto.textContent = publicacionesGuardadas[i].publicacion;
         tarjetaPost.appendChild(texto);

        document.getElementById("divPublicaciones").appendChild(tarjetaPost);
        }
       
}