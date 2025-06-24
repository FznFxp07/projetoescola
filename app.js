let dadosUsuario = {};

// Função para iniciar o formulário após identificação
function iniciarFormulario() {
    const nome = document.getElementById('identificacao').value;
    const materia = document.getElementById('materia').value;

    // Validação básica
    if (!nome || !materia) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Salvar as informações do usuário
    dadosUsuario.nome = nome;
    dadosUsuario.materia = materia;

    // Exibir mensagem personalizada
    document.getElementById('nome-usuario').textContent = nome;
    document.getElementById('materia-escolhida').textContent = materia;

    // Esconder a parte de identificação e mostrar a parte das respostas
    document.getElementById('form-identificacao').style.display = 'none';
    document.getElementById('respostas').style.display = 'block';
}

// Função para exibir a imagem pré-visualizada
function previewImagem(event) {
    const imagem = document.getElementById('img-preview');
    imagem.src = URL.createObjectURL(event.target.files[0]);
    imagem.style.display = 'block';
}

// Função para salvar as respostas e a imagem
function salvarRespostas() {
    const resposta1 = document.getElementById('resposta1').value;
    const resposta2 = document.getElementById('resposta2').value;
    const imagemInput = document.getElementById('imagem');

    // Salvar as respostas no objeto de dados
    dadosUsuario.respostas = {
        resposta1: resposta1,
        resposta2: resposta2
    };

    // Verificar se há imagem
    if (imagemInput.files && imagemInput.files[0]) {
        const imagem = imagemInput.files[0];
        dadosUsuario.imagem = URL.createObjectURL(imagem);
    }

    // Exibir mensagem de sucesso
    document.getElementById('respostas').style.display = 'none';
    document.getElementById('mensagem-sucesso').style.display = 'block';

    // Salvar ou enviar os dados para o servidor aqui (não implementado)

    // Para fins de demonstração, logamos os dados
    console.log(dadosUsuario);
}
