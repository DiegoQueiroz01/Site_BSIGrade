<script>
    // Seleciona todas as matérias
    const materias = document.querySelectorAll('.materia-card');

    materias.forEach(materia => {
        // QUANDO O MOUSE ENTRA NA MATÉRIA
        materia.addEventListener('mouseenter', () => {
            // Pega o ID do pré-requisito (se houver)
            const idRequisito = materia.getAttribute('data-requisito');
            
            if (idRequisito) {
                // Se tiver múltiplos requisitos separados por espaço (ex: "algo1 calculo1")
                // O split vai separar eles.
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

        // QUANDO O MOUSE SAI DA MATÉRIA (LIMPA TUDO)
        materia.addEventListener('mouseleave', () => {
            // Remove as classes de destaque de todo mundo
            document.querySelectorAll('.destaque-requisito').forEach(el => {
                el.classList.remove('destaque-requisito');
            });
            materia.classList.remove('materia-focada');
        });
    });
</script>