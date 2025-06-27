function mostrarIdentificacao() {
    // Pega os valores inseridos no formulário
    const nome = document.getElementById("identificacao").value;
    const materia = document.getElementById("materia").value;

    // Verifica se o nome foi preenchido
    if (nome.trim() === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    // Atualiza os elementos da saudação com os dados do usuário
    document.getElementById("nome-usuario").textContent = nome;
    document.getElementById("materia-escolhida").textContent = materia;

    // Esconde o formulário e mostra a saudação
    document.getElementById("form-identificacao").style.display = "none";
    document.getElementById("saudacao").style.display = "block";
}
