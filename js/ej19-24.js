import { mostrar } from './ej19.js';
document.addEventListener ("DOMContentLoaded", () => {
    const boton = document.querySelector("#enviar");
    boton.addEventListener("click", mostrar);
})