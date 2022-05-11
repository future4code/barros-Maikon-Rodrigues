//-------------------Interpretação-----------------

//1-A- Vai ixibir todos os objetitos e itens do Array, o número de itenst dentro do Array e Usuarios.
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/

//2-A- Os três itens nome: do array  

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/

//3-A- Vai ixibir os três itens do apelido do Array 

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/

//--------------------Escrita----------------------

//1-
//A-
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

/* const doguinhos = pets.filter((item, index, array) => {
    return item.nome
 })

 const doguinhosMesmo = doguinhos.map ((item,index, array) =>{
   return item.nome
})
 console.log(doguinhosMesmo)

//B-

const doguinhosSalsichasMesmo = pets.filter((item, index, array) => {
   return item.raca === "Salsicha"
})
  
console.log(doguinhosSalsichasMesmo)*/

//C-

const doguinhosPoodles = pets.map((item, index, array) => {
   nomes = pets.raca === "Poodle"
   return nomes
})
console.log(pets.raca)
console.log(console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${doguinhosPoodles}!`))

