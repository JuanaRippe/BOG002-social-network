export const post = () => {
    let contenedor = document.createElement("div");

    let contenido = `
    <main>
     <div>
      <h3>Nombre de usuario</h3>
      <input type="text" name="" id="">
     </div>
     <button>
      <a href="#/post">publicar</a>
     </button>
    </main>
    `
    contenedor.innerHTML = contenido;
    return contenedor;
}