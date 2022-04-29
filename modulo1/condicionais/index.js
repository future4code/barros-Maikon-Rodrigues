//--------------------------Interpretação---------------
//1-
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
//A-Verifica se o numero é par ou impar 
//B-Passa no testa número pares
//C-Não passa no teste número impares

//2-
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/
//A-Serve para verificar os valores das frutas
//B-O preço da fruta maça, é, R$2.25
//C-O preço da fruta pera, é, R$5

//3-
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/
//A-Perguntando ao usuario um número que será string mas convertido em number
//B-Esse número passou no teste. Não exibiria mensagem
//C-Não exibirá mensagem pois a let criada está fora do escopo do console.log criado abaixo dele

//---------------------Escrita--------------------------

//1-A-B-C
/*const idade = Number(prompt("Qual sua idade?"))

if(idade >= 18) {
    console.log("Parabêns você pode dirigir!")
}else {
        console.log("Calme amigo sua hora vai chegar!")
    }*/

//2-
/*const turno = prompt("Qual o seu turno?") 
if(turno =="M"){
    console.log("Bom Dia!")
}else if(turno =="V"){
    console.log("Boa Tarde!")
} else if(turno =="N"){
    console.log("Boa Noite!")
}*/

//3-
/*const turno = prompt("Qual o seu turno?") 
switch (turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:    
}*/

//4- 
/*const genero = prompt("Qual o gênero do filme?") 
const valor = Number(prompt("Qual o valor do ingresso?")) 
if(genero==="fantasia", valor<=15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}*/
    

