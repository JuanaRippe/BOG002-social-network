export const post = () => {
    let contenedor = document.createElement("div");

    let contenido = `
    <main>
     <div>
      <h3 id="nombreObtenido">Nombre de usuario</h3>
      <input type="text" name="" id="publicacion">
     </div>
     <button id="publicar">publicar</button>
    </main>
    `
    contenedor.innerHTML = contenido;
    return contenedor;
}