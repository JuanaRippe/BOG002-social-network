export const home = () => {
    let contenedor = document.createElement("div");

    let contenido = `
    <main>
     <header>TITULO</header>
     <div>Este es un
      <a href="#/hilo">hilo</a>
     </div>
     <button>
      <a href="#/post">+</a>
     </button>
    </main>
    `
    contenedor.innerHTML = contenido

    return contenedor;
}


