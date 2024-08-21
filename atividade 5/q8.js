
function inverterNome(nomeCompleto) {
    let partes = nomeCompleto.trim().split(" ");

    if (partes.length > 1) {
        let ultimoNome = partes.pop(); 
        let restoDoNome = partes.join(" "); 
        return `${ultimoNome} ${restoDoNome}`; 
    } else {
        return nomeCompleto;
    }
}

let nomeCompleto = "Carlos Eduardo Sousa Lima";

let nomeInvertido = inverterNome(nomeCompleto);
console.log("Nome invertido: " + nomeInvertido);
