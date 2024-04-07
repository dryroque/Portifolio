const botaoMostrarProjetos = document.querySelector('.btn-mostar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    })

    botaoMostrarProjetos.classList.add("remover");
})