export const hilo = () => {
    let contenedor = document.createElement("div");
    
    let contenido = `
    <main>
     <button>
      <a href="#/hilo">Atras</a>
     </button>
     <p>Aquí va un parrafo</p>
    </main>
    `

    contenedor.innerHTML = contenido;

    return contenedor;
}