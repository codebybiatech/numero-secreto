alert('Boas vindas ao jogo!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto 
while(chute != numeroSecreto){
    chute = prompt(`ESCOLHAAAAAAAAA um número entre 1 e ${numeroMaximo}!`);

    if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
        alert(`Voce errou! O número secreto é menor que ${chute}!`);
    } else {
        alert(`Voce errou! O número secreto é maior que ${chute}!`)
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}! com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1){
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}! com ${tentativas} tentativas`);
// }else {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}! com ${tentativas} tentativa`);

// }


