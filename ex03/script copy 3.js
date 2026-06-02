const vetorGeral = [4, 8, 15, 16, 23, 42, 8, 4, 8, 90]; // 10 números armazenados
const numeroBuscado = 8; // Número que o usuário deseja verificar
let contador = 0;

// Varredura manual no vetor para contagem
for (let i = 0; i < 10; i++) {
    if (vetorGeral[i] === numeroBuscado) {
        contador++;
    }
}

console.log("Vetor:", vetorGeral);
console.log(`O número ${numeroBuscado} aparece ${contador} vezes no vetor.`);