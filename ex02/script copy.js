const numerosAleatorios = [];
const tamanho = 7;

// Preenchendo o vetor usando Math.random() e indexação manual
for (let i = 0; i < tamanho; i++) {
    // Gera um número aleatório entre 1 e 100
    numerosAleatorios[i] = Math.floor(Math.random() * 100) + 1;
}

// Exibindo os valores gerados
console.log("Valores gerados aleatoriamente:");
for (let i = 0; i < tamanho; i++) {
    console.log(`Posição [${i}]: ${numerosAleatorios[i]}`);
}