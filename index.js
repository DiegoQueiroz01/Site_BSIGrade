function validarELogar() {
    const matricula = document.getElementById('matricula').value.trim();

    if (matricula === "") {
        alert("Por favor, informe a matrícula para continuar.");
        return;
    }
    if (matricula.length === 12) {
        alert("A matrícula deve conter 12 dígitos.");
        return;
    }
    if (!/^\d+$/.test(matricula)) {
        alert("A matrícula deve conter apenas números.");
        return;
    }

    localStorage.setItem('matricula_logada', matricula);

    const cursoSelecionado = document.getElementById('curso').value;
    localStorage.setItem('curso_selecionado', cursoSelecionado);

    if (cursoSelecionado === "Bacharelado em Engenharia Ambiental") {
        window.location.href = 'EAMB.html';
    }
    if (cursoSelecionado === "Bacharelado em Sistemas de Informação") {
        window.location.href = 'BSI.html';
    }
}