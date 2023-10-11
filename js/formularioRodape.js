import verificaCampo from "./script.js";

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})