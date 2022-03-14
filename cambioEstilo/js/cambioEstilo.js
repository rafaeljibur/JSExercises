// Este es el script para cambiar el estilo de la página
function cambiaLetra(tamano){
    let parrafos = document.getElementsByTagName("p");
    for (i=0; i<parrafos.length;i++){
        parrafos[i].style.fontSize=tamano;
    }
}

function cambiarFondo(){
    let fondo = document.getElementsByTagName("body");
}