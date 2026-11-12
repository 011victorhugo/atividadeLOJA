const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

const listaProdutos = document.getElementById("lista-produtos")
// Usar o .map() para escrever no html os produtos
// '' apóstrofo ou aspas simples
// "" aspas duplas
// `` crase ${variavel}

function escreveNaTela(produtosLocalStorage) {
listaProdutos.innerHTML =
        produtosLocalStorage.map((produto) => `
        <div class="col">
            <div class="card h-100 shadow-sm produto-card">
                <div class="card-body"
                    <h3 class="card-title h5">${produto.nome}</h3>
                    <p class="fw-bold text-success mb-0" id="preco">R$ ${produto.preco}</p>
                    <p class="card-text text-muted" id="categoria">${produto.categoria}</p>
                </div>
            </div>
        </div>
        `).join("")
}
escreveNaTela(produtosLocalStorage)

// passo 2 pegar as categorias

const filtroCategotia = document.getElementById("filtroCategotia")
const categoria = produtosLocalStorage.map((produto) => produto.categoria)
const categoriaUnicas = [...new Set(categoria)]

// passo 3 escrever as categorias na tela

filtroCategotia.innerHTML += categoriaUnicas.map(categoria => `
    <option>${categoria}</option>
`).join("")

//

filtroCategotia.addEventListener("change", () => {
    const categoriasSelecionadas = filtroCategotia.value
    let produtosFiltrados = []

    if (categoriasSelecionadas == "todas") {
        produtosFiltrados = produtosLocalStorage
    } else {
        produtosFiltrados = produtosLocalStorage.filter((produtosLocalStorage) =>
            produtosLocalStorage.categoria == categoriasSelecionadas
    )
    }
escreveNaTela(produtosFiltrados)
console.log(produtosFiltrados)
})

