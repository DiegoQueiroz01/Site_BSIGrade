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
};

const CATEGORIAS = {
    "AP": { tipo: "CCO", cor: "cco" },
    "LPGA": { tipo: "HUM", cor: "hum" },
    "FSI": { tipo: "CCO", cor: "cco" },
    "MD1": { tipo: "MAT", cor: "mat" },
    "ICC": { tipo: "CCO", cor: "cco" },
    "IAC": { tipo: "HUM", cor: "hum" },
    "LP1": { tipo: "TEC", cor: "tec" },
    "OAC": { tipo: "CCO", cor: "cco" },
    "CES": { tipo: "HUM", cor: "hum" },
    "MD2": { tipo: "MAT", cor: "mat" },
    "CALC1": { tipo: "MAT", cor: "mat" },
    "ADM": { tipo: "FCO", cor: "fco" },
    "LP2": { tipo: "TEC", cor: "tec" },
    "ED": { tipo: "CCO", cor: "cco" },
    "SO": { tipo: "CCO", cor: "cco" },
    "PE": { tipo: "MAT", cor: "mat" },
    "DC": { tipo: "HUM", cor: "hum" },
    "OSM": { tipo: "FCO", cor: "fco" },
    "MPC": { tipo: "FCO", cor: "fco" },
    "AMS": { tipo: "CCO", cor: "cco" },
    "BD1": { tipo: "CCO", cor: "cco" },
    "RC": { tipo: "CCO", cor: "cco" },
    "WEB1": { tipo: "TEC", cor: "tec" },
    "EMP": { tipo: "FCO", cor: "fco" },
    "ACEXI": { tipo: "ACEX", cor: "acex" },
    "ECON": { tipo: "FCO", cor: "fco" },
    "PDS": { tipo: "CCO", cor: "cco" },
    "CA": { tipo: "CCO", cor: "cco" },
    "BD2": { tipo: "CCO", cor: "cco" },
    "PAR": { tipo: "CCO", cor: "cco" },
    "WEB2": { tipo: "TEC", cor: "tec" },
    "ACEXII": { tipo: "ACEX", cor: "acex" },
    "IA": { tipo: "CCO", cor: "cco" },
    "PDM": { tipo: "TEC", cor: "tec" },
    "ES": { tipo: "CCO", cor: "cco" },
    "SD": { tipo: "CCO", cor: "cco" },
    "SF": { tipo: "CCO", cor: "cco" },
    "GP": { tipo: "FCO", cor: "fco" },
    "ACEXIII": { tipo: "ACEX", cor: "acex" },
    "DDI": { tipo: "CCO", cor: "cco" },
    "QS": { tipo: "CCO", cor: "cco" },
    "TCC1": { tipo: "TCC", cor: "tcc" },
    "IHM": { tipo: "CCO", cor: "cco" },
    "SAD": { tipo: "CCO", cor: "cco" },
    "OP1": { tipo: "OPT", cor: "opt" },
    "ACEXIV": { tipo: "ACEX", cor: "acex" },
    "MA": { tipo: "FCO", cor: "fco" },
    "GG": { tipo: "CCO", cor: "cco" },
    "TCC2": { tipo: "TCC", cor: "tcc" },
    "OP2": { tipo: "OPT", cor: "opt" },
    "OP3": { tipo: "OPT", cor: "opt" }
};

const matriculaAtiva = localStorage.getItem('matricula_logada');
if (!matriculaAtiva) {
    window.location.href = 'index.html';
}

const CHAVE_STORAGE = `progresso_${matriculaAtiva}`;
let concluidasSalvas = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];

const materias = document.querySelectorAll('.materia-card');
const totalMaterias = materias.length;
const modalElement = document.getElementById('materiaModal');
const modalBS = modalElement ? new bootstrap.Modal(modalElement) : null;
let idMateriaFoco = null;

function atualizarEstadoMateria(materia) {
    const id = materia.id;
    const jaConcluida = concluidasSalvas.includes(id);
    const requisito = materia.getAttribute('requisito');
    const desbloqueia = materia.getAttribute('desbloqueia');
    const estaBloqueada = Boolean(requisito && !concluidasSalvas.includes(requisito));

    materia.classList.toggle('materia-concluida', jaConcluida);
    materia.classList.toggle('materia-bloqueada', estaBloqueada && !jaConcluida);

    const lockIcon = materia.querySelector('.materia-lock');
    if (lockIcon) {
        lockIcon.innerHTML = jaConcluida ? '<i class="bi bi-unlock-fill" style="color:#16a34a"></i>' : estaBloqueada ? '<i class="bi bi-lock-fill" style="color:#dc2626"></i>' : '<i class="bi bi-unlock-fill" style="color:#0f766e"></i>';
    }

    const prereqIcon = materia.querySelector('.materia-prereq');
    if (prereqIcon) {
        prereqIcon.innerHTML = requisito ? '<i class="bi bi-star-fill"></i>' : '';
    }

    const tag = materia.querySelector('.materia-tag');
    if (tag) {
        const categoria = CATEGORIAS[id];
        if (categoria) {
            tag.textContent = categoria.tipo;
            tag.className = `materia-tag ${categoria.cor}`;
            tag.style.display = 'inline-flex';
        } else {
            tag.style.display = 'none';
        }
    }
}

function atualizarInterface() {
    let contagem = 0;
    materias.forEach(materia => {
        atualizarEstadoMateria(materia);
        if (concluidasSalvas.includes(materia.id)) {
            contagem++;
        }
    });

    const porcentagem = totalMaterias > 0 ? Math.round((contagem / totalMaterias) * 100) : 0;

    const elPorc = document.getElementById('porcentagem');
    const elBarra = document.getElementById('progresso-fill');
    const elConcluidas = document.getElementById('concluidas');
    const elTotal = document.getElementById('total');

    if (elPorc) elPorc.innerText = porcentagem + '%';
    if (elBarra) elBarra.style.width = porcentagem + '%';
    if (elConcluidas) elConcluidas.innerText = contagem;
    if (elTotal) elTotal.innerText = totalMaterias;

    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(concluidasSalvas));
}

materias.forEach(materia => {
    const texto = materia.innerText.trim();
    materia.innerHTML = `
        <span class="materia-lock"></span>
        <span class="materia-prereq"></span>
        <span class="materia-tag"></span>
        <span class="materia-card-content">
            <span class="materia-card-text">${texto}</span>
        </span>
    `;

    materia.addEventListener('click', function () {
        idMateriaFoco = this.id;
        if (!idMateriaFoco) return;

        document.getElementById('modalTitulo').innerText = texto;

        const btn = document.getElementById('btnAcaoConcluir');
        const jaConcluida = concluidasSalvas.includes(idMateriaFoco);

        if (jaConcluida) {
            btn.innerHTML = '<i class="bi bi-x-circle me-2"></i>Desmarcar Matéria';
            btn.className = 'btn btn-danger fw-bold';
        } else {
            btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Marcar como Concluída';
            btn.className = 'btn btn-success fw-bold';
        }

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

        if (modalBS) {
            modalBS.show();
        }
    });

    materia.addEventListener('mouseenter', () => {
        const ids = {
            requisito: materia.getAttribute('requisito'),
            desbloqueia: materia.getAttribute('desbloqueia'),
            pos: materia.getAttribute('pos')
        };

        Object.entries(ids).forEach(([classe, attr]) => {
            if (attr) {
                attr.split(' ').forEach(id => {
                    const el = document.getElementById(id.trim());
                    if (el) el.classList.add(classe);
                });
            }
        });
        materia.classList.add('materia-focada');
    });

    materia.addEventListener('mouseleave', () => {
        ['requisito', 'desbloqueia', 'pos', 'materia-focada'].forEach(cl => {
            document.querySelectorAll('.' + cl).forEach(el => el.classList.remove(cl));
        });
    });
});

document.getElementById('btnAcaoConcluir').addEventListener('click', () => {
    if (!idMateriaFoco) return;

    const index = concluidasSalvas.indexOf(idMateriaFoco);
    if (index === -1) {
        concluidasSalvas.push(idMateriaFoco);
    } else {
        concluidasSalvas.splice(index, 1);
    }

    atualizarInterface();
    if (modalBS) {
        modalBS.hide();
    }
});

atualizarInterface();