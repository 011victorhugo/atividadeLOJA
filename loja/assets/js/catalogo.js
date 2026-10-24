//Array
const produtosArrey = ["Arroz 5kg", 24.90, "Mercearia"]
// Objeto ou Lista para quem veio do pyton
// chave / index : valor / resultado 
const produtosb ={
    nome: "Arroz 5kg",
    preco:24.90,
    categoria:"Mercearia"
}
console.log(produtosb.nome)
console.log(produtosb.preco)
console.log(produtosb.categoria)

//Arrey de objetos 
const produtos = [
    {
         nome: "Arroz 5kg",
         preco:24.90,
         categoria:"Mercearia"
    },
    {
         nome: "Feijão 2kg",
         preco:10.90,
         categoria:"Mercearia"
    },
    {
         nome: "Coca Cola 2L",
         preco:11.90,
         categoria:"bebida"
    }
]

console.log(produtos[0].nome)
console.log(produtos[0].preco)
console.log(produtos[1].nome)
console.log(produtos[1].preco)
console.log(produtos[2].nome)
console.log(produtos[2].preco)

// Lista de Produtos
const nomes = produtos.map(produto => produto.nomes)
console.log(nomes)

produtos.push({
    nome: "miojo Turma da monica de tomate",
    preco:2.99,
    categoria:"Mercearia"
})
console.log(produtos)
// SEtItem serve para adicionar itens no localStorage
localStorage.setItem("Minha Loja","Mercado Proz")

// getItem serve para pegar um item do localStorage
const minhaloja = localStorage.getItem("Minha Loja")
console.log("Minha Loja é " + minhaloja)

const produtosString = JSON.stringify(produtos)
localStorage.setItem("Produtos", produtosString)

// 1- adicionar 3 prosutos no final do arry usando. push()
produtos.push(
    {
    nome:"Tang Guarana",
    preco:0.50,
    categoria:"Mercearia"
    },
    {
    nome:"Danix",
    preco:2.50,
    categoria:"Mercearia"
    },
    {
    nome:"bala halls",
    preco:2.50,
    categoria:"Mercearia"
    }
)
// 2- Usar o .filter() para achar o produto mais barato
produtos.filter+
// 3- Usar o .find () para achar algum produto pelo nome

// 4- Usar o .reduce () para fazer a soma dos preços

// 5- Salvar um dado no localStorage e ler o mesmo 

