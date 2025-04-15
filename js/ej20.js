export function nuevopais(){
    const pais=document.querySelector("#pais").value;
    const capsel=document.querySelector("#capital");
    let capital="";
    switch(pais){
        case "argentina": capital="Buenos Aires";break;
        case "brasil": capital="Brasilia";break;
        case "chile": capital="Santiago";break;
        case "uruguay": capital="Montevideo";break;
        case "peru": capital="Lima";break;
        case "ecuador": capital="Quito";break;
        default: capital="";
    }
    capsel.innerHTML="";
    const opcion=document.createElement("option");
    opcion.value=capital.toLowerCase().replace(" ","_");
    opcion.textContent=capital;
    capsel.appendChild(opcion);
    console.log("Pais seleccionado: " + pais + " Capital: " + capital);
}