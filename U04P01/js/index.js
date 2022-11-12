var nro1;
var nro2;
var nro3;

function init() {
    var buscaMayor = document.getElementById("busca-mayor");

    nro1 = document.getElementById("nro-1");
    nro2 = document.getElementById("nro-2");
    nro3 = document.getElementById("nro-3");

    buscaMayor.onclick = function(e){
        calcular();
    }
}

function calcular(){
    let rdo;
    let n1 = parseFloat(nro1.value);
    let n2 = parseFloat(nro2.value);
    let n3 = parseFloat(nro3.value);
    if (n1 < n2) {
        if (n2 < n3) {
            rdo =n3;
        } else{
            rdo=n2
        }
    }else{
        if (n1 < n3) {
            rdo=n3;
        }else {
            rdo=n1
        }
    }
    alert(parseFloat(rdo));
}