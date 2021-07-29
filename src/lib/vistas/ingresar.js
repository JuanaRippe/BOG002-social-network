export const ingresar = () => {

    let contenedor = document.createElement("div");
    let contenido = `
   <form action="">
    <label for="">Ingresar nombre:</label>
     <input type="text" id="nombreIngresado">
   </form>
   <button id="botonIngresar">Siguiente</button>
    `
    contenedor.innerHTML = contenido
    return contenedor;
}
