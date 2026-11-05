// Create
const formCadastro = document.getElementById("formCadastro")
var isEditando = false

// 0 - Colocar tudo isso em um escutador de evento / função
formCadastro.onsubmit = (event) => {
    event.preventDefault()

    // 1 - Pegar os valores digitados na tela e colocar em variaveis
    const nomeProdutoDigitado = document.getElementById("nome").value
    const precoProdutoDigitado = Number(document.getElementById("preco").value)
    const categoriaProdutoDigitado = document.getElementById("categoria").value

    // 2 - Criar um objeto com esses valores
    const produto = {
        nome: nomeProdutoDigitado,
        preco: precoProdutoDigitado,
        categoria: categoriaProdutoDigitado
    }

    // 3 - Pegar os valores que estão no local storage
    let produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

    if (!produtosLocalStorage) {
        produtosLocalStorage = []
    }

    // 4 - Usar o .push para colocar os valores
    if (isEditando !== false) {
        produtosLocalStorage[isEditando] = produto
    } else {
        produtosLocalStorage.push(produto)
    }

    // 5 - Salvar no local storage
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))

    location.reload()
}

// Recuperar produtos
const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos")) || []
const listaProdutos = document.getElementById("itens")

// Criar as linhas da tabela usando map()
listaProdutos.innerHTML =
produtosLocalStorage.map((produto, index) => `
    <tr>
        <td>${index}</td>
        <td>${produto.nome}</td>
        <td>R$ ${produto.preco.toFixed(2)}</td>
        <td>${produto.categoria}</td>
        <td>
            <button class="btn btn-danger btn-sm"
                onclick="excluirProduto(${index})">
                Excluir
            </button>

            <button class="btn btn-warning btn-sm"
                onclick="editarProduto(${index})">
                Editar
            </button>
        </td>
    </tr>
`).join("")

// Excluir produto
function excluirProduto(index) {
    console.log(`Vamos excluir o produto ${index}`)

    produtosLocalStorage.splice(index, 1)

    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))

    location.reload()
}

// Editar produto
function editarProduto(index) {
    console.log(produtosLocalStorage[index])

    const produto = produtosLocalStorage[index]

    document.getElementById("nome").value = produto.nome
    document.getElementById("preco").value = produto.preco
    document.getElementById("categoria").value = produto.categoria

    isEditando = index
}