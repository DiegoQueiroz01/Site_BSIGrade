// 1. SELEÇÃO DE ELEMENTOS DO DOM
const materias = document.querySelectorAll('.materia-card');
const totalMaterias = materias.length;
const elPorcentagem = document.getElementById('porcentagem');
const elBarraFill = document.getElementById('progresso-fill');
const elConcluidas = document.getElementById('concluidas');
const elTotal = document.getElementById('total');

// 2. FUNÇÃO PARA ATUALIZAR A BARRA DE PROGRESSO
function atualizarProgresso() {
    // Conta quantos elementos possuem a classe de concluída no momento
    const concluidas = document.querySelectorAll('.materia-concluida').length;
    
    // Cálculo matemático: (parte / todo) * 100
    const porcentagem = totalMaterias > 0 ? Math.round((concluidas / totalMaterias) * 100) : 0;

    // Atualiza a interface visual
    if (elPorcentagem) elPorcentagem.innerText = porcentagem + '%';
    if (elBarraFill) elBarraFill.style.width = porcentagem + '%';
    if (elConcluidas) elConcluidas.innerText = concluidas;
}

// 3. INICIALIZAÇÃO
// Define o número total de matérias no painel assim que a página carrega
if (elTotal) elTotal.innerText = totalMaterias;
atualizarProgresso();

// 4. MAPEAMENTO DE EVENTOS PARA CADA MATÉRIA
materias.forEach(materia => {
    
    // EVENTO: MOUSE ENTER (Destaque de pré-requisitos)
    materia.addEventListener('mouseenter', () => {
        const idRequisito = materia.getAttribute('data-requisito');
        
        if (idRequisito) {
            // O split(' ') permite que uma matéria tenha vários requisitos (ex: data-requisito="calculo1 algo2")
            const requisitos = idRequisito.split(' ');
            requisitos.forEach(reqID => {
                const elRequisito = document.getElementById(reqID.trim());
                if (elRequisito) {
                    elRequisito.classList.add('destaque-requisito');
                }
            });
        }
        materia.classList.add('materia-focada');
    });

    // EVENTO: MOUSE LEAVE (Limpar destaques)
    materia.addEventListener('mouseleave', () => {
        document.querySelectorAll('.destaque-requisito').forEach(el => {
            el.classList.remove('destaque-requisito');
        });
        materia.classList.remove('materia-focada');
    });

    // EVENTO: CLICK (Marcar concluída e atualizar barra)
    materia.addEventListener('click', () => {
        // Alterna a classe verde
        materia.classList.toggle('materia-concluida');
        
        // Recalcula o progresso toda vez que houver um clique
        atualizarProgresso();
    });
});