// 1. CONFIGURAÇÃO DE USUÁRIO E PERSISTÊNCIA
const matriculaAtiva = localStorage.getItem('matricula_logada');

// Redireciona se não houver login
if (!matriculaAtiva) {
    window.location.href = 'index.html'; 
}

const CHAVE_STORAGE = `progresso_${matriculaAtiva}`;
let concluidasSalvas = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];

// 2. SELEÇÃO DE ELEMENTOS
const materias = document.querySelectorAll('.materia-card');
const totalMaterias = materias.length;
const elPorcentagem = document.getElementById('porcentagem');
const elBarraFill = document.getElementById('progresso-fill');
const elConcluidas = document.getElementById('concluidas');
const elTotal = document.getElementById('total');

// 3. FUNÇÃO PRINCIPAL DE ATUALIZAÇÃO
function atualizarInterface() {
    let contagem = 0;

    materias.forEach(materia => {
        // Garantimos que estamos comparando o ID corretamente
        if (concluidasSalvas.includes(materia.id)) {
            materia.classList.add('materia-concluida');
            contagem++;
        } else {
            materia.classList.remove('materia-concluida');
        }
    });

    const porcentagem = totalMaterias > 0 ? Math.round((contagem / totalMaterias) * 100) : 0;

    if (elPorcentagem) elPorcentagem.innerText = porcentagem + '%';
    if (elBarraFill) elBarraFill.style.width = porcentagem + '%';
    if (elConcluidas) elConcluidas.innerText = contagem;
    if (elTotal) elTotal.innerText = totalMaterias;

    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(concluidasSalvas));
}

// 4. EVENTOS
materias.forEach(materia => {
    
    // EVENTO DE CLIQUE (CORRIGIDO)
    materia.addEventListener('click', function(e) {
        // Evita comportamentos estranhos de propagação
        e.preventDefault();
        
        const idMateria = this.id;

        // SE A MATÉRIA NÃO TIVER ID NO HTML, O CLIQUE VAI FALHAR
        if (!idMateria) {
            console.error("Erro: Esta matéria não possui um ID no HTML!", this);
            return;
        }

        const index = concluidasSalvas.indexOf(idMateria);
        
        if (index === -1) {
            // Se não está na lista, adiciona
            concluidasSalvas.push(idMateria);
        } else {
            // Se já está na lista, remove
            concluidasSalvas.splice(index, 1);
        }
        
        atualizarInterface();
    });

    // REQUISITOS (HOVER)
    materia.addEventListener('mouseenter', () => {
        const idRequisito = materia.getAttribute('data-requisito');
        if (idRequisito) {
            idRequisito.split(' ').forEach(reqID => {
                const elReq = document.getElementById(reqID.trim());
                if (elReq) elReq.classList.add('destaque-requisito');
            });
        }
        materia.classList.add('materia-focada');
    });

    materia.addEventListener('mouseleave', () => {
        document.querySelectorAll('.destaque-requisito').forEach(el => {
            el.classList.remove('destaque-requisito');
        });
        materia.classList.remove('materia-focada');
    });
});

// Inicialização
atualizarInterface();

// Função de Logout
function logout() {
    localStorage.removeItem('matricula_logada');
    window.location.href = 'index.html';
}