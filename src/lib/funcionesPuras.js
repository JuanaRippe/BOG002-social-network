// aqui exportaras las funciones que necesites

export const guardarNombres = (nombreIngresado) => {
  localStorage.setItem("nombre de usuario", nombreIngresado);
  };
export const obtenerNombres = () => {
  let obteniendoNombres = localStorage.getItem("nombre de usuario");
  //console.log(obteniendoNombres);
  return obteniendoNombres;
}

export const guardarPublicacion = (publicacion) => {
  localStorage.setItem("publicación", publicacion);
};

export const obtenerPublicacion = () => {
  let obtenerPost = localStorage.getItem("publicación");
  return obtenerPost;
}