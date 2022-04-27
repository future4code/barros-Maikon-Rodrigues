/*-------------------INTERPRETACAO----------------------*/

//1- 
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

//A- "Matheus Nachtergaele" / "Selton Mello" / "Globo" "14H"

//2- 
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

//A- JUCA, 3, SRD B- JUBA, 3, SRD C- JUBO, 3, SRD

//B- VAI COPIAR TODAS AS CARACTERISTICAS DE AÇOES DE UM OBJETO 

//3-

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

//A- false / undefined 
//B- O PRIMEIRO REALMENTE NÃO SEI, O SEGUNDO NÃO TEM UM VALOR DEFINIDO 

//---------------------ESCRITA---------------------

//1- A

const objeto = {
    nome: "maik",
    apelido: ["apelido1", "apelido2", "apelido3"]

}
function nome (alo) {
    return objeto
    `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido}`
}

console.log(nome)
//B-
