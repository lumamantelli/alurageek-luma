import { conectaApi } from "./conectaApi.js"

const formulario  = document.querySelector("[data-formulario]")


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const imagem = document.querySelector("[data-imagem]").value
    const nome = document.querySelector("[data-nome]").value
    const preco = document.querySelector("[data-preco]").value

    conectaApi
        .adicionarProduto(nome, imagem, preco)
        .then((resposta) => {
            window.location.href = "../index.html"
            console.log(resposta)
        })
        .catch((erro) => {
            console.log(erro)
        })
})