const numeros = [44, 1, 25, 10, 7];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // reduce() percorre todos os elementos do array.

console.log(soma); // Saída
