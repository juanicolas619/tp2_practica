import { nuevopais } from './ej20.js';
document.addEventListener("DOMContentLoaded" , () =>{
    const boton=document.querySelector("#pais");
    boton.addEventListener("change", nuevopais);
})