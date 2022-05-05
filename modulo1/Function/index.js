/*function olaMundo() {
    console.log("Olá Mundo!")
}

olaMundo()*/

//------------------------

/*function olaFulano(nome) {
    console.log(`Olá ${nome}`)
}

olaFulano("Maikon")
olaFulano("Tati")
olaFulano("Junior")*/

//-------------------------

/*const a = 1

function imprimeVariavel() {
    const b = 2
    console.log("Varialvel a", a)
    console.log("Varialvel b", b)
}

imprimeVariavel()

console.log("Varialvel a", a)
console.log("Varialvel b", b)*/

//-----------------------------

/*function soma (primeiroValor, segundoValor) {
    return primeiroValor + segundoValor
}

console.log(soma(10, 54))
let resultado = soma (20, 43)
console.log(resultado)*/

//---------------------------------

/*array = [8, 42, 31, 4, 57, 24]

function divisaoArray (array) {
    novoArray = []

    let ultimoElemento = array[array.length - 1]
    let primeiroElemento = array[0]

    novoArray.push(ultimoElemento / 2)
    novoArray.push(primeiroElemento / 2)

    return novoArray 

}

console.log(divisaoArray(array))*/

//-----------------------------------

let olaFulano = function(nome) {
    console.log(`Olá ${nome}`)
}

olaFulano("Tati")

let soma = (primeiroValor, segundoValor) => {
    return primeiroValor + segundoValor
}

console.log(soma(32, 16))