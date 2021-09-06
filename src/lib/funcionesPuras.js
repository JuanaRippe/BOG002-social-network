// aqui exportaras las funciones que necesites

export const guardarNombres = (nombreIngresado) => {
  localStorage.setItem("nombre de usuario", nombreIngresado);
};

export const obtenerNombres = () => {
  let obteniendoNombres = localStorage.getItem("nombre de usuario");
  //console.log(obteniendoNombres);
  return obteniendoNombres;
}

let arrayPublicaciones = [];
export const agregarPost = (nombreIngresado, textoPost, id) => {
  let nuevoPost = {
    nombre: nombreIngresado,
    publicacion: textoPost,
    id: arrayPublicaciones.length
  };

  arrayPublicaciones.push(nuevoPost);
  // console.log(arrayPublicaciones);

  // console.log(nuevoPost.id);
  // if (nuevoPost.id === arrayPublicaciones[arrayPublicaciones.length-1].id){
  //   let nuevoID = nuevoPost.id
  //   nuevoID = arrayPublicaciones[arrayPublicaciones.length-1].id + 1;
  //   return nuevoID
  // }

  return arrayPublicaciones;
}

export const guardarPublicacion = (publicacion) => {
  localStorage.setItem("publicación", JSON.stringify(publicacion));
};

export const obtenerPublicacion = () => {
  arrayPublicaciones = JSON.parse(localStorage.getItem("publicación")) || [];
 // console.log(JSON.parse(obtenerPost));
  return arrayPublicaciones;
}