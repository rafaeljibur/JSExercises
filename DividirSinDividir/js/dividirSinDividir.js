function dividirSinDividir(){
    let dividendo = document.getElementById("dividendo").value;

    let divisor = document.getElementById("divisor").value;

    if (dividendo == 0 || divisor == 0) {
        document.getElementById("resultado").innerHTML = "ERROR! Division entre 0";
    }

    let contador = 0;
    let aux = dividendo

    while (aux - divisor >= 0){
        aux = aux - divisor;
        contador = contador + 1;
    }

    document.getElementById("resultado").innerHTML = "El resultado de "+dividendo+" / "+divisor+" es: "+contador;
}