// ================= USUÁRIOS =================
const usuarios = [
  {
    matricula: "23715",
    nome: "AMANDA REGINA DA SILVA COSTA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "23719",
    nome: "MARLISSON JEAN CASTRO CRUZ",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "21945",
    nome: "ABEL TABOSA SILVA SANTOS",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "20291",
    nome: "ADILSON SAMUEL LIMA COELHO",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "21054",
    nome: "ANA CAROLINA MAGALHAES DE SENA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "22238",
    nome: "ANA CLARA LOPES DE SOUSA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "22340",
    nome: "CAROLINA DA SILVA PENHA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "11542",
    nome: "EVELINE GATO VIEIRA FERREIRA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "18081",
    nome: "JULYANNE MARIA NOGUEIRA RODRIGUES",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "7098",
    nome: "KLEBERTON ANGELO VIANA DA CRUZ",
    cargo: "Supervisor de agência III",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Carlos Eduardo - Coordenador Regional II"
  },
  {
    matricula: "21849",
    nome: "LUANA CAIRES BARBOSA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "15928",
    nome: "MARLIANE SANTOS DA CONCEICAO",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "13870",
    nome: "THIAGO MAIA DA SILVA",
    cargo: "Atendente Volante I",
    agencia: "",
    regional: "Oeste",
    gestor: "Carlos Eduardo - Coordenador Regional II"
  },
  {
    matricula: "5054",
    nome: "CARLOS EDUARDO ARAUJO DE ALMEIDA",
    cargo: "Coordenador Regional II",
    agencia: "",
    regional: "Oeste",
    gestor: "Tulia Lopes - Gerente de atendimento"
  },
  {
    matricula: "11544",
    nome: "RAIANE BENTES BATISTA",
    cargo: "Assistente de Treinamento",
    agencia: "",
    regional: "Oeste",
    gestor: "Tulia Lopes - Gerente de atendimento"
  },
  {
    matricula: "3270",
    nome: "TULIA GABRIELA MARQUES LOPES",
    cargo: "Gerente de Atendimento",
    agencia: "",
    regional: "Oeste",
    gestor: "Zuelem Mendes - Gerente Corporativa"
  }
];

// ================= LINKS =================
const linksDentro = {
  "Troca com Análise": "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jKbIdJUOUJRRUpFOVU2TFhKOVJYVVVCOEIwTjM3NS4u",
  "Reclamação": "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jKbIdJUN0NLQ0JPN0RVNUtXTlZaS1pQVDlLSTVDMy4u",
  "Plano de Contingência": "https://forms.office.com/pages/responsepage.aspx?id=UtPobFF_KUeKzTo8uhC_jAFRZMlEMmBOhSoASQsPrCNUMlJIRU9ITjBQU0NRSlFZTllMMVBRT1c4Ni4u&route=shorturl",
  "Controle de Serviços Manuais": "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jKbIdJUN043NEhYRUFYWVFYNDBLWDJWMEdZMlBDOC4u",
  "Reincidência": "https://forms.cloud.microsoft/pages/responsepage.aspx?id=UtPobFF_KUeKzTo8uhC_jAFRZMlEMmBOhSoASQsPrCNUMzZONTJEU0VaNFY4OTlVNVFCOEpLVDZITS4u&route=shorturl",
  "Gestão de Leitura": "https://docs.google.com/forms/d/e/1FAIpQLSflahhJcXxrB4h7KiXpvwwPFnAmNclhpdFI5EKnSyNiva1LnQ/viewform",
  "Gestão de Horas": "https://1drv.ms/x/c/988790b43fbb1367/IQSA2M10k-mVQ4iy6GFVzfhxAeqMxhbYdTVfQaiofoSsjmk?em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&edaebf=rslc0",
  "Agenda de Ações": "https://1drv.ms/x/c/988790b43fbb1367/IQTuArTaI8xaQYiQOsNJkaEWAYva8D1Li4p31qZmqQ4t51w?em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&edaebf=rslc0",
  "Gestão de Atividades": "https://1drv.ms/x/c/988790b43fbb1367/IQRBhaT8HC4DR6tPeMY4SKXPAVKZQVVci8c_-n84OqfNfQA?em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&edaebf=rslc0"
};

const linksFora = {
  "Troca por Análise com Desligamento": "https://1drv.ms/x/c/988790b43fbb1367/IQBnE7s_tJCHIICYbQEAAAAAAb5z4ni4ucOdb8Ofouc_uSs?e=VFqGeb",
  "Acompanhamento TSEE": "https://1drv.ms/x/c/988790b43fbb1367/IQB5QkXBFCcdS4qj0n6fh4C7ATcCqxS7VwMNddOwW2y9xOk?e=XxTzim",
  "Meu TMA": "https://1drv.ms/x/c/988790b43fbb1367/IQBZjy8TWAlTSqyi_nj5JNOXAaBRLudhA9CQgLGEyoMsW9c?e=JbitAC",
  "Nova Agenda Pará": "https://cgb-hub.vercel.app/"
};

// ================= ELEMENTOS =================
const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");

const loginForm = document.getElementById("loginForm");
const matriculaInput = document.getElementById("matriculaInput");
const loginError = document.getElementById("loginError");

const topUserText = document.getElementById("topUserText");
const profileButton = document.getElementById("profileButton");
const logoutButton = document.getElementById("logoutButton");

const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");

const iframe = document.getElementById("contentFrame");
const iframeTitle = document.getElementById("iframeTitle");

const profileFooter = document.getElementById("profileFooter");
const lastAccessText = document.getElementById("lastAccessText");

const profileName = document.getElementById("profileName");
const profileMatricula = document.getElementById("profileMatricula");
const profileCargo = document.getElementById("profileCargo");
const profileAgencia = document.getElementById("profileAgencia");
const profileRegional = document.getElementById("profileRegional");
const profileGestor = document.getElementById("profileGestor");

let usuarioLogado = null;

// ================= LOGIN =================
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const matricula = matriculaInput.value.trim();
  const user = usuarios.find(u => u.matricula === matricula);

  if (!user) {
    loginError.textContent = "Matrícula não autorizada. Entre em contato com a supervisão para liberação.";
    return;
  }

  usuarioLogado = user;

  topUserText.textContent = `${user.matricula} - ${user.nome}`;

  profileName.textContent = user.nome;
  profileMatricula.textContent = user.matricula;
  profileCargo.textContent = user.cargo;
  profileAgencia.textContent = user.agencia || "-";
  profileRegional.textContent = user.regional;
  profileGestor.textContent = user.gestor;

  lastAccessText.textContent = new Date().toLocaleString("pt-BR");

  loginScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
});

// ================= LOGOUT =================
logoutButton.addEventListener("click", () => {
  location.reload();
});

// ================= MENU =================
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const title = item.dataset.title || item.innerText.trim();

    navegar(title);
  });
});

// ================= CARDS HOME =================
document.querySelectorAll(".home-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title || card.innerText.trim();

    navegar(title);
  });
});

// ================= PERFIL =================
profileButton.addEventListener("click", () => {
  abrirPagina("profilePage");
  profileFooter.classList.remove("hidden");

  menuItems.forEach(i => i.classList.remove("active"));
});

// ================= NAVEGAÇÃO =================
function navegar(title) {
  profileFooter.classList.add("hidden");

  if (title === "Início") {
    abrirPagina("homePage");
    iframe.src = "";
    return;
  }

  if (title === "Scripts / Mensagens Padrão") {
    abrirPagina("scriptsPage");
    iframe.src = "";
    return;
  }

  if (linksDentro[title]) {
    abrirPagina("iframePage");
    iframeTitle.textContent = title;
    iframe.src = linksDentro[title];
    return;
  }

  if (linksFora[title]) {
    window.open(linksFora[title], "_blank");
    return;
  }

  if (title === "Registros de Reclamação") {
  abrirPagina("complaintPage");
  iframe.src = "";
  return;
  }

  abrirPagina("homePage");
}

// ================= TROCA DE PÁGINA =================
function abrirPagina(id) {
  pages.forEach(p => p.classList.remove("active-page"));
  document.getElementById(id).classList.add("active-page");
}

// ================= SCRIPTS =================
const scripts = [
  {
    titulo: "CHAMADO",
    texto: `Bom dia, Prezados,

Agência de Santarém sem internet

Chamado: xxxxxxxx
Qtd. PA’s: 12
Qtd. PA’s afetadas: 12
Foram verificados os cabos? SIM
Link de internet indisponível? SIM
SGA afetado? SIM
CRM/CCS afetado? SIM
Contato do supervisor: 93991416091

Att. Viúva Negra`
  },
  {
    titulo: "TRANSFERÊNCIA DE PARCELAMENTO EM APROVAÇÃO",
    texto: `Bom dia,

Favor transferir plano: 700003218320
Login: T17029
Classe: Residencial pleno
Faturas: Normal
Juros de financiamento: 1%
Retira juros: Não
Entrada: 15%
Parcelas: 48x

Att. Capitão América`
  },
  {
    titulo: "ENVIO DE SOLICITAÇÃO DE RETIRADA DE BLOQUEIO DE PROTESTO",
    texto: `Bom dia, Prezado,

Solicito a retirada do bloqueio de protesto para realização de reparcelamento, por favor.

NOME:
CPF:
CC:
PN:

Att. Feiticeira Escarlate`
  },
  {
    titulo: "SOLICITAÇÃO DE APOIO EMERGENCIAL",
    texto: `Bom dia,

Prezados,

Peço apoio, por gentileza, na nota de serviço de falta de energia. Cliente está há 3 dias sem energia em seu imóvel, e no local possui uma idosa de 80 anos.

Nota: 1117389678
Conta contrato: 3032494519
Instalação: 80036587
Equipe: SAN-E002M

Att. Thor`
  },
  {
    titulo: "STATUS DO ATENDENTE",
    texto: `📊 STATUS DO ATENDENTE - AG. SANTARÉM

Nome:
Login:
Matrícula:

📌 Presença:
Bateu ponto: ( ) Sim ( ) Não → Por quê:
Realizou DDS: ( ) Sim ( ) Não → Por quê:
Preencheu seu TMA: ( ) Sim ( ) Não → Por quê:

📌 Acessos às ferramentas?
SGA:
SAP CRM:
SAP CCS:
Aplicativo SAP Logon:
Portal de Serviços:
SOMOS:
BackOffice (Antigo):
BackOffice (Novo):
Aprend+:
Sisfeedback:
SIGA:
OPER:
Portal de redefinição de senhas e aplicativo autenticador:

🚨 Existe algum impedimento para atendimento?
( ) Não
( ) Sim → Qual:

📝 Observações:`
  },
  {
    titulo: "PARCELAMENTO FATURA PERIÓDICA",
    texto: `PARCELAMENTO DE FATURAS PERIÓDICAS

ENTRADA DE VALOR DE 50%: R$ 500,00
RESTANTE PARCELADO: 6X DE R$ 50,21
VALOR TOTAL: R$ 801,26

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO

CLIENTE CIENTE DE JUROS, MULTA, CORREÇÃO MONETÁRIA, MAIS 1% DO FINANCIAMENTO DO PARCELAMENTO CONFORME O IPCA.`
  },
  {
    titulo: "PARCELAMENTO FATURA CNR",
    texto: `PARCELAMENTO DE FATURA DE CONSUMO NÃO REGISTRADO

ENTRADA DE VALOR DE 50%: R$ 500,00
RESTANTE PARCELADO: 6X DE R$ 50,21
VALOR TOTAL: R$ 801,26

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO

CLIENTE CIENTE DE JUROS, MULTA, CORREÇÃO MONETÁRIA, MAIS 1% DO FINANCIAMENTO DO PARCELAMENTO CONFORME O IPCA.`
  },
  {
    titulo: "PARCELAMENTO FATURA GOLPES - SITE FALSO",
    texto: `PARCELAMENTO DE FATURAS NORMAIS REFERENTE AOS MESES 09/2024 E 10/2024, QUE FORAM PAGAS ATRAVÉS DE SITE FRAUDULENTO.

CONFORME INFORMATIVO 147/2023, GERADO PARCELAMENTO:
SEM ENTRADA, SEM JUROS, MULTA, CORREÇÃO MONETÁRIA E SEM 1% DE FINANCIAMENTO.

PARCELAS: 3X R$ 20,50
VALOR TOTAL: R$ 61,50

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO`
  },
  {
    titulo: "TRANSFERÊNCIA DE DÉBITO E PARCELAMENTO",
    texto: `TROCA DE TITULARIDADE PARA CLIENTE: CAPITÃ MARVEL (XXXXX)

CONTA CONTRATO:
ONDE NOVO CLIENTE IRÁ ASSUMIR TODO O DÉBITO.

ENTRADA DE VALOR DE 50%: R$ 500,00
RESTANTE PARCELADO: 6X DE R$ 50,21
VALOR TOTAL: R$ 801,26

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO

CLIENTE CIENTE DE JUROS, MULTA, CORREÇÃO MONETÁRIA, MAIS 1% DO FINANCIAMENTO DO PARCELAMENTO CONFORME O IPCA.`
  }
];

// ================= ELEMENTOS SCRIPTS =================
const searchInput = document.getElementById("scriptSearchInput");
const scriptsList = document.getElementById("scriptsList");
const selectedTitle = document.getElementById("selectedScriptTitle");
const selectedText = document.getElementById("selectedScriptText");
const copyButton = document.getElementById("copyScriptButton");
const copyFeedback = document.getElementById("copyScriptFeedback");

// ================= RENDER LISTA =================
function renderScripts(filtro = "") {
  if (!scriptsList) return;

  scriptsList.innerHTML = "";

  const termo = filtro.toLowerCase().trim();

  const filtrados = scripts.filter(s =>
    s.titulo.toLowerCase().includes(termo) ||
    s.texto.toLowerCase().includes(termo)
  );

  if (filtrados.length === 0) {
    scriptsList.innerHTML = `<div class="script-empty">Nenhum script encontrado.</div>`;
    return;
  }

  filtrados.forEach(script => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "script-item";
    item.innerHTML = `
      <strong>${script.titulo}</strong>
      <span>Clique para visualizar</span>
    `;

    item.addEventListener("click", () => {
      document.querySelectorAll(".script-item").forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");

      selectedTitle.textContent = script.titulo;
      selectedText.textContent = script.texto;
      copyButton.disabled = false;
      copyFeedback.textContent = "";
    });

    scriptsList.appendChild(item);
  });
}

// ================= ATIVAR SCRIPTS =================
if (searchInput && scriptsList && selectedTitle && selectedText && copyButton && copyFeedback) {
  renderScripts();

  searchInput.addEventListener("input", () => {
    renderScripts(searchInput.value);
  });

  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(selectedText.textContent);

    copyFeedback.textContent = "Copiado com sucesso!";
    setTimeout(() => {
      copyFeedback.textContent = "";
    }, 2000);
  });
}

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(selectedText.textContent);

  copyButton.classList.add("copied");
  copyButton.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;

  copyFeedback.textContent = "Texto copiado com sucesso!";

  setTimeout(() => {
    copyButton.classList.remove("copied");
    copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
    copyFeedback.textContent = "";
  }, 2000);
});

// ================= REGISTROS DE RECLAMAÇÃO =================

const complaintType = document.getElementById("complaintType");
const complaintDynamicFields = document.getElementById("complaintDynamicFields");
const complaintResultText = document.getElementById("complaintResultText");
const copyComplaintButton = document.getElementById("copyComplaintButton");
const copyComplaintFeedback = document.getElementById("copyComplaintFeedback");

const complaintFields = {
  cnr: [
    ["valorFatura", "Valor da fatura", "text"],
    ["descricao", "Descrição da reclamação", "textarea"],
    ["solucao", "Solução pretendida", "textarea"],
    ["analise", "Análise do atendente", "textarea"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
    ["complementares", "Informações complementares", "textarea"]
  ],

  periodica: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["descricao", "Descrição da reclamação", "textarea"],
    ["solucao", "Solução pretendida", "textarea"],
    ["analise", "Análise do atendente", "textarea"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
    ["complementares", "Informações complementares", "textarea"]
  ],

  mla: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
    ["complementares", "Informações complementares", "textarea"]
  ],

  pagaNaoBaixada: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["dataPagamento", "Data do pagamento", "text"],
    ["modalidade", "Modalidade de pagamento", "select", ["PIX", "DÉBITO", "CRÉDITO", "CÓDIGO DE BARRAS"]],
    ["localPagamento", "Local do pagamento", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]]
  ],

  leituraInicial: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["tipoServico", "Reativação ou fiscalização", "select", ["REATIVAÇÃO", "FISCALIZAÇÃO"]],
    ["numeroNota", "Número da nota", "text"],
    ["dataLigacao", "Data da ligação", "text"],
    ["leituraLigacao", "Leitura no dia da ligação", "text"],
    ["leituraAnterior", "Leitura anterior da fatura reclamada", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]]
  ],

  geradora: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]]
  ],

  erroLeituraAtual: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["dataFoto", "Data da foto apresentada pelo cliente", "text"],
    ["leituraFoto", "Leitura que está na foto apresentada", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]]
  ],

  prazos: [
  ["notaReclamada", "Nota reclamada", "text"],
  ["servico", "Qual o serviço?", "text"],
  ["medida", "Em qual medida se encontra a nota?", "text"],
  ["prazoAtendimento", "Qual era o prazo de atendimento?", "select", ["60 DIAS", "120 DIAS", "365 DIAS"]],
  ["dataConclusao", "Data limite de conclusão", "text"],
  ["artigoAneel", "Número do artigo", "text"],
  ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
  ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
  ["telefone", "Telefone para contato", "text"],
  ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
  ["email", "E-mail", "text"],
  ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
  ["complementares", "Informações complementares", "textarea"]
],
};

function montarCamposReclamacao(tipo) {
  if (!complaintDynamicFields) return;

  if (!tipo) {
    complaintDynamicFields.innerHTML = `
      <div class="complaint-empty-state">
        <i class="fa-regular fa-hand-pointer"></i>
        <strong>Selecione um tipo de reclamação</strong>
        <span>Após selecionar, os campos específicos aparecerão aqui.</span>
      </div>
    `;
    complaintResultText.value = "";
    copyComplaintButton.disabled = true;
    return;
  }

  complaintDynamicFields.innerHTML = "";

  complaintFields[tipo].forEach(campo => {
    const [id, label, type, options] = campo;

    const wrapper = document.createElement("div");
    wrapper.className = "complaint-field";

    let inputHtml = "";

    if (type === "textarea") {
      inputHtml = `<textarea id="${id}" data-complaint-field rows="3"></textarea>`;
    } else if (type === "select") {
      inputHtml = `
        <select id="${id}" data-complaint-field>
          <option value="">Selecione...</option>
          ${options.map(op => `<option value="${op}">${op}</option>`).join("")}
        </select>
      `;
    } else {
      inputHtml = `<input id="${id}" data-complaint-field type="text" autocomplete="off" />`;
    }

    wrapper.innerHTML = `
      <label for="${id}">${label}</label>
      ${inputHtml}
    `;

    complaintDynamicFields.appendChild(wrapper);
  });

  document.querySelectorAll("[data-complaint-field]").forEach(input => {
    input.addEventListener("input", gerarTextoReclamacao);
    input.addEventListener("change", gerarTextoReclamacao);
  });

  gerarTextoReclamacao();
}

function valorCampo(id) {
  const campo = document.getElementById(id);
  if (!campo || !campo.value.trim()) return "";
  return campo.value.trim().toUpperCase();
}

function marcarOpcao(valorSelecionado, opcao) {
  return valorSelecionado === opcao ? "X" : " ";
}

function blocoContato() {
  const meio = valorCampo("meioResposta");
  const whatsapp = valorCampo("whatsapp");
  const horario = valorCampo("horario");
  const autoriza = valorCampo("autoriza");
  const telefone = valorCampo("telefone") || "(DDD) XXXXX";
  const email = valorCampo("email") || "NÃO INFORMADO";

  return `MEIO DE RESPOSTA DA RECLAMAÇÃO: TELEFONE (${marcarOpcao(meio, "TELEFONE")}) CARTA (${marcarOpcao(meio, "CARTA")}) E-MAIL (${marcarOpcao(meio, "E-MAIL")})

ACEITA RECEBER RESPOSTA / FATURA VIA WHATSAPP: SIM (${marcarOpcao(whatsapp, "SIM")}) NÃO (${marcarOpcao(whatsapp, "NÃO")})

TELEFONE PARA CONTATO: ${telefone}

MELHOR HORÁRIO PARA CONTATO: MANHÃ (${marcarOpcao(horario, "MANHÃ")}) TARDE (${marcarOpcao(horario, "TARDE")})

E-MAIL: ${email}

AUTORIZA TERCEIROS: SIM (${marcarOpcao(autoriza, "SIM")}) NÃO (${marcarOpcao(autoriza, "NÃO")})`;
}

function cienciaPrazo(dias = "10 DIAS ÚTEIS") {
  return `CLIENTE CIENTE DO PRAZO DE ATÉ ${dias} PARA RESPOSTA. CIENTE QUE A FATURA FICARÁ BLOQUEADA PARA SUSPENSÃO DURANTE O PERÍODO DA RECLAMAÇÃO. CIENTE QUE CASO IMPROCEDENTE SERÁ COBRADO MULTAS, JUROS E CORREÇÃO MONETÁRIA POR ATRASO NO PAGAMENTO, PERMANECENDO INALTERADO O VENCIMENTO. ORIENTADO QUE CASO NÃO CONCORDE COM A RESPOSTA DA EMPRESA PODERÁ INTERPOR RECURSO JUNTO A OUVIDORIA DA DISTRIBUIDORA.`;
}

function gerarTextoReclamacao() {
  const tipo = complaintType.value;
  if (!tipo) return;

  const insistencia = document.querySelector('input[name="complaintInsistencia"]:checked')?.value;
  const prefixoIC = insistencia === "sim"
    ? `IC - APÓS TODOS OS ESCLARECIMENTOS CLIENTE OPTOU POR DAR SEGUIMENTO A ABERTURA DA RECLAMAÇÃO\n\n`
    : "";

  let texto = "";

  if (tipo === "cnr") {
    texto = `RECLAMAÇÃO FATURA DE CONSUMO NÃO REGISTRADO (CNR) DE VALOR R$ ${valorCampo("valorFatura") || "0,00"}.

DESCRIÇÃO DA RECLAMAÇÃO: ${valorCampo("descricao")}

SOLUÇÃO PRETENDIDA: ${valorCampo("solucao")}

ANÁLISE DO ATENDENTE: ${valorCampo("analise")}

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo("15 DIAS")}`;
  }

  if (tipo === "periodica") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: ${valorCampo("descricao")}

SOLUÇÃO PRETENDIDA: ${valorCampo("solucao")}

ANÁLISE DO ATENDENTE: ${valorCampo("analise")}

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
  }

  if (tipo === "mla") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RECLAMA DA FATURA DO MÊS ${valorCampo("faturaReclamada")}, ONDE HOUVE COBRANÇA DUPLICADA DA FATURA RECLAMADA DE FORMA INDEVIDA EM SUA INSTALAÇÃO.

SOLUÇÃO PRETENDIDA: CANCELAMENTO DA FATURA DUPLICADA INDEVIDA

ANÁLISE DO ATENDENTE: EM ANÁLISE NO SISTEMA, CLIENTE É ATENDIDO PELO PROJETO PROGRAMA LUZ PARA TODOS REMOTOS, ONDE A COBRANÇA REFERENTE À FATURA ${valorCampo("faturaReclamada")} HOUVE DUPLICIDADE DE COBRANÇA APÓS CADASTRO BAIXA RENDA REALIZADO NA INSTALAÇÃO, SENDO A COBRANÇA GERADA DE FORMA INDEVIDA AO CLIENTE.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
  }

  if (tipo === "pagaNaoBaixada") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE INFORMA QUE REALIZOU O PAGAMENTO DA FATURA ${valorCampo("faturaReclamada")} NO VALOR DE R$ ${valorCampo("valorFatura")} NA DATA DO DIA ${valorCampo("dataPagamento")} PELA MODALIDADE DE ${valorCampo("modalidade")}, NO LOCAL ${valorCampo("localPagamento")}, CONFORME COMPROVANTE DE PAGAMENTO EM ANEXO. CONTUDO, ATÉ O PRESENTE MOMENTO O VALOR AINDA NÃO FOI BAIXADO NO SISTEMA.

SOLUÇÃO PRETENDIDA: SOLICITO A BAIXA DO VALOR.

ANÁLISE DO ATENDENTE: EM ANÁLISE, FOI VERIFICADO QUE O COMPROVANTE SE TRATA DE COMPROVANTE DE PAGAMENTO. AS INFORMAÇÕES NO COMPROVANTE ESTÃO CORRETAS, O VALOR NÃO GEROU CRÉDITO E NÃO ENTROU NO SISTEMA CONFORME A TRANSAÇÃO FPL9 EM LISTA DE PAGAMENTOS.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: EM ANEXO O COMPROVANTE DE PAGAMENTO, HISTÓRICO DE FATURAS ONDE MOSTRA A FATURA EM ABERTO E LISTA DE PAGAMENTO DA TRANSAÇÃO FPL9.

${cienciaPrazo()}`;
  }

  if (tipo === "leituraInicial") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RECLAMA DA FATURA REFERENTE A ${valorCampo("faturaReclamada")}, INFORMANDO VALOR ELEVADO. RELATA QUE SE TRATA DA PRIMEIRA FATURA APÓS ${valorCampo("tipoServico")} E QUE NÃO ADQUIRIU NOVOS EQUIPAMENTOS QUE JUSTIFIQUEM O CONSUMO. INFORMA AINDA QUE, NO MOMENTO DA LIGAÇÃO, PODE TER SIDO REGISTRADA LEITURA INCORRETA DO MEDIDOR.

SOLUÇÃO PRETENDIDA: SOLICITA REAJUSTE DA FATURA DE ACORDO COM A LEITURA INICIAL NO DIA DA SUA LIGAÇÃO.

ANÁLISE DO ATENDENTE: PROCEDENTE, POIS, DE ACORDO COM A NOTA DE ${valorCampo("tipoServico")} ${valorCampo("numeroNota")}, COM EVIDÊNCIAS DO DIA ${valorCampo("dataLigacao")}, NA QUAL CONSTA LEITURA ${valorCampo("leituraLigacao")}, IDENTIFICA-SE ERRO NA IMPLEMENTAÇÃO DA LEITURA INICIAL, UMA VEZ QUE NA FATURA RECLAMADA ${valorCampo("faturaReclamada")} FOI LANÇADA A LEITURA ${valorCampo("leituraAnterior")}. DIANTE DISSO, FAZ-SE NECESSÁRIO O REAJUSTE DA FATURA.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ERRO NA LEITURA INICIAL. NECESSÁRIO REFORMA DA FATURA.

${cienciaPrazo()}`;
  }

  if (tipo === "geradora") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RELATA QUE SUA UNIDADE COM SISTEMA DE GERAÇÃO PRÓPRIA APRESENTOU REGISTRO DE ENERGIA GERADA NO PERÍODO FATURADO, PORÉM INFORMA QUE NÃO HOUVE A DEVIDA COMPENSAÇÃO DESSE CRÉDITO NO CONSUMO DA UNIDADE CONSUMIDORA ASSOCIADA.

SOLUÇÃO PRETENDIDA: SOLICITA VERIFICAÇÃO QUANTO AO PROCESSAMENTO DA ENERGIA INJETADA NA REDE, BEM COMO A CORRETA APLICAÇÃO DOS CRÉDITOS CONFORME REGRAS DE COMPENSAÇÃO VIGENTES.

ANÁLISE DO ATENDENTE: APÓS ANÁLISE DA FATURA, FOI IDENTIFICADO QUE HÁ REGISTRO DE ENERGIA INJETADA, PORÉM OS CRÉDITOS NÃO FORAM APLICADOS NA COMPENSAÇÃO DO CONSUMO. DESSA FORMA, A RECLAMAÇÃO É PROCEDENTE, SENDO NECESSÁRIA A DEVIDA REGULARIZAÇÃO.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES:

${cienciaPrazo()}`;
  }

  if (tipo === "erroLeituraAtual") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RELATA QUE A LEITURA QUE ESTÁ NO SEU EQUIPAMENTO ESTÁ MENOR DO QUE A LEITURA QUE ESTÁ NA SUA FATURA. CLIENTE APRESENTOU FOTO DO MEDIDOR DO DIA ${valorCampo("dataFoto")} E A LEITURA QUE ESTÁ NO EQUIPAMENTO É ${valorCampo("leituraFoto")} (EM ANEXO).

SOLUÇÃO PRETENDIDA: REAJUSTE DA FATURA, DE ACORDO COM A LEITURA APRESENTADA.

ANÁLISE DO ATENDENTE: APÓS ANÁLISE DA FATURA, FOI IDENTIFICADO QUE A LEITURA APRESENTADA PELO CLIENTE ESTÁ DESCRESCENTE EM RELAÇÃO À LEITURA LANÇADA NA FATURA. DESSA FORMA, A RECLAMAÇÃO É PROCEDENTE, SENDO NECESSÁRIA A REFORMA DA FATURA.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES:

${cienciaPrazo()}`;
  }

  if (tipo === "prazos") {
  const numeroArtigo = valorCampo("artigoAneel");

const artigo = numeroArtigo
  ? ` CONFORME O ARTIGO ${numeroArtigo} DA RESOLUÇÃO 1000/2021 DA ANEEL, O PRAZO MÁXIMO PARA CONCLUSÃO É DE ${valorCampo("prazoAtendimento")}, CONFIGURANDO DESCUMPRIMENTO DO ATENDIMENTO PELA DISTRIBUIDORA.`
  : "";

  texto = `RECLAMAÇÃO DA NOTA ${valorCampo("notaReclamada")} SERVIÇO DE ${valorCampo("servico")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RECLAMA DE ATRASO NA EXECUÇÃO DA ${valorCampo("servico")}. CONFORME TERMO DE ACEITE, O PRAZO LIMITE PARA FINALIZAÇÃO ERA ${valorCampo("dataConclusao")}, PORÉM O SERVIÇO AINDA NÃO FOI REALIZADO.

SOLUÇÃO PRETENDIDA: SOLICITA PROVIDÊNCIAS URGENTES E ATUALIZAÇÃO SOBRE O ATENDIMENTO.

ANÁLISE DO ATENDENTE: APÓS ANÁLISE, IDENTIFICOU-SE QUE A NOTA ENCONTRA-SE NA ETAPA DE ${valorCampo("medida")}. O PRAZO DO SISTEMA INDICAVA CONCLUSÃO ATÉ ${valorCampo("dataConclusao")}, O QUE NÃO OCORREU.${artigo}

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
}
  complaintResultText.value = prefixoIC + texto;
  copyComplaintButton.disabled = false;
}

if (complaintType) {
  complaintType.addEventListener("change", () => {
    montarCamposReclamacao(complaintType.value);
  });

  document.querySelectorAll('input[name="complaintInsistencia"]').forEach(radio => {
    radio.addEventListener("change", gerarTextoReclamacao);
  });
}

if (copyComplaintButton) {
  copyComplaintButton.addEventListener("click", async () => {
    if (!complaintResultText.value.trim()) return;

    await navigator.clipboard.writeText(complaintResultText.value);

    copyComplaintButton.classList.add("copied");
    copyComplaintButton.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;
    copyComplaintFeedback.textContent = "Texto copiado com sucesso!";

    setTimeout(() => {
      copyComplaintButton.classList.remove("copied");
      copyComplaintButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
      copyComplaintFeedback.textContent = "";
    }, 2000);
  });
}