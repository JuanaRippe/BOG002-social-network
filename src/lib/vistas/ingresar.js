export const ingresar = () => {

    let contenedor = document.createElement("div");

    let formulario = document.createElement("form");

    let label = document.createElement("label");
    label.textContent = "Ingresa tu nombre:"
    let input = document.createElement("input");
    input.setAttribute("id", "nombreIngresado");
    label.appendChild(input);

    let boton = document.createElement("button");
    boton.textContent = "Siguiente";
    boton.setAttribute("id", "botonIngresar");

    formulario.appendChild(label);
    formulario.appendChild(boton);
    contenedor.appendChild(formulario);
    
   /* `
   <form action="">
    <label for="">Ingresar nombre:</label>
     <input type="text" id="nombreIngresado">

    <button onclick=${guardar} id="botonIngresar">Siguiente</button>
   </form>
    `*/
    contenedor.appendChild(formulario)
    return contenedor;
}



