function validarELogar() {
    const matricula = document.getElementById('matricula').value.trim();

    if (matricula === "") {
        alert("Por favor, informe a matrícula para continuar.");
        return;
    }
    if (matricula.length == 12) {
        alert("A matrícula deve conter 12 dígitos.");
        return;
    }
    if (!/^\d+$/.test(matricula)) {
        alert("A matrícula deve conter apenas números.");
        return;
    }

    // 1. Salva a matrícula atual para a outra página saber quem está logado
    localStorage.setItem('matricula_logada', matricula);

    // 2. Salva o curso selecionado
    const cursoSelecionado = document.getElementById('curso').value;
    localStorage.setItem('curso_selecionado', cursoSelecionado);

    // 2. Redireciona para o arquivo da grade correta
    if (cursoSelecionado === "Bacharelado em Engenharia Ambiental") {
        window.location.href = 'gradeEA.html';
    } 
    if (cursoSelecionado === "Bacharelado em Sistemas de Informação") {
        window.location.href = 'gradeBSI.html';
    }
}