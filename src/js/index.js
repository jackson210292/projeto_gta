const botao = document.querySelector(".botao_plataforma");
const elementoPlataformas = document.querySelector(".botao_plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});