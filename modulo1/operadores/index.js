//-----------------Exercicios-de-Interpretação------------

//1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean true 

// 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/*Como as informações puxadas pelo prompt são strings o valor não é somado e sim juntado as
informações*/ 

// 3

const somacorreta = Number(primeiroNumero) + Number(segundoNumero)

console.log(somacorreta)

//------------Exercicio-de Escrita-------------

// 1

// 1.a

let idade = prompt ("Qual sua Idade?")

// 1.b  

let idadeAmigx = prompt ("Qual idade dx melhxr amigx?")

// 1.c

console.log ("Sua idade é maior do que a do seu melhxr amigx?", true)

// 1 .d 

console.log ("A diferença de idade é", Number(idade) - Number(idadeAmigx))

// 2

// 2.a

let numeroPar = prompt("Informe um número par?")

// 2.b

console.log( Number(numeroPar) % 2)

// 2.c

// Como é uma divisão de número par por um número par, o resultado é sempre 0.

// 2.d

// O resultado deixa de ser 0 e passa a ser sempre 1.

// 3

let idadeAnos = prompt("Qual sua idade?")

// 3.a 

console.log("Sua idade em meses é:", Number(idadeAnos * 12) )

// 3.b

console.log("Sua idade em dias é:", Number(idadeAnos * 365) )

// 3.c

console.log("Sua idade em horas é:", Number(idadeAnos * 365 * 24) ) 

// 4

let numero1 = prompt("Fale um número?")
let numero2 = prompt("Fale outro número?")

console.log("O primeiro numero é maior que segundo?", numero1 > numero2 )
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2 ) 
console.log("O primeiro numero é divisível pelo segundo?", Number(numero1 % numero2 ) === 0 )
console.log ("O segundo numero é divisível pelo primeiro?", Number(numero2 % numero1 ) === 0 )

//obs: O true ou false vai depender dos números inseridos e do resultado das operações.

//----------Desafios--------------

// 1.
/*Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15*/
/*Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32*/
// 1.a

let temperaturaF = 77
let tempKelvin = (temperaturaF - 32)*(5/9) + 273.15

console.log("Temperatura em Kelvin é", tempKelvin)
 
// 3.b

let temperaturaC = 80
let tempFahrenheit = (temperaturaC * (9/5) + 32)
console.log("Temperatura em Fahrenheit é", tempFahrenheit)





