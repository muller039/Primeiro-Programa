//objetivo 1 - quando o usuário clicar no botão de seleção deplataformas de ve abrir uma caixa com os botões de seleção de plataforma

//passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele
const botao = document.querySelector(".btn-plataforma");

//passo 2 - pegar o elemento do conteudo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//passo 3 - pegar o clique do usuário no JS
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
} )
