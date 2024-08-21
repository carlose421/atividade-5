function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let peso = 70; 
let altura = 1.75;

let imc = calcularIMC(peso, altura);

console.log("IMC" + imc.toFixed(2));