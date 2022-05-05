//--------------------Interpretação--------------------
//1-O codigo está fazendo um loop onde vai parar quando i = 5 e o varialvel valor vai somando essa contagem entre si.
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/

//2-
//A- O codigo vai imprimir todos os numeros maiores que 18.
//B- ?
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/

//3- Vai imprimir 4 "*"

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

//-----------------------Escrita--------------------

//1-
//A-

let numeroBichinhos = Number(prompt("Quantos bichinhos você tem?"))

if (numeroBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!") 
} else {
for( let bichos = 0; bichos < numeroBichinhos; bichos++) {
    let nomeBichinhos = [String(prompt("Qual o nome dele?"))]
    console.log(nomeBichinhos[""])}
} if (nomeBichinhos) {}
