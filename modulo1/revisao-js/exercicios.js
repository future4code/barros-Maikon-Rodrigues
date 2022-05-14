// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
console.log(retornaTamanhoArray([3, 2, 1, 4, 7]))

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
console.log(retornaArrayInvertido([8, 23, 16, 10]))

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  arrayOrdenado = array.sort()
  return arrayOrdenado
}
console.log(retornaArrayOrdenado([3, 2, 1, 4, 7]))

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  parArray = array.filter ((numero) =>( numero % 2 === 0))
  return parArray
}
console.log(retornaNumerosPares([1, 2, 3, 4, 5, 6]))
  
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  parArray = []
  for (let numero of array) {
    if(numero % 2 === 0)
    {
      parArray.push(numero * numero)
    }
  }
  return parArray
}
console.log(retornaNumerosParesElevadosADois([1, 2, 3, 4, 5, 6]))

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  maiorArray = []
  for (let numero of array) {
    if(numero > maiorArray)
    {
      maiorArray = numero
    }
  }
  return maiorArray
}
console.log(retornaMaiorNumero([1, 5, 3, 7, 5, 2]))

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  if(num1 > num2){
    numeroMenor = num2
    maiorNumero = num1
  }else{(num1 < num2) 
    numeroMenor = num1
    maiorNumero = num2}
  let maiorDivisivelMenor = maiorNumero % numeroMenor === 0
  let diferenca = maiorNumero - numeroMenor
  let objeto = [{maiorNumero: maiorNumero, maiorDivisivelMenor: maiorDivisivelMenor, diferenca:diferenca}]
  return objeto
}
console.log(retornaObjetoEntreDoisNumeros(15, 30))

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let nPares = []
  for(i = 0; n > nPares.length; i++){
    if (i % 2 === 0){
      nPares.push(i)
    } 
  } return nPares 
    
}
console.log(retornaNPrimeirosPares(3))
console.log(retornaNPrimeirosPares(5))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
    console.log(`${ladoA}, ${ladoB}, ${ladoC}  Equilátero`)
  } 
  else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
    console.log(`${ladoA}, ${ladoB}, ${ladoC}  Escaleno`)
  }
  else {
    console.log(`${ladoA}, ${ladoB}, ${ladoC}  Isósceles`)
  }
}
classificaTriangulo(1, 2, 4)
classificaTriangulo(1, 2, 1)
classificaTriangulo(5, 5, 5)

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  arrayF = array.sort()
  let segundoMaior = arrayF[array.length - 2]
  let segundoMenor = arrayF[1]
  let maiorMenor = [segundoMaior, segundoMenor]
  return maiorMenor
}
console.log(retornaSegundoMaiorESegundoMenor([3, 2, 1, 4, 7, 6, 5]))

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}
 
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}