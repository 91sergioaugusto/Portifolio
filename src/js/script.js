const botoes = document.querySelectorAll(".botao");
const apresentacoes = document.querySelectorAll("div");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    apresentacoes.forEach((apresentacao) => {
      apresentacao.classList.remove("apresentacao__selecionada");
      apresentacao.classList.add("apresentacao");
    });
    apresentacoes[indice].classList.add("apresentacao__selecionada");
  });
});
