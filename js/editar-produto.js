import { conectaApi } from "./conectaApi.js"

const getURL = new URL(window.location)

const id = getURL.searchParams.get("id")

const inputImagem = document.querySelector("[data-imagem]")
const inputNome = document.querySelector("[data-nome]")
const inputPreco = document.querySelector("[data-preco]")

conectaApi.listarUmProduto(id).then((dados) => {
    inputImagem.setAttribute("src", dados.imagem)
    inputNome.value = dados.nome
    inputPreco.value = dados.preco
})

const formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    conectaApi
        .editarProduto(id, inputNome.value, inputPreco.value)
        .then(() => {
            window.location.href = "../index.html"
        })
})