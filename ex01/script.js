// Vetor para armazenar 10 números inteiros
const numeros = [5, 12, 3, 8, 21, 14, 7, 6, 10, 11]; // Simulação de leitura de 10 números
let somaPares = 0;

// Percorrendo o vetor manualmente
for (let i = 0; i < 10; i++) {
    // Verifica se o número é par
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

console.log("Vetor analisado:", numeros);
console.log("A soma dos números pares é:", somaPares);