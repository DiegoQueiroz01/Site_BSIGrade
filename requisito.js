// 0. BANCO DE DADOS DE MATERIAIS (Mapeamento de IDs para links do Drive)
const REPOSITORIO_DATA = {
    AP: [
        { nome: 'Prova 1 - 2023.2', url: 'https://link-do-drive.com/arquivo1' },
        { nome: 'Lista de Exercícios (Python/C)', url: 'https://link-do-drive.com/arquivo2' }
    ],
    LP1: [
        { nome: 'Apostila Java Orientado a Objetos', url: 'https://link-do-drive.com/java' },
        { nome: 'Projeto Exemplo (GitHub)', url: 'https://github.com/' }
    ],
    MD1: [
        { nome: 'Tabela Verdade - Resumo', url: 'https://link-do-drive.com/tabela' }
    ],
    CALC1: [
        { nome: 'Tabela de Derivadas e Integrais', url: 'https://link-do-drive.com/calculo' }
    ]
};

const CATEGORIAS = {
    AP: { tipo: 'CCO', cor: 'cco' },
    LPGA: { tipo: 'HUM', cor: 'hum' },
    FSI: { tipo: 'CCO', cor: 'cco' },
    MD1: { tipo: 'MAT', cor: 'mat' },
    ICC: { tipo: 'CCO', cor: 'cco' },
    IAC: { tipo: 'HUM', cor: 'hum' },
    LP1: { tipo: 'TEC', cor: 'tec' },
    OAC: { tipo: 'CCO', cor: 'cco' },
    CES: { tipo: 'HUM', cor: 'hum' },
    MD2: { tipo: 'MAT', cor: 'mat' },
    CALC1: { tipo: 'MAT', cor: 'mat' },
    ADM: { tipo: 'FCO', cor: 'fco' },
    LP2: { tipo: 'TEC', cor: 'tec' },
    ED: { tipo: 'CCO', cor: 'cco' },
    SO: { tipo: 'CCO', cor: 'cco' },
    PE: { tipo: 'MAT', cor: 'mat' },
    DC: { tipo: 'HUM', cor: 'hum' },
    OSM: { tipo: 'FCO', cor: 'fco' },
    MPC: { tipo: 'FCO', cor: 'fco' },
    AMS: { tipo: 'CCO', cor: 'cco' },
    BD1: { tipo: 'CCO', cor: 'cco' },
    RC: { tipo: 'CCO', cor: 'cco' },
    WEB1: { tipo: 'TEC', cor: 'tec' },
    EMP: { tipo: 'FCO', cor: 'fco' },
    ACEXI: { tipo: 'ACEX', cor: 'acex' },
    ECON: { tipo: 'FCO', cor: 'fco' },
    PDS: { tipo: 'CCO', cor: 'cco' },
    CA: { tipo: 'CCO', cor: 'cco' },
    BD2: { tipo: 'CCO', cor: 'cco' },
    PAR: { tipo: 'CCO', cor: 'cco' },
    WEB2: { tipo: 'TEC', cor: 'tec' },
    ACEXII: { tipo: 'ACEX', cor: 'acex' },
    IA: { tipo: 'CCO', cor: 'cco' },
    PDM: { tipo: 'TEC', cor: 'tec' },
    ES: { tipo: 'CCO', cor: 'cco' },
    SD: { tipo: 'CCO', cor: 'cco' },
    SF: { tipo: 'CCO', cor: 'cco' },
    GP: { tipo: 'FCO', cor: 'fco' },
    ACEXIII: { tipo: 'ACEX', cor: 'acex' },
    DDI: { tipo: 'CCO', cor: 'cco' },
    QS: { tipo: 'CCO', cor: 'cco' },
    TCC1: { tipo: 'TCC', cor: 'tcc' },
    IHM: { tipo: 'CCO', cor: 'cco' },
    SAD: { tipo: 'CCO', cor: 'cco' },
    OP1: { tipo: 'OPT', cor: 'opt' },
    ACEXIV: { tipo: 'ACEX', cor: 'acex' },
    MA: { tipo: 'FCO', cor: 'fco' },
    GG: { tipo: 'CCO', cor: 'cco' },
    TCC2: { tipo: 'TCC', cor: 'tcc' },
    OP2: { tipo: 'OPT', cor: 'opt' },
    OP3: { tipo: 'OPT', cor: 'opt' },
    AVGA: { tipo: 'MAT', cor: 'mat' },
    BG: { tipo: 'CCO', cor: 'cco' },
    CAL1: { tipo: 'MAT', cor: 'mat' },
    IEA: { tipo: 'CCO', cor: 'cco' },
    IEEA: { tipo: 'HUM', cor: 'hum' },
    LPGA: { tipo: 'HUM', cor: 'hum' },
    MPC: { tipo: 'FCO', cor: 'fco' },
    QG: { tipo: 'MAT', cor: 'mat' },
    AL: { tipo: 'MAT', cor: 'mat' },
    CAL2: { tipo: 'MAT', cor: 'mat' },
    EA: { tipo: 'CCO', cor: 'cco' },
    EDA: { tipo: 'CCO', cor: 'cco' },
    EG: { tipo: 'CCO', cor: 'cco' },
    F1: { tipo: 'MAT', cor: 'mat' },
    QA: { tipo: 'MAT', cor: 'mat' },
    ACEXI: { tipo: 'ACEX', cor: 'acex' },
    CAL3: { tipo: 'MAT', cor: 'mat' },
    ECO: { tipo: 'FCO', cor: 'fco' },
    FE: { tipo: 'MAT', cor: 'mat' },
    F2: { tipo: 'MAT', cor: 'mat' },
    HST: { tipo: 'HUM', cor: 'hum' },
    MS: { tipo: 'CCO', cor: 'cco' },
    MC: { tipo: 'CCO', cor: 'cco' },
    EDO: { tipo: 'MAT', cor: 'mat' },
    F3: { tipo: 'MAT', cor: 'mat' },
    GEO: { tipo: 'CCO', cor: 'cco' },
    ICM: { tipo: 'CCO', cor: 'cco' },
    IP: { tipo: 'TEC', cor: 'tec' },
    MSA: { tipo: 'CCO', cor: 'cco' },
    PE: { tipo: 'MAT', cor: 'mat' },
    ACEXII: { tipo: 'ACEX', cor: 'acex' },
    CN: { tipo: 'MAT', cor: 'mat' },
    DAC: { tipo: 'TEC', cor: 'tec' },
    FT: { tipo: 'CCO', cor: 'cco' },
    GEOP: { tipo: 'TEC', cor: 'tec' },
    PS: { tipo: 'CCO', cor: 'cco' },
    RM1: { tipo: 'CCO', cor: 'cco' },
    EC: { tipo: 'CCO', cor: 'cco' },
    ECA: { tipo: 'CCO', cor: 'cco' },
    HID: { tipo: 'CCO', cor: 'cco' },
    LDA: { tipo: 'CCO', cor: 'cco' },
    RB: { tipo: 'CCO', cor: 'cco' },
    SOC: { tipo: 'HUM', cor: 'hum' },
    TOP: { tipo: 'TEC', cor: 'tec' },
    ACEXIII: { tipo: 'ACEX', cor: 'acex' },
    AAIA: { tipo: 'CCO', cor: 'cco' },
    GPA: { tipo: 'CCO', cor: 'cco' },
    HG: { tipo: 'CCO', cor: 'cco' },
    OH: { tipo: 'CCO', cor: 'cco' },
    OU: { tipo: 'CCO', cor: 'cco' },
    QUA: { tipo: 'MAT', cor: 'mat' },
    SUE: { tipo: 'CCO', cor: 'cco' },
    ACEXIV: { tipo: 'ACEX', cor: 'acex' },
    APA: { tipo: 'CCO', cor: 'cco' },
    GIBH: { tipo: 'CCO', cor: 'cco' },
    RAD: { tipo: 'CCO', cor: 'cco' },
    PA: { tipo: 'CCO', cor: 'cco' },
    TE: { tipo: 'CCO', cor: 'cco' },
    ACEXV: { tipo: 'ACEX', cor: 'acex' },
    GTRS: { tipo: 'CCO', cor: 'cco' },
    TAA: { tipo: 'CCO', cor: 'cco' },
    OP2: { tipo: 'OPT', cor: 'opt' },
    TCC1: { tipo: 'TCC', cor: 'tcc' },
    TCC2: { tipo: 'TCC', cor: 'tcc' }
};

const matriculaAtiva = localStorage.getItem('matricula_logada');
if (!matriculaAtiva) {
    window.location.href = 'index.html';
}

const CHAVE_STORAGE = `progresso_${matriculaAtiva}`;
let estadoMaterias = {};
let concluidasSalvas = [];
let cursandoSalvo = [];
let dadosDoAluno = {};
let db = null;
let docFn = null;
let getDocFn = null;
let setDocFn = null;
let collectionFn = null;
let addDocFn = null;
let getDocsFn = null;
let queryFn = null;
let whereFn = null;
let storage = null;
let storageRefFn = null;
let uploadBytesFn = null;
let getDownloadURLFn = null;

const materias = Array.from(document.querySelectorAll('.materia-card'));
const totalMaterias = materias.length;
const modalElement = document.getElementById('materiaModal');
const modalBS = modalElement ? new bootstrap.Modal(modalElement) : null;
let idMateriaFoco = null;

function getCursoKey() {
    const cursoSelecionado = localStorage.getItem('curso_selecionado') || document.body.id || '';
    return String(cursoSelecionado).toLowerCase().replace(/\s+/g, '_');
}

function normalizarEstadoMaterias(entrada) {
    const resultado = {};
    if (!entrada || typeof entrada !== 'object') return resultado;

    Object.entries(entrada).forEach(([id, valor]) => {
        if (typeof valor === 'boolean') {
            resultado[id] = { concluida: valor, cursando: false };
        } else if (valor && typeof valor === 'object') {
            resultado[id] = {
                concluida: Boolean(valor.concluida),
                cursando: Boolean(valor.cursando)
            };
        }
    });

    return resultado;
}

function sincronizarVetores() {
    concluidasSalvas = Object.keys(estadoMaterias).filter(id => estadoMaterias[id]?.concluida);
    cursandoSalvo = Object.keys(estadoMaterias).filter(id => estadoMaterias[id]?.cursando);
}

function salvarEstadoLocal() {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(estadoMaterias));
}

async function initFirestore() {
    if (db && docFn && getDocFn && setDocFn) return;

    try {
        const firebaseModule = await import('./firebase.js');
        db = firebaseModule.db;
        docFn = firebaseModule.doc;
        getDocFn = firebaseModule.getDoc;
        setDocFn = firebaseModule.setDoc;
        collectionFn = firebaseModule.collection;
        addDocFn = firebaseModule.addDoc;
        getDocsFn = firebaseModule.getDocs;
        queryFn = firebaseModule.query;
        whereFn = firebaseModule.where;
        storage = firebaseModule.storage;
        storageRefFn = firebaseModule.ref;
        uploadBytesFn = firebaseModule.uploadBytes;
        getDownloadURLFn = firebaseModule.getDownloadURL;
    } catch (error) {
        console.warn('Firebase indisponível. O progresso ficará salvo apenas localmente.', error);
    }
}

async function carregarDadosDoFirestore() {
    if (!matriculaAtiva) return;

    await initFirestore();

    if (!db || !docFn || !getDocFn) {
        const estadoSalvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE) || 'null');
        estadoMaterias = normalizarEstadoMaterias(estadoSalvo || {});
        sincronizarVetores();
        atualizarInterface();
        return;
    }

    try {
        const alunoRef = docFn(db, 'alunos', matriculaAtiva);
        const alunoSnap = await getDocFn(alunoRef);

        if (alunoSnap.exists()) {
            dadosDoAluno = alunoSnap.data() || {};
            const materiasSalvas = dadosDoAluno.materias || {};
            estadoMaterias = normalizarEstadoMaterias(materiasSalvas);
            salvarEstadoLocal();
        } else {
            const estadoSalvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE) || 'null');
            estadoMaterias = normalizarEstadoMaterias(estadoSalvo || {});
            dadosDoAluno = { matricula: matriculaAtiva, curso: localStorage.getItem('curso_selecionado') || '', materias: {} };
        }
    } catch (error) {
        console.error('Erro ao carregar progresso no Firestore:', error);
        const estadoSalvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE) || 'null');
        estadoMaterias = normalizarEstadoMaterias(estadoSalvo || {});
    }

    sincronizarVetores();
    atualizarInterface();
    await carregarRepositorioDoFirestore();
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

        Object.entries(estadoMaterias).forEach(([id, estado]) => {
            materiasPayload[id] = {
                concluida: Boolean(estado?.concluida),
                cursando: Boolean(estado?.cursando)
            };
        });

        const progressoEstimado = totalMaterias > 0
            ? Math.round(((concluidasSalvas.length + cursandoSalvo.length) / totalMaterias) * 100)
            : 0;

        await setDocFn(alunoRef, {
            matricula: matriculaAtiva,
            curso: localStorage.getItem('curso_selecionado') || '',
            materias: materiasPayload,
            progresso: progressoEstimado,
            ultimaAtualizacao: new Date().toISOString()
        }, { merge: true });
    } catch (error) {
        console.error('Erro ao salvar progresso no Firestore:', error);
    }
}

function atualizarEstadoMateria(materia) {
    const id = materia.id;
    const estado = estadoMaterias[id] || {};
    const jaConcluida = Boolean(estado.concluida);
    const jaCursando = Boolean(estado.cursando);
    const requisito = materia.getAttribute('requisito');
    const requisitos = requisito ? requisito.split(/\s+/).filter(Boolean) : [];
    const estaBloqueada = requisitos.length > 0 && requisitos.some(reqId => !concluidasSalvas.includes(reqId));

    materia.classList.toggle('materia-concluida', jaConcluida);
    materia.classList.toggle('materia-cursando', jaCursando && !jaConcluida);
    materia.classList.toggle('materia-bloqueada', estaBloqueada && !jaConcluida && !jaCursando);

    const lockIcon = materia.querySelector('.materia-lock');
    if (lockIcon) {
        lockIcon.innerHTML = jaConcluida
            ? '<i class="bi bi-check-circle-fill" style="color:#16a34a"></i>'
            : jaCursando
                ? '<i class="bi bi-play-circle-fill" style="color:#2563eb"></i>'
                : estaBloqueada
                    ? '<i class="bi bi-lock-fill" style="color:#64748b"></i>'
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
    let concluidas = 0;
    let cursando = 0;

    materias.forEach(materia => {
        atualizarEstadoMateria(materia);
        const estado = estadoMaterias[materia.id] || {};
        if (estado.concluida) concluidas += 1;
        if (estado.cursando) cursando += 1;
    });

    const percentualEstimado = totalMaterias > 0 ? Math.round(((concluidas + cursando) / totalMaterias) * 100) : 0;

    const elPorc = document.getElementById('porcentagem');
    const elBarra = document.getElementById('progresso-fill');
    const elConcluidas = document.getElementById('concluidas');
    const elCursando = document.getElementById('cursando');
    const elTotal = document.getElementById('total');

    if (elPorc) elPorc.innerText = percentualEstimado + '%';
    if (elBarra) {
        elBarra.style.width = percentualEstimado + '%';
        if (cursando > 0) {
            elBarra.style.background = 'linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)';
        } else {
            elBarra.style.background = 'linear-gradient(90deg, #34d399 0%, #16a34a 100%)';
        }
    }
    if (elConcluidas) elConcluidas.innerText = concluidas;
    if (elCursando) elCursando.innerText = cursando;
    if (elTotal) elTotal.innerText = totalMaterias;

    sincronizarVetores();
    salvarEstadoLocal();
}

function renderizarRepositorio(materiaId) {
    const listaUI = document.getElementById('listaRepositorio');
    if (!listaUI) return;

    const materiaisData = REPOSITORIO_DATA[materiaId] || [];
    const materiaisCompartilhados = (dadosDoAluno.repositorio || []).filter(item => item.materiaId === materiaId);
    const listaFinal = [...materiaisData, ...materiaisCompartilhados];

    if (listaFinal.length > 0) {
        listaUI.innerHTML = listaFinal.map(item => `
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
}

async function carregarRepositorioDoFirestore() {
    if (!db || !collectionFn || !getDocsFn || !queryFn || !whereFn || !idMateriaFoco) return;

    try {
        const q = queryFn(collectionFn(db, 'repositorio'), whereFn('curso', '==', getCursoKey()), whereFn('materiaId', '==', idMateriaFoco));
        const snapshot = await getDocsFn(q);
        dadosDoAluno.repositorio = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (idMateriaFoco) {
            renderizarRepositorio(idMateriaFoco);
        }
    } catch (error) {
        console.error('Erro ao carregar repositório:', error);
    }
}

async function enviarArquivoRepositorio(arquivo) {
    if (!idMateriaFoco || !arquivo) return;
    if (!storage || !storageRefFn || !uploadBytesFn || !getDownloadURLFn || !db || !collectionFn || !addDocFn) {
        alert('O Firebase Storage não está disponível no momento.');
        return;
    }

    try {
        const nomeArquivo = `${Date.now()}_${arquivo.name.replace(/\s+/g, '_')}`;
        const caminho = `repositorio/${getCursoKey()}/${idMateriaFoco}/${nomeArquivo}`;
        const arquivoRef = storageRefFn(storage, caminho);
        await uploadBytesFn(arquivoRef, arquivo);
        const url = await getDownloadURLFn(arquivoRef);

        await addDocFn(collectionFn(db, 'repositorio'), {
            materiaId: idMateriaFoco,
            curso: getCursoKey(),
            nome: arquivo.name,
            url,
            uploadedBy: matriculaAtiva,
            uploadedAt: new Date().toISOString()
        });

        const inputArquivo = document.getElementById('inputArquivoRepositorio');
        if (inputArquivo) inputArquivo.value = '';

        await carregarRepositorioDoFirestore();
        alert('Arquivo enviado com sucesso para o repositório compartilhado.');
    } catch (error) {
        console.error('Erro ao enviar arquivo:', error);
        alert('Não foi possível enviar o arquivo no momento.');
    }
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

    materia.addEventListener('click', async function () {
        idMateriaFoco = this.id;
        if (!idMateriaFoco) return;

        document.getElementById('modalTitulo').innerText = texto;

        const estado = estadoMaterias[idMateriaFoco] || {};
        const btnConcluir = document.getElementById('btnAcaoConcluir');
        const btnCursando = document.getElementById('btnAcaoCursando');

        if (btnConcluir) {
            if (estado.concluida) {
                btnConcluir.innerHTML = '<i class="bi bi-x-circle me-2"></i>Desmarcar concluída';
                btnConcluir.className = 'btn btn-outline-danger fw-bold';
            } else {
                btnConcluir.innerHTML = '<i class="bi bi-check-circle me-2"></i>Marcar como concluída';
                btnConcluir.className = 'btn btn-success fw-bold';
            }
        }

        if (btnCursando) {
            if (estado.cursando) {
                btnCursando.innerHTML = '<i class="bi bi-x-circle me-2"></i>Desmarcar cursando';
                btnCursando.className = 'btn btn-outline-primary fw-bold';
            } else {
                btnCursando.innerHTML = '<i class="bi bi-play-circle me-2"></i>Marcar como cursando';
                btnCursando.className = 'btn btn-primary fw-bold';
            }
        }

        await carregarRepositorioDoFirestore();

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

        const estadoAtual = estadoMaterias[idMateriaFoco] || {};
        if (estadoAtual.concluida) {
            delete estadoMaterias[idMateriaFoco];
        } else {
            estadoMaterias[idMateriaFoco] = { concluida: true, cursando: false };
        }

        sincronizarVetores();
        salvarEstadoLocal();
        atualizarInterface();
        await salvarDadosNoFirestore();

        if (modalBS) {
            modalBS.hide();
        }
    });
}

const btnCursando = document.getElementById('btnAcaoCursando');
if (btnCursando) {
    btnCursando.addEventListener('click', async () => {
        if (!idMateriaFoco) return;

        const estadoAtual = estadoMaterias[idMateriaFoco] || {};
        if (estadoAtual.cursando) {
            delete estadoMaterias[idMateriaFoco];
        } else {
            estadoMaterias[idMateriaFoco] = { concluida: false, cursando: true };
        }

        sincronizarVetores();
        salvarEstadoLocal();
        atualizarInterface();
        await salvarDadosNoFirestore();

        if (modalBS) {
            modalBS.hide();
        }
    });
}

const btnEnviarArquivo = document.getElementById('btnEnviarArquivo');
if (btnEnviarArquivo) {
    btnEnviarArquivo.addEventListener('click', async () => {
        const inputArquivo = document.getElementById('inputArquivoRepositorio');
        const arquivoSelecionado = inputArquivo?.files?.[0];
        if (!arquivoSelecionado) {
            alert('Selecione um arquivo antes de enviar.');
            return;
        }

        await enviarArquivoRepositorio(arquivoSelecionado);
    });
}

carregarDadosDoFirestore();
