function calcularMayor(){
    let numero1=15;
    let numero2=9;
    if(numero1>numero2){
        alert("numero mayor: "+ numero1);
    }
    else if (numero2 > numero1){
        alert("numero mayor: "+ numero2);
    }
    else{
        alert("los 2 numeros son iguales "+numero1 + " " + numero2);
    }
}
calcularMayor();