// Carrega as informações do localStorage e exibe a saudação
window.onload = function() {
    const nome = localStorage.getItem('nome');
    const materia = localStorage.getItem('materia');

    if (nome && materia) {
        document.getElementById('nome-usuario').textContent = nome;
        document.getElementById('materia-escolhida').textContent = materia;
    } else {
        // Se os dados não forem encontrados, redireciona para a página inicial
        alert('Sem dados! Redirecionando...');
        window.location.href = 'index.html';  // Redireciona para a página inicial caso os dados não existam
    }
};
