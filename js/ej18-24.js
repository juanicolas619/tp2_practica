import { cambio } from './ej18.js';
document.addEventListener ("DOMContentLoaded", () => {
    const boton = document.getElementById("botones");
    boton.addEventListener("click", cambio);
})
cambio();

