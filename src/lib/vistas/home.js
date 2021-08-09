export const home = () => {
    let contenedor = document.createElement("div");

    let contenido = `
    <header>TITULO</header>
    <main>
     <div id="divPublicaciones">
     <!-- Este es un <a href="#/hilo">hilo</a> -->
     </div>
     <button>
      <a href="#/post">+</a>
     </button>
    </main>
    `
    contenedor.innerHTML = contenido

    return contenedor;
}


