// Exemplo de condicionais (if-else)
var idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Na primeira parte, temos um exemplo de condicional. Verificamos se a variável idade é maior ou igual a 18. Se for verdadeiro, exibimos a mensagem "Você é maior de idade." no console. Caso contrário, exibimos a mensagem "Você é menor de idade."


if (idade > 15 && idade < 18 || idade > 70) {
	console.log("O voto é opcional")
}else if (idade < 16) {
	console.log("Você não pode votar");
}else {
	console.log("Você é obrigado a votar");
}


// Swith Case é uma instrução que se comporta de forma semelhante ao if / else, porém possui uma estrutura mais organizada e de fácil compreensão. Lembrando que só é aceito valores pré-definidos e não expressões condicionais.

let signo = 'Leão';

switch (signo) {
  case 'Áries':
    console.log("De 21 março a 20 abril");
    break;
	case 'Touro':
    console.log("de 21 abril a 20 maio");
    break;
  case 'Gêmeos':
    console.log("de 21 maio a 20 junho");
    break;
  case 'Câncer':
    console.log("de 21 junho a 22 julho");
    break;
  case 'Leão':
    console.log("de 23 julho a 22 agosto");
    break;
  case 'Virgem':
    console.log("de 23 agosto a 22 setembro");
    break;
  default:
  	console.log("Signo não registrado");
    break;
}



// Exemplo de loop (for)
console.log("Contagem regressiva:");
for (var i = 10; i >= 0; i--) {
  console.log(i);
}

// Na segunda parte, usamos um loop for para fazer uma contagem regressiva de 10 até 0. A cada iteração, exibimos o valor de i no console.

// Exemplo de loop (while)
var contador = 0;
console.log("Contagem crescente:");
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Na terceira parte, temos um loop while que faz uma contagem crescente de 0 até 10. Utilizamos uma variável contador para controlar o loop, exibindo seu valor a cada iteração.