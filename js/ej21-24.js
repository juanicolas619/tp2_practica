import { nuevomensaje } from './ej21.js';
document.addEventListener("DOMContentLoaded" , () =>{
    const input=document.querySelector("#mensaje");
    input.addEventListener("input", nuevomensaje);
})