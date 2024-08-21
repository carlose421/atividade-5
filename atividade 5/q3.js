function calcularPerimetro(a, b, c) {
    return a + b + c;
}

function calcularArea(b, h) {
    return (b * h) / 2;
}

let ladoA = 5;  
let ladoB = 6;  
let ladoC = 7;  
let alturaH = 4;  

let perimetro = calcularPerimetro(ladoA, ladoB, ladoC);
let area = calcularArea(ladoB, alturaH);

console.log("O perímetro do triângulo é: " + perimetro);
console.log("A área do triângulo é: " + area);
