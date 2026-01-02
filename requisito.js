// Seleciona todas as matérias
const materias = document.querySelectorAll('.materia-card');

materias.forEach(materia => {
    // 1. QUANDO O MOUSE ENTRA NA MATÉRIA (Destaque de requisitos)
    materia.addEventListener('mouseenter', () => {
        const idRequisito = materia.getAttribute('data-requisito');
        
        if (idRequisito) {
            const requisitos = idRequisito.split(' ');
            requisitos.forEach(reqID => {
                const elRequisito = document.getElementById(reqID);
                if (elRequisito) {
                    elRequisito.classList.add('destaque-requisito');
                }
            });
        }
        materia.classList.add('materia-focada');
    });

    // 2. QUANDO O MOUSE SAI DA MATÉRIA (Limpeza)
    materia.addEventListener('mouseleave', () => {
        document.querySelectorAll('.destaque-requisito').forEach(el => {
            el.classList.remove('destaque-requisito');
        });
        materia.classList.remove('materia-focada');
    });

    // --- MUDANÇA AQUI ---
    // 3. QUANDO CLICA NA MATÉRIA (Marcar como concluída)
    materia.addEventListener('click', () => {
        // O toggle adiciona a classe se não houver, e remove se já houver
        materia.classList.toggle('materia-concluida');
    });
});