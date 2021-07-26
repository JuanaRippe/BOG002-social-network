import { ingresar } from './vistas/ingresar.js';
import { home } from './vistas/home.js';
import { hilo } from './vistas/hilo.js';
import { post } from './vistas/post.js';

let mostrarTemplates = (hash) => {
    let containerRoot = document.getElementById("root");
    containerRoot.innerHTML = "";
    switch (hash){
        case "#/":
        containerRoot.appendChild(ingresar());
        break;
        case "#/home":
        containerRoot.appendChild(home());
        break;
        case "#/hilo":
        containerRoot.appendChild(hilo());
        break;
        case "#/post":
        containerRoot.appendChild(post());
        break;
        default:
        containerRoot.innerHTML = "No existe :("
    }
}

export const enrrutamiento = (hash) => {
     if (hash === "#/"){
         return  mostrarTemplates(hash);
     }else if(hash === "#/home"){
         return mostrarTemplates (hash);
     }else if(hash === "#/hilo"){
         return mostrarTemplates(hash);
     }else if(hash === "#/post"){
         return mostrarTemplates(hash);
     }else{
         return mostrarTemplates(hash);
     }
}