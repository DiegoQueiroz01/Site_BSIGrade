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
    "OP3": { tipo: "OPT", cor: "opt" },
    "AVGA": { tipo: "MAT", cor: "mat" },
    "BG": { tipo: "CCO", cor: "cco" },
    "CAL1": { tipo: "MAT", cor: "mat" },
    "IEA": { tipo: "CCO", cor: "cco" },
    "IEEA": { tipo: "HUM", cor: "hum" },
    "LPGA": { tipo: "HUM", cor: "hum" },
    "MPC": { tipo: "FCO", cor: "fco" },
    "QG": { tipo: "MAT", cor: "mat" },
    "AL": { tipo: "MAT", cor: "mat" },
    "CAL2": { tipo: "MAT", cor: "mat" },
    "EA": { tipo: "CCO", cor: "cco" },
    "EDA": { tipo: "CCO", cor: "cco" },
    "EG": { tipo: "CCO", cor: "cco" },
    "F1": { tipo: "MAT", cor: "mat" },
    "QA": { tipo: "MAT", cor: "mat" },
    "ACEXI": { tipo: "ACEX", cor: "acex" },
    "CAL3": { tipo: "MAT", cor: "mat" },
    "ECO": { tipo: "FCO", cor: "fco" },
    "FE": { tipo: "MAT", cor: "mat" },
    "F2": { tipo: "MAT", cor: "mat" },
    "HST": { tipo: "HUM", cor: "hum" },
    "MS": { tipo: "CCO", cor: "cco" },
    "MC": { tipo: "CCO", cor: "cco" },
    "EDO": { tipo: "MAT", cor: "mat" },
    "F3": { tipo: "MAT", cor: "mat" },
    "GEO": { tipo: "CCO", cor: "cco" },
    "ICM": { tipo: "CCO", cor: "cco" },
    "IP": { tipo: "TEC", cor: "tec" },
    "MSA": { tipo: "CCO", cor: "cco" },
    "PE": { tipo: "MAT", cor: "mat" },
    "ACEXII": { tipo: "ACEX", cor: "acex" },
    "CN": { tipo: "MAT", cor: "mat" },
    "DAC": { tipo: "TEC", cor: "tec" },
    "FT": { tipo: "CCO", cor: "cco" },
    "GEOP": { tipo: "TEC", cor: "tec" },
    "PS": { tipo: "CCO", cor: "cco" },
    "RM1": { tipo: "CCO", cor: "cco" },
    "EC": { tipo: "CCO", cor: "cco" },
    "ECA": { tipo: "CCO", cor: "cco" },
    "HID": { tipo: "CCO", cor: "cco" },
    "LDA": { tipo: "CCO", cor: "cco" },
    "RB": { tipo: "CCO", cor: "cco" },
    "SOC": { tipo: "HUM", cor: "hum" },
    "TOP": { tipo: "TEC", cor: "tec" },
    "ACEXIII": { tipo: "ACEX", cor: "acex" },
    "AAIA": { tipo: "CCO", cor: "cco" },
    "GPA": { tipo: "CCO", cor: "cco" },
    "HG": { tipo: "CCO", cor: "cco" },
    "OH": { tipo: "CCO", cor: "cco" },
    "OU": { tipo: "CCO", cor: "cco" },
    "QUA": { tipo: "MAT", cor: "mat" },
    "SUE": { tipo: "CCO", cor: "cco" },
    "ACEXIV": { tipo: "ACEX", cor: "acex" },
    "APA": { tipo: "CCO", cor: "cco" },
    "GIBH": { tipo: "CCO", cor: "cco" },
    "RAD": { tipo: "CCO", cor: "cco" },
    "PA": { tipo: "CCO", cor: "cco" },
    "TE": { tipo: "CCO", cor: "cco" },
    "ACEXV": { tipo: "ACEX", cor: "acex" },
    "GTRS": { tipo: "CCO", cor: "cco" },
    "TAA": { tipo: "CCO", cor: "cco" },
    "OP2": { tipo: "OPT", cor: "opt" },
    "TCC1": { tipo: "TCC", cor: "tcc" },
    "TCC2": { tipo: "TCC", cor: "tcc" }
};

const matriculaAtiva = localStorage.getItem('matricula_logada');
if (!matriculaAtiva) {
    window.location.href = 'index.html';
}

const CHAVE_STORAGE = `progresso_${matriculaAtiva}`;
let concluidasSalvas = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
let dadosDoAluno = {};
let db = null;
let docFn = null;
let getDocFn = null;
let setDocFn = null;

const materias = document.querySelectorAll('.materia-card');
const totalMaterias = materias.length;
const modalElement = document.getElementById('materiaModal');
const modalBS = modalElement ? new bootstrap.Modal(modalElement) : null;
let idMateriaFoco = null;

async function initFirestore() {
    if (db && docFn && getDocFn && setDocFn) return;

    try {
        const firebaseModule = await import('./firebase.js');
        db = firebaseModule.db;
        docFn = firebaseModule.doc;
        getDocFn = firebaseModule.getDoc;
        setDocFn = firebaseModule.setDoc;
    } catch (error) {
        console.warn('Firebase indisponível. O progresso ficará salvo apenas localmente.', error);
    }
}

async function carregarDadosDoFirestore() {
    if (!matriculaAtiva) return;

    await initFirestore();

    if (!db || !docFn || !getDocFn) {
        atualizarInterface();
        return;
    }

    try {
        const alunoRef = docFn(db, 'alunos', matriculaAtiva);
        const alunoSnap = await getDocFn(alunoRef);

        if (alunoSnap.exists()) {
            dadosDoAluno = alunoSnap.data() || {};
            const materiasSalvas = dadosDoAluno.materias || {};
            concluidasSalvas = Object.keys(materiasSalvas).filter(id => materiasSalvas[id]?.concluida);
            localStorage.setItem(CHAVE_STORAGE, JSON.stringify(concluidasSalvas));
        } else {
            dadosDoAluno = { matricula: matriculaAtiva, curso: localStorage.getItem('curso_selecionado') || '', materias: {} };
        }
    } catch (error) {
        console.error('Erro ao carregar progresso no Firestore:', error);
    }

    atualizarInterface();
}

async function salvarDadosNoFirestore() {
    if (!matriculaAtiva) return;

    await initFirestore();

    if (!db || !docFn || !setDocFn) {
        return;
    }

    try {
        const alunoRef = docFn(db, 'alunos', matriculaAtiva);
        const materiasPayload = {};

        concluidasSalvas.forEach(id => {
            materiasPayload[id] = { concluida: true };
        });

        await setDocFn(alunoRef, {
            matricula: matriculaAtiva,
            curso: localStorage.getItem('curso_selecionado') || '',
            materias: materiasPayload,
            progresso: Math.round((concluidasSalvas.length / Math.max(totalMaterias, 1)) * 100),
            ultimaAtualizacao: new Date().toISOString()
        }, { merge: true });
    } catch (error) {
        console.error('Erro ao salvar progresso no Firestore:', error);
    }
}

function atualizarEstadoMateria(materia) {
    const id = materia.id;
    const jaConcluida = concluidasSalvas.includes(id);
    const requisito = materia.getAttribute('requisito');
    const requisitos = requisito ? requisito.split(/\s+/).filter(Boolean) : [];
    const estaBloqueada = requisitos.length > 0 && requisitos.some(reqId => !concluidasSalvas.includes(reqId));

    materia.classList.toggle('materia-concluida', jaConcluida);
    materia.classList.toggle('materia-bloqueada', estaBloqueada && !jaConcluida);

    const lockIcon = materia.querySelector('.materia-lock');
    if (lockIcon) {
        lockIcon.innerHTML = jaConcluida
            ? '<i class="bi bi-unlock-fill" style="color:#16a34a"></i>'
            : estaBloqueada
                ? '<i class="bi bi-lock-fill" style="color:#dc2626"></i>'
                : '<i class="bi bi-unlock-fill" style="color:#0f766e"></i>';
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

const btnConcluir = document.getElementById('btnAcaoConcluir');
if (btnConcluir) {
    btnConcluir.addEventListener('click', async () => {
        if (!idMateriaFoco) return;

        if (concluidasSalvas.includes(idMateriaFoco)) {
            concluidasSalvas = concluidasSalvas.filter(id => id !== idMateriaFoco);
        } else {
            concluidasSalvas = [...new Set([...concluidasSalvas, idMateriaFoco])];
        }

        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(concluidasSalvas));
        atualizarInterface();
        await salvarDadosNoFirestore();
        if (modalBS) {
            modalBS.hide();
        }
    });
}

carregarDadosDoFirestore();
