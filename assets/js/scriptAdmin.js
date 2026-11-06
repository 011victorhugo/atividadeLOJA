const formCadastro = document.getElementById("formCadastro")
const listaProdutos = document.getElementById("itens")
const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos") || "[]")
let indiceEditando = null

function salvarProdutos() {
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))
}

function criarCelula(texto) {
    const celula = document.createElement("td")
    celula.textContent = texto
    return celula
}

function renderizarProdutos() {
    listaProdutos.replaceChildren()

    produtosLocalStorage.forEach((produto, index) => {
        const linha = document.createElement("tr")
        linha.append(
            criarCelula(String(index + 1)),
            criarCelula(produto.nome),
            criarCelula(Number(produto.preco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })),
            criarCelula(produto.categoria)
        )

        const acoes = document.createElement("td")
        const botaoExcluir = document.createElement("button")
        botaoExcluir.type = "button"
        botaoExcluir.className = "btn btn-danger btn-sm me-2"
        botaoExcluir.textContent = "Excluir"
        botaoExcluir.addEventListener("click", () => excluirProduto(index))

        const botaoEditar = document.createElement("button")
        botaoEditar.type = "button"
        botaoEditar.className = "btn btn-warning btn-sm"
        botaoEditar.textContent = "Editar"
        botaoEditar.addEventListener("click", () => editarProduto(index))

        acoes.append(botaoExcluir, botaoEditar)
        linha.append(acoes)
        listaProdutos.append(linha)
    })
}

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value.trim()
    const precoTexto = document.getElementById("preco").value.trim().replace(",", ".")
    const preco = Number(precoTexto)
    const categoria = document.getElementById("categoria").value.trim()

    if (!nome || !categoria || !Number.isFinite(preco) || preco < 0) {
        alert("Informe nome, categoria e um preço válido maior ou igual a zero.")
        return
    }

    const produto = { nome, preco, categoria }

    if (indiceEditando === null) {
        produtosLocalStorage.push(produto)
    } else {
        produtosLocalStorage[indiceEditando] = produto
        indiceEditando = null
    }

    salvarProdutos()
    formCadastro.reset()
    renderizarProdutos()
})

function excluirProduto(index) {
    produtosLocalStorage.splice(index, 1)
    salvarProdutos()
    renderizarProdutos()
}

function editarProduto(index) {
    const produto = produtosLocalStorage[index]
    document.getElementById("nome").value = produto.nome
    document.getElementById("preco").value = String(produto.preco).replace(".", ",")
    document.getElementById("categoria").value = produto.categoria
    indiceEditando = index
    document.getElementById("enviar").textContent = "Salvar alterações"
}

formCadastro.addEventListener("reset", () => {
    indiceEditando = null
    document.getElementById("enviar").textContent = "Enviar"
})

renderizarProdutos()
