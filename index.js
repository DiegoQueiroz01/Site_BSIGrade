function validarELogar() {
    const matricula = document.getElementById('matricula').value.trim();

    if (matricula === "") {
        alert("Por favor, informe a matrícula para continuar.");
        return;
    }

    // 1. Salva a matrícula atual para a outra página saber quem está logado
    localStorage.setItem('matricula_logada', matricula);

    // 2. Redireciona para o arquivo da grade
    // Substitua 'grade.html' pelo nome real do seu arquivo da grade
    window.location.href = 'grade.html';
}