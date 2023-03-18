function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    const resultado = document.getElementById("resultado");

    if (imc < 18.5) { 
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ",  Abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ",  Peso normal.";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ",  Sobrepeso.";
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ",  Obesidade grau 1.";
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ",  Obesidade grau 2.";
    } else {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ",  Obesidade grau 3.";
    }
}
