import { conectaApi } from "./conectaApi.js"
import { formatarPreco } from "./formatarPreco.js"

export function constroiCard(imagem, nome, preco, id) {
    const card = document.createElement("li")
    card.className = "items"

    const conteudo = `
        <div>
            <div class="container__botoes">
                <button class="bntDeletar" type="button">
                    <img class="deletarImagem botoes"  src="./imagens/excluir.png" alt="Deletar"/>
                </button>
        
                <button class="bntEditar" type="button">
                    <img class="editarImagem botoes"  src="./imagens/editar.png" alt="Editar" data-editar/>
                </button>
        
            </div>
            <img class="items__img" src="${imagem}" alt="Imagem">
            <p class="items__descricao">${nome}</p>
            <p class="items__preco">${formatarPreco(preco)}</p>
            
        </div>
    `
    card.innerHTML = conteudo
    card.dataset.id = id
    return card
}

const produtos = document.querySelector("[data-lista]")


produtos.addEventListener("click", async (evento) => {
    
    if (evento.target.classList.contains("deletarImagem")) {
        const produto = evento.target.closest("[data-id]")
        let id = produto.dataset.id
        conectaApi
            .deletarProduto(id)
            .then((resposta) => {
                produto.remove()
                console.log(resposta)
            })
            .catch((erro) => console.log(erro))
    }

    if(evento.target.classList.contains("editarImagem")){
        const produto = evento.target.closest("[data-id]")
        let id = produto.dataset.id

        let redirecionar = window.location.href = "../pages/editar-produto.html?id=" + id


        return redirecionar
    }
})




const render = async () => {
    try {
        const listaProdutos = await conectaApi.listaProdutos()

        listaProdutos.forEach((produto) => {
            produtos.appendChild(
                constroiCard(produto.imagem, produto.nome, produto.preco, produto.id)
            )
        })
    } catch (erro) {
        console.log(erro)
    }
}

render()