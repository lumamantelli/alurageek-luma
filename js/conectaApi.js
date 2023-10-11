async function listaProdutos() {
  const conexao = await fetch("http://localhost:3000/produtos")
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida

}

async function buscaProduto(termoDeBusca) {
  const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

const listarUmProduto = async (id) => {
    const conexao = await fetch(` http://localhost:3000/produtos/${id}`)
  return await conexao.json();
}

async function adicionarProduto(nome, imagem, preco) {
  const conexao = await fetch(`http://localhost:3000/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      imagem,
      preco,
    }),
  });
  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;

}

const editarProduto = async (id, nome, preco) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          preco,
        }),
      })
        .then((resposta) => {
          return resposta.json();
        })
        .catch((error) => console.log(error));
}

const deletarProduto = async (id) => {
    return await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
    })
}

export const conectaApi = {
    listaProdutos,
    buscaProduto,
    listarUmProduto,
    adicionarProduto,
    editarProduto,
    deletarProduto
}