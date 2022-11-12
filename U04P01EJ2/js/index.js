var nro;

function init(){

    var procesar = document.getElementById("procesar");

    nro = document.getElementById("nro");


}


function procesarNro(){
    let n = parseFloat(nro.value);
    if(n>0){
        alert("el nro es positivo");
    }else if(n<0){
        alert("el nro es negativo");
    }else{
        alert("el nro es nulo");
    }
}