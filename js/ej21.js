export function nuevomensaje(){
    const mensaje = document.querySelector("#mensaje").value;
    const salida = document.querySelector("#salida");
    salida.textContent = mensaje;
}
