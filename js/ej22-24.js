import { colormensaje } from './ej22.js';
document.addEventListener("DOMContentLoaded" , () =>{
    const input=document.querySelector("#mensaje");
    input.addEventListener("input", colormensaje);
})