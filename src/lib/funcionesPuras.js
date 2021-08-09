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
export const agregarPost = (nombreIngresado, textoPost) => {
  let nuevoPost = {
    nombre: nombreIngresado,
    publicacion: textoPost
  };
  arrayPublicaciones.push(nuevoPost);
  //console.log(arrayPublicaciones);
  return arrayPublicaciones;
}

export const guardarPublicacion = (publicacion) => {
  localStorage.setItem("publicación", JSON.stringify(publicacion));
};

export const obtenerPublicacion = () => {
  let obtenerPost = localStorage.getItem("publicación");
  return obtenerPost;
}