function calculoNota(){
/* VERSION CON PUNTOS ADICIONALES POR TRABAJOS INDEPENDIENTES
    - PUNTO PORR TRABAJP EN WP Y/O
    - PUNTO POR TRABAJO EN JS
    LA CASILLA CHECKBOX ME PERMITE QUE ESTÑEN MARCADAS, UNA, DOS. O NINGUNA O LAS DOS
*/
// Entrada de datos
let notaWordpress=Number(document.getElementById("wordpress").value);
let notaJS=Number(document.getElementById("js").value);
// cuando cojo el dato de una casilla de verificación
// cojo la casilla entera(no value)
let trabajoWp=document.getElementById("trabajowp");
let trabajoJs=document.getElementById("trabajojs");

// calculo de nota
let notaFinal=(75*notaWordpress+25*notaJS)/100;

// Vamos a ver si hay trabajo adicionales
if (trabajoWp.checked==true){
    notaFinal++;
}
if (trabajoJs.checked==true){
    notaFinal++;
}

// Comprobar que el resultado no es mayor que 10
if (notaFinal>10){
    notaFinal==10;
}

// Salida de resultado

document.getElementById("resultado").innerHTML="La nota final es: "+notaFinal;
if (notaFinal >= 5) {
    // mensaje de aprobado
    document.getElementById("indicacion").innerHTML="¡Has aprobado!"
} else {
    //  mensaje de recuperación
    document.getElementById("indicacion").innerHTML="¡Has suspendido! Tienes que recuperar"
}
}