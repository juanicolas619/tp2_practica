export function colormensaje(){
    const mensaje = document.querySelector("#mensaje").value;
    const salida = document.querySelector("#salida");
    salida.textContent = mensaje;
    if (mensaje.length>20){
        salida.style.backgroundColor="red";
    }else{
        salida.style.backgroundColor="transparent"
    }
}