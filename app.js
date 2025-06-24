// Função que mostra a identificação e a saudação
function mostrarIdentificacao() {
    const nome = document.getElementById('identificacao').value;
    const materia = document.getElementById('materia').value;

    if (nome && materia) {
        // Exibe a saudação
        document.getElementById('nome-usuario').textContent = nome;
        document.getElementById('materia-escolhida').textContent = materia;

        // Esconde o formulário de identificação e mostra a saudação
        document.getElementById('form-identificacao').style.display = 'none';
        document.getElementById('saudacao').style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}
