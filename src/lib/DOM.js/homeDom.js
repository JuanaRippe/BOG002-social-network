import { obtenerPublicacion, guardarPublicacion } from '../funcionesPuras.js'


export function domHome() {
  //Publicaciones
  const publicacionesGuardadas = obtenerPublicacion();
  // console.log(publicacionesGuardadas);

//Hacer un contenedor por cada publicación, con su respectiva información 
function crearPost(publicacionesGuardadas){
  for (let i = 0; i < publicacionesGuardadas.length; i++) {

    let tarjetaPost = document.createElement("div");
    tarjetaPost.setAttribute("id", [i]);

    let nombreUsario = document.createElement("h3");
    nombreUsario.textContent = publicacionesGuardadas[i].nombre;
    tarjetaPost.appendChild(nombreUsario);

    let texto = document.createElement("p");
    // texto.type = 'text';
    texto.setAttribute("id", "parrafo" + [i]);
    texto.textContent = publicacionesGuardadas[i].publicacion;
    tarjetaPost.appendChild(texto);

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "eliminar";
    botonEliminar.className = "btnEliminar";
    botonEliminar.setAttribute("id", [i]);
    tarjetaPost.appendChild(botonEliminar);
    
    let botonEditar = document.createElement("button");
    botonEditar.textContent = "editar";
    botonEditar.className = "btnEditar";
    tarjetaPost.appendChild(botonEditar);
  

    document.getElementById("divPublicaciones").appendChild(tarjetaPost);
  }
};
 crearPost(publicacionesGuardadas);

  //Eliminar la publicación 
  const eliminarPublicaciones = document.getElementsByClassName("btnEliminar");
  for(let i=0; i<eliminarPublicaciones.length; i++){
    eliminarPublicaciones[i].addEventListener("click", function(e){

     let eliminarP = publicacionesGuardadas.filter( publicacion => publicacion.id != e.target.id)
      // guardarPublicacion(eliminarP);
     
      var nuevoArray = eliminarP.map(function(objeto, index) {
        // console.log(objeto);
        let objetoNuevo = {
          nombre: objeto.nombre,
          publicacion: objeto.publicacion,
          id: index
        };
        return objetoNuevo
      });
      guardarPublicacion(nuevoArray);
      location.reload();

    //   let publicacionesGuardadas2 = obtenerPublicacion();
    // console.log(publicacionesGuardadas2);


    });
  }

  const editarPublicaciones = document.getElementsByClassName("btnEditar");
  for(let i=0; i<editarPublicaciones.length; i++){
    editarPublicaciones[i].addEventListener("click", function(){
      console.log("hice click " + [i]);
      let postEditar = document.getElementById("parrafo " + [i]);
      
      // console.log(postEditar);
    });
  }

}