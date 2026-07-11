function redirecionarParaCurso(curso) {
    if (curso === "1" || curso.includes("Sistemas")) {
        window.location.href = "BSI.html";
        return;
    }

    if (curso === "2" || curso.includes("Ambiental")) {
        window.location.href = "EAMB.html";
    }
}

function validarELogar() {
    const matricula = document.getElementById("examploNumerodeMatricula").value.trim();
    const curso = document.getElementById("curso").value;

    if (curso === "Selecione seu curso") {
        alert("Selecione um curso.");
        return;
    }

    if (matricula === "") {
        alert("Digite sua matrícula.");
        return;
    }

    if (matricula.length !== 12 || !/^\d+$/.test(matricula)) {
        alert("A matrícula deve conter exatamente 12 dígitos numéricos.");
        return;
    }

    localStorage.setItem("matricula_logada", matricula);
    localStorage.setItem("curso_selecionado", curso);

    redirecionarParaCurso(curso);
}

document.addEventListener("DOMContentLoaded", function () {
    const botaoEntrar = document.getElementById("btnEntrar");
    if (botaoEntrar) {
        botaoEntrar.addEventListener("click", validarELogar);
    }
});