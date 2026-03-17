// 0. BANCO DE DADOS DE MATERIAIS (Mapeamento de IDs para links do Drive)
const REPOSITORIO_DATA = {
    "AP": [
        { nome: "Prova 1 - 2023.2", url: "https://link-do-drive.com/arquivo1" },
        { nome: "Lista de Exercícios (Python/C)", url: "https://link-do-drive.com/arquivo2" }
    ],
    "LP1": [
        { nome: "Apostila Java Orientado a Objetos", url: "https://link-do-drive.com/java" },
        { nome: "Projeto Exemplo (GitHub)", url: "https://github.com/" }
    ],
    "MD1": [
        { nome: "Tabela Verdade - Resumo", url: "https://link-do-drive.com/tabela" }
    ],
    "CALC1": [
        { nome: "Tabela de Derivadas e Integrais", url: "https://link-do-drive.com/calculo" }
    ]
    // Adicione os IDs das outras matérias aqui conforme conseguir os materiais
};

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
let idMateriaFoco = null; 

// 3. FUNÇÃO DE ATUALIZAÇÃO DA GRADE (Progresso e Cores)
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
    
    // Atualiza elementos da UI
    const elPorc = document.getElementById('porcentagem');
    const elBarra = document.getElementById('progresso-fill');
    const elConcluidas = document.getElementById('concluidas');
    const elTotal = document.getElementById('total');

    if(elPorc) elPorc.innerText = porcentagem + '%';
    if(elBarra) elBarra.style.width = porcentagem + '%';
    if(elConcluidas) elConcluidas.innerText = contagem;
    if(elTotal) elTotal.innerText = totalMaterias;

    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(concluidasSalvas));
}

// 4. LOGICA DOS EVENTOS
materias.forEach(materia => {
    
    // --- EVENTO DE CLIQUE (Abrir Modal e Carregar Repositório) ---
    materia.addEventListener('click', function() {
        idMateriaFoco = this.id;
        if (!idMateriaFoco) return;

        // Atualiza o Título do Modal
        document.getElementById('modalTitulo').innerText = this.innerText;
        
        // Ajusta o Botão de Conclusão (Cor e Texto)
        const btn = document.getElementById('btnAcaoConcluir');
        const jaConcluida = concluidasSalvas.includes(idMateriaFoco);
        
        if (jaConcluida) {
            btn.innerHTML = '<i class="bi bi-x-circle me-2"></i>Desmarcar Matéria';
            btn.className = "btn btn-danger fw-bold";
        } else {
            btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Marcar como Concluída';
            btn.className = "btn btn-success fw-bold";
        }

        // --- BUSCA DINÂMICA NO REPOSITÓRIO ---
        const listaUI = document.getElementById('listaRepositorio');
        const materiaisData = REPOSITORIO_DATA[idMateriaFoco];

        if (materiaisData && materiaisData.length > 0) {
            listaUI.innerHTML = materiaisData.map(item => `
                <a href="${item.url}" target="_blank" class="list-group-item list-group-item-action bg-dark text-info border-secondary small d-flex justify-content-between align-items-center mb-1">
                    <span><i class="bi bi-file-earmark-text me-2"></i>${item.nome}</span>
                    <i class="bi bi-box-arrow-up-right small"></i>
                </a>
            `).join('');
        } else {
            listaUI.innerHTML = `
                <div class="text-center py-3">
                    <i class="bi bi-cloud-slash text-secondary display-6"></i>
                    <p class="text-white-50 mb-0 small mt-2">Nenhum material disponível ainda.</p>
                </div>
            `;
        }

        modalBS.show();
    });

    // --- LÓGICA DE HOVER (Destaque de Requisitos) ---
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

// --- AÇÃO DO BOTÃO DENTRO DO MODAL (Confirmar Conclusão) ---
document.getElementById('btnAcaoConcluir').addEventListener('click', () => {
    if (!idMateriaFoco) return;
    
    const index = concluidasSalvas.indexOf(idMateriaFoco);
    
    if (index === -1) {
        concluidasSalvas.push(idMateriaFoco);
    } else {
        concluidasSalvas.splice(index, 1);
    }
    
    atualizarInterface();
    modalBS.hide();
});

// Inicialização da interface ao carregar a página
atualizarInterface();