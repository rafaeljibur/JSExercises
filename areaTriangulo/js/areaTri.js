function areaTriangulo(){
    /* algoritmi secuancial para calcular el area
        de un trianguo
        version: 2.0
        modificaciones: - entrada de datos via prompt
                        - salida de resultados EN EL PROPIO
                        DOCUMENTO
        */ 
    
    // Entrada de datos
    var base=document.getElementById("base").value;
    var altura=document.getElementById("altura").value;


    // cálculo interno
    area = base * altura / 2;

    // mostrar resultado
    document.getElementById("resultado").innerHTML="El area del Triangulo: "+area+"cm";
}

function mostrarResultado() {
    document.getElementById("resultado").style.display = "block"
}