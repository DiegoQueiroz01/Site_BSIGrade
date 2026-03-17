// 1. CONFIGURAÇÃO E PERSISTÊNCIA
const matriculaAtiva = localStorage.getItem('matricula_logada');
if (!matriculaAtiva) {
    window.location.href = 'index.html'; 
}

const CHAVE_STORAGE = `progresso_${matriculaAtiva}`;
let concluidasSalvas = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];

// 2. SELEÇÃO DE ELEMENTOS
const materias = document.querySelectorAll('.materia-card');
const totalMaterias = materias.length;
const modalBS = new bootstrap.Modal(document.getElementById('materiaModal'));
let idMateriaFoco = null; // Para saber qual matéria o modal está editando

// 3. FUNÇÃO DE ATUALIZAÇÃO DA GRADE
function atualizarInterface() {
    let contagem = 0;
    materias.forEach(materia => {
        if (concluidasSalvas.includes(materia.id)) {
            materia.classList.add('materia-concluida');
            contagem++;
        } else {
            materia.classList.remove('materia-concluida');
        }
    });

    const porcentagem = totalMaterias > 0 ? Math.round((contagem / totalMaterias) * 100) : 0;
    
    document.getElementById('porcentagem').innerText = porcentagem + '%';
    document.getElementById('progresso-fill').style.width = porcentagem + '%';
    document.getElementById('concluidas').innerText = contagem;
    document.getElementById('total').innerText = totalMaterias;

    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(concluidasSalvas));
}

// 4. LÓGICA DO MODAL E CLIQUE
materias.forEach(materia => {
    materia.addEventListener('click', function() {
        idMateriaFoco = this.id;
        if (!idMateriaFoco) return;

        // Atualiza os textos do Modal
        document.getElementById('modalTitulo').innerText = this.innerText;
        const btn = document.getElementById('btnAcaoConcluir');
        
        const jaConcluida = concluidasSalvas.includes(idMateriaFoco);
        btn.innerText = jaConcluida ? "Desmarcar Matéria" : "Marcar como Concluída";
        btn.className = jaConcluida ? "btn btn-danger" : "btn btn-success";

        // Simulação de Repositório (Protótipo)
        document.getElementById('listaRepositorio').innerHTML = `
            <a href="#" class="list-group-item list-group-item-action bg-dark text-info border-secondary small">📄 Prova Antiga (Drive)</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark text-info border-secondary small">🔗 Resumos da Turma</a>
        `;

        modalBS.show();
    });

    // --- LÓGICA DE HOVER (Seus requisitos originais) ---
    materia.addEventListener('mouseenter', () => {
        const ids = {
            'requisito': materia.getAttribute('requisito'),
            'desbloqueia': materia.getAttribute('desbloqueia'),
            'pos': materia.getAttribute('pos')
        };

        for (const [classe, attr] of Object.entries(ids)) {
            if (attr) {
                attr.split(' ').forEach(id => {
                    const el = document.getElementById(id.trim());
                    if (el) el.classList.add(classe);
                });
            }
        }
        materia.classList.add('materia-focada');
    });

    materia.addEventListener('mouseleave', () => {
        ['requisito', 'desbloqueia', 'pos', 'materia-focada'].forEach(cl => {
            document.querySelectorAll('.' + cl).forEach(el => el.classList.remove(cl));
        });
    });
});

// Ação do Botão dentro do Modal
document.getElementById('btnAcaoConcluir').addEventListener('click', () => {
    const index = concluidasSalvas.indexOf(idMateriaFoco);
    
    if (index === -1) {
        concluidasSalvas.push(idMateriaFoco);
    } else {
        concluidasSalvas.splice(index, 1);
    }
    
    atualizarInterface();
    modalBS.hide();
});

// Inicialização
atualizarInterface();