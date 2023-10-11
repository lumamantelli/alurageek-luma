
const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    mensagem: {
        valueMissing: "Este campo não pode estar vazio."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um e-mail válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        tooShort: "Sua senha precisa conter 8 caracteres."
    },
    imagem: {
        valueMissing: "Por favor, carregue uma imagem.",
    },
    categoria: {

    },
    preco: {
        valueMissing: "Esse campo não pode ficar vazio.",
    },
    descricao: {
        valueMissing: "Esse campo não pode ficar vazio."
    } 
}

function verificaCampo (campo) {
    let mensagem = ""

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity()

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem
    } else {
        mensagemErro.textContent = ""
    }

}

export default verificaCampo

