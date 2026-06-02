const original = [5, 3, 5, 8, 3, 9, 1, 8, 2, 5]; // 10 números com duplicatas
const semDuplicatas = [];
let indexSemDuplicatas = 0;

for (let i = 0; i < 10; i++) {
    let jaExiste = false;

    // Varredura interna manual para verificar se o elemento já foi adicionado
    for (let j = 0; j < indexSemDuplicatas; j++) {
        if (original[i] === semDuplicatas[j]) {
            jaExiste = true;
            break; // Se achou, interrompe o laço interno
        }
    }

    // Se o número não existe no novo vetor, adiciona manualmente
    if (!jaExiste) {
        semDuplicatas[indexSemDuplicatas] = original[i];
        indexSemDuplicatas++;
    }
}

console.log("Vetor Original:", original);
console.log("Vetor sem Duplicatas:", semDuplicatas);