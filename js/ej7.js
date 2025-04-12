function largo(){
    let mayor=0;
    let nombre = ["nico" , "yoyi" , "fabri" , "sebastian" , "hernan" , "cami"];
    nombre.forEach((f)=>{
        if(f.length > mayor){
            mayor = f.length;
        }
    });
    nombre.forEach((f)=>{
        if(f.length === mayor){
            console.log("El nombre mas largo es " , f);
        }
    });
}
largo();