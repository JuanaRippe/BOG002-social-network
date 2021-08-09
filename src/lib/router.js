import { ingresar } from './vistas/ingresar.js';
import { home } from './vistas/home.js';
import { hilo } from './vistas/hilo.js';
import { post } from './vistas/post.js';
import { domIngresar } from '../lib/DOM.js/ingresarDom.js'
import { domPost } from './DOM.js/postDom.js'
import { domHome } from './DOM.js/homeDom.js'


let mostrarTemplates = (hash) => {
    let containerRoot = document.getElementById("root");
    containerRoot.innerHTML = "";
    switch (hash){
        case "":
        case "#/":
        containerRoot.appendChild(ingresar());
        domIngresar();
        break;
        case "#/home":
        containerRoot.appendChild(home());
        domHome();
        break;
        case "#/hilo":
        containerRoot.appendChild(hilo());
        break;
        case "#/post":
        containerRoot.appendChild(post());
        domPost();
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