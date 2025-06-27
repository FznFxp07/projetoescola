// Função que salva as informações e redireciona o usuário
function salvarInformacoes() {
    const nome = document.getElementById('identificacao').value;
    const materia = document.getElementById('materia').value;

    if (nome && materia) {
        // Armazena os dados no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('materia', materia);

        // Redireciona para a "página 2" (saudação)
        window.location.href = 'pagina2.html'; // A página 2 será a mesma, mas com o nome "pagina2.html"
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}
