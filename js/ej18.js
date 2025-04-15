let parrafo1 = "Programacion Visual 2025";
let parrafo2 = "UNJU 2025";
export function cambio(){
    const parrafo = document.getElementById("p1");
    if(parrafo.textContent === parrafo1){
        parrafo.textContent = parrafo2;
    }else{
        parrafo.textContent = parrafo1;
    }
}