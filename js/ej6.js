function promedio(){
    let edades = [4 , 15 , 22 , 34 , 16 , 50 , 38 , 20];
    let suma = 0;
    edades.forEach((f)=>{
        console.log("edades ", f);
        suma=suma+f;
    });
    let prom = (suma/edades.length);
    console.log("el promedio de edades es: ", prom);
}
promedio();