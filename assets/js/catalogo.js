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
    nome: "Miojo turma da monica de tomate",
    preco:2.99,
    categoria:"Mercearia"
})
console.log(produtos)
// SEtItem serve para adicionar itens no localStorage
localStorage.setItem("Minha Loja","Mercado Proz")

// getItem serve para pegar um item do miojo Turma da monica de tomatelocalStorage
const minhaloja = localStorage.getItem("Minha Loja")
console.log("Minha Loja é " + minhaloja)

const produtosString1 = JSON.stringify(produtos)
localStorage.setItem("Produtos", produtosString1)

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


const valoresProdutos = produtos.map((produto) => produto.preço)
const menorValor = Math.min(... valoresProdutos)
const produtoMenorValor = produtos.filter((produto) => produto.preco == menorValor)
console.log(produtoMenorValor)


// 3- Usar o .find () para achar algum produto pelo nome


const produtoEncontrado = produtos.find(produto => produto.nome === "Miojo turma da monica de tomate");
console.log(produtoEncontrado);

// 4- Usar o .reduce () para fazer a soma dos preços


const somaPrecoProdutos = produtos.reduce((total, produtos) =>
total + produtos.preco
, 0)
console.log(somaPrecoProdutos)


// 5- Salvar um dado no localStorage e ler o mesmo 
const produtoString = JSON.stringify(produtos)
localStorage.setItem("produtos",produtoString)

console.log(produtos)

const produtosLocalStorage = JSON.parse(localStorage.getItem("produtos"))
console.log(produtosLocalStorage)

// crud
//create
// read
const  listaProdutos = document.getElementById("lista-produtos")
listaProdutos.innerHTML = 
// Usar o ,map() para escrever no html os produtos 
//'' apóstrofo ou aspas simples
//"" aspas duplas
// `` crase ${variavel}
produtosLocalStorage.map((produto) => `
    <article>
        <h3>nome: "${produto.nome}",</h3>
        <p> preco: "${produto.preco}",</p>
        <p> categoria:"${produto.categoria}"</p>
    </article>
    <hr>
`).join("")


//__ATIVIDADE__ 

//__!! Colocar tudo isso em um espectador de evento / função

// 1- Pegar os valores digitados na tela e colocar em variaveis 


const nomeProdutoDigitado = document.getElementById("nome").value
const precoProdutoDigitado =Number (document.getElementById("preco").value)
const categoriaProdutoDigitado = document.getElementById("categoria").value


// 2- criar um objeto com esses valores

const objetosProduto = document.getElementById(objetosProduto)

// 3- Pegar os valores que estão no local storage (transformando eles em JSON)
// 4- Usar o .push para colocar os valores nesse JSON
// 5- Salvar o novo JSON no local storage



