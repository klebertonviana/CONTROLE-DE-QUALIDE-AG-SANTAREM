// ================= FUNÇÕES GLOBAIS =================
function saudacaoHorario() {
  const hora = new Date().getHours();

  if (hora < 12) {
    return "Bom dia,";
  } else if (hora < 18) {
    return "Boa tarde,";
  } else {
    return "Boa noite,";
  }
}

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
    matricula: "22272",
    nome: "MARCIELE FERREIRA SANTIAGO",
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

  if (title === "Gerador de Email") {
    abrirPagina("emailPage");
    iframe.src = "";
    return;
  }

  if (title === "Registros de Reclamação") {
    abrirPagina("complaintPage");
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

let scriptSelecionado = null;

// ================= RENDER LISTA MODERNA =================
function renderScripts(filtro = "") {
  if (!scriptsList) return;

  scriptsList.innerHTML = "";

  const termo = filtro.toLowerCase().trim();

  const filtrados = scripts.filter(script =>
    script.titulo.toLowerCase().includes(termo) ||
    script.texto.toLowerCase().includes(termo)
  );

  if (filtrados.length === 0) {
    scriptsList.innerHTML = `
      <div class="script-empty">
        <i class="fa-regular fa-folder-open"></i>
        <strong>Nenhum script encontrado</strong>
        <span>Tente pesquisar por outro termo.</span>
      </div>
    `;
    return;
  }

  filtrados.forEach((script, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "script-item";

    item.innerHTML = `
      <strong>${script.titulo}</strong>
      <span>Visualizar mensagem padrão</span>
    `;

    item.style.opacity = "0";
    item.style.transform = "translateY(6px)";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 35);

    item.addEventListener("click", () => {
      document
        .querySelectorAll("#scriptsList .script-item")
        .forEach(i => i.classList.remove("selected"));

      item.classList.add("selected");

      scriptSelecionado = script;

      selectedTitle.textContent = script.titulo;
      selectedText.textContent = script.texto;

      copyButton.disabled = false;
      copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
      copyButton.classList.remove("copied");
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

    selectedTitle.textContent = "Selecione um script";
    selectedText.textContent = "Clique em um script ao lado para visualizar o conteúdo completo.";
    copyButton.disabled = true;
    copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
    copyButton.classList.remove("copied");
    copyFeedback.textContent = "";
    scriptSelecionado = null;
  });

  copyButton.addEventListener("click", async () => {
    if (!scriptSelecionado) return;

    await navigator.clipboard.writeText(scriptSelecionado.texto);

    copyButton.classList.add("copied");
    copyButton.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;
    copyFeedback.textContent = "Texto copiado com sucesso!";

    setTimeout(() => {
      copyButton.classList.remove("copied");
      copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
      copyFeedback.textContent = "";
    }, 2000);
  });
}

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

// ================= BUSCA GERADOR DE EMAIL =================
const emailSearchInput = document.getElementById("emailSearchInput");
const emailTypesList = document.getElementById("emailTypesList");

if (emailSearchInput && emailTypesList) {
  const emailItems = emailTypesList.querySelectorAll(".script-item");

  emailItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(6px)";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 30);

    item.addEventListener("click", () => {
      emailItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
    });
  });

  emailSearchInput.addEventListener("input", () => {
    const termo = emailSearchInput.value.toLowerCase().trim();
    let encontrados = 0;

    emailItems.forEach(item => {
      const texto = item.innerText.toLowerCase();
      const encontrou = texto.includes(termo);

      item.style.display = encontrou ? "flex" : "none";

      if (encontrou) encontrados++;
    });

    let empty = document.getElementById("emailEmptyState");

    if (encontrados === 0) {
      if (!empty) {
        empty = document.createElement("div");
        empty.id = "emailEmptyState";
        empty.className = "script-empty";
        empty.innerHTML = `
          <i class="fa-regular fa-folder-open"></i>
          <strong>Nenhum tipo de e-mail encontrado</strong>
          <span>Tente pesquisar por outro termo.</span>
        `;
        emailTypesList.appendChild(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  });
}

// ================= BUSCA CAMPOS RECLAMAÇÃO =================
const complaintFilterInput = document.getElementById("complaintFilterInput");

if (complaintFilterInput) {
  complaintFilterInput.addEventListener("input", () => {
    const termo = complaintFilterInput.value.toLowerCase().trim();

    document.querySelectorAll("#complaintDynamicFields .complaint-field").forEach(field => {
      const texto = field.innerText.toLowerCase();
      field.style.display = texto.includes(termo) ? "block" : "none";
    });
  });
}

// ================= BUSCA TIPO DE RECLAMAÇÃO =================
const complaintTypeSearchInput = document.getElementById("complaintTypeSearchInput");
const complaintTypesList = document.getElementById("complaintTypesList");

if (complaintTypeSearchInput && complaintTypesList && complaintType) {
  const complaintTypeItems = complaintTypesList.querySelectorAll(".script-item");

  complaintTypeSearchInput.addEventListener("focus", () => {
    complaintTypesList.classList.remove("hidden");
  });

  complaintTypeSearchInput.addEventListener("input", () => {
    const termo = complaintTypeSearchInput.value.toLowerCase().trim();

    complaintTypesList.classList.remove("hidden");

    complaintTypeItems.forEach(item => {
      const texto = item.innerText.toLowerCase();
      item.style.display = texto.includes(termo) ? "flex" : "none";
    });
  });

  complaintTypeItems.forEach(item => {
    item.addEventListener("click", () => {
      complaintTypeItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");

      const tipo = item.dataset.value;
      const titulo = item.querySelector("strong").innerText;

      complaintType.value = tipo;
      complaintTypeSearchInput.value = titulo;

      montarCamposReclamacao(tipo);

      complaintTypesList.classList.add("hidden");
    });
  });

  document.addEventListener("click", (e) => {
    const clicouDentro =
      complaintTypeSearchInput.contains(e.target) ||
      complaintTypesList.contains(e.target);

    if (!clicouDentro) {
      complaintTypesList.classList.add("hidden");
    }
  });
}

// ================= GERADOR DE EMAIL =================

let emailTipoSelecionado = "";

// clique nos tipos de email
document.querySelectorAll("#emailTypesList .script-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.type || "";

    document.querySelectorAll("#emailTypesList .script-item").forEach(i => i.classList.remove("selected"));
    btn.classList.add("selected");

    document.getElementById("selectedEmailTitle").textContent = btn.querySelector("strong")?.innerText || "E-mail selecionado";

    emailTipoSelecionado = tipo;

    document.getElementById("emailTo").value = "";
    document.getElementById("emailCc").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";

    if (tipo === "poda") {
      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Número da Autorização da SEMMA</label>
          <input id="email_numero" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Solicitante</label>
          <input id="email_solicitante" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Conta contrato</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail</label>
          <input id="email_email" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Rua</label>
          <input id="email_rua" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Número</label>
          <input id="email_numero_endereco" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Complemento</label>
          <input id="email_complemento" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Bairro</label>
          <input id="email_bairro" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Cidade</label>
          <input id="email_cidade" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "furtoTrafoQueimado") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Tipo de ocorrência</label>
          <select id="email_ocorrencia">
            <option value="">Selecione</option>
            <option value="furto">FURTO DE TRANSFORMADOR</option>
            <option value="queimado">TRAFO QUEIMADO</option>
          </select>
        </div>

        <div class="complaint-field">
          <label>Conta contrato</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Nota</label>
          <input id="email_nota" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Cidade do TRAFO</label>
          <input id="email_cidade" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "conexaoMla") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Nome da comunidade</label>
          <input id="email_comunidade" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Nome do cliente</label>
          <input id="email_cliente" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone para retorno</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail para retorno</label>
          <input id="email_email" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "oficioAssociacaoMoradores") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Nome da associação (Ex: Bairro da Floresta / Comunidade Pérola do Maicá)</label>
          <input id="email_associacao" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Solicitante</label>
          <input id="email_solicitante" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone para retorno</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail para retorno</label>
          <input id="email_email" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "estornoTrocaTitularidadeFaturas") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Motivo do estorno da troca de titularidade</label>
          <textarea id="email_motivo"></textarea>
        </div>

        <div class="complaint-field">
          <label>Conta contrato atual</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Instalação</label>
          <input id="email_instalacao" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Titular atual</label>
          <input id="email_titular_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do atual titular</label>
          <input id="email_parceiro_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Titular anterior</label>
          <input id="email_titular_anterior" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do titular anterior</label>
          <input id="email_parceiro_anterior" autocomplete="off">
        </div>

        <div id="emailFaturasEstornoArea">
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_estorno_referencia" autocomplete="off" placeholder="Ex: 03/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_estorno_valor" autocomplete="off" placeholder="Ex: R$ 796,64">
          </div>
        </div>

        <div class="email-actions">
          <button id="addFaturaEstornoButton" class="copy-script-button" type="button">
            <i class="fa-solid fa-plus"></i>
            Adicionar fatura
          </button>
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

      document.getElementById("addFaturaEstornoButton").addEventListener("click", () => {
        const area = document.getElementById("emailFaturasEstornoArea");

        const linha = document.createElement("div");
        linha.className = "email-fatura-row";
        linha.innerHTML = `
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_estorno_referencia" autocomplete="off" placeholder="Ex: 04/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_estorno_valor" autocomplete="off" placeholder="Ex: R$ 1.645,46">
          </div>
        `;

        area.appendChild(linha);
      });

    } else if (tipo === "transferenciaTrocaTitularidadeFaturas") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Motivo da troca de titularidade</label>
          <textarea id="email_motivo"></textarea>
        </div>

        <div class="complaint-field">
          <label>Conta contrato atual</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Instalação</label>
          <input id="email_instalacao" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Titular atual</label>
          <input id="email_titular_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do atual titular</label>
          <input id="email_parceiro_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Novo titular</label>
          <input id="email_novo_titular" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do novo titular</label>
          <input id="email_parceiro_novo" autocomplete="off">
        </div>

        <div id="emailFaturasArea">
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_referencia" autocomplete="off" placeholder="Ex: 03/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_valor" autocomplete="off" placeholder="Ex: R$ 796,64">
          </div>
        </div>

        <div class="email-actions">
          <button id="addFaturaButton" class="copy-script-button" type="button">
            <i class="fa-solid fa-plus"></i>
            Adicionar fatura
          </button>
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

      document.getElementById("addFaturaButton").addEventListener("click", () => {
        const area = document.getElementById("emailFaturasArea");

        const linha = document.createElement("div");
        linha.className = "email-fatura-row";
        linha.innerHTML = `
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_referencia" autocomplete="off" placeholder="Ex: 04/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_valor" autocomplete="off" placeholder="Ex: R$ 1.645,46">
          </div>
        `;

        area.appendChild(linha);
      });

    } else if (tipo === "retiradaNegativacao") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Cliente apresentou evidência do APP/SITE do Serasa que mostra que está negativado?</label>
          <select id="email_evidencia_serasa">
            <option value="">Selecione</option>
            <option value="sim">SIM</option>
            <option value="nao">NÃO</option>
          </select>
        </div>

        <div id="emailRetiradaNegativacaoArea"></div>
      `;

      document.getElementById("generateEmailButton").disabled = true;

      document.getElementById("email_evidencia_serasa").addEventListener("change", () => {
        const evidencia = document.getElementById("email_evidencia_serasa").value;
        const area = document.getElementById("emailRetiradaNegativacaoArea");

        document.getElementById("emailTo").value = "";
        document.getElementById("emailCc").value = "";
        document.getElementById("emailSubject").value = "";
        document.getElementById("emailBody").value = "";
        document.getElementById("generateEmailButton").disabled = true;

        if (evidencia === "nao") {
          area.innerHTML = `
            <div class="complaint-empty-state aviso-carta">
              <i class="fa-solid fa-circle-info"></i>
              <strong>Atenção</strong>
              <span>
Prezado colaborador,

Para continuidade da solicitação e maior assertividade na tratativa, é obrigatório que o cliente apresente evidência de que seu CPF encontra-se negativado, por meio de print ou foto obtidos diretamente no aplicativo ou site da Serasa.

Observação: Não serão aceitas imagens provenientes de instituições bancárias ou estabelecimentos comerciais (como Magazine Luiza, Americanas, entre outros), uma vez que utilizam sistemas distintos e podem não refletir a situação atualizada. As evidências devem, obrigatoriamente, ser emitidas pela Serasa.
              </span>
            </div>
          `;
        }

        if (evidencia === "sim") {
          area.innerHTML = `
            <div class="complaint-field">
              <label>O débito da fatura já se encontra arrecadado no sistema SAP?</label>
              <select id="email_debito_arrecadado_negativacao">
                <option value="">Selecione</option>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
              </select>
            </div>

            <div id="emailRetiradaNegativacaoDados"></div>
          `;

          document.getElementById("email_debito_arrecadado_negativacao").addEventListener("change", () => {
            const arrecadado = document.getElementById("email_debito_arrecadado_negativacao").value;
            const dados = document.getElementById("emailRetiradaNegativacaoDados");

            document.getElementById("emailTo").value = "";
            document.getElementById("emailCc").value = "";
            document.getElementById("emailSubject").value = "";
            document.getElementById("emailBody").value = "";
            document.getElementById("generateEmailButton").disabled = true;

            if (arrecadado === "nao") {
              dados.innerHTML = `
                <div class="complaint-empty-state aviso-carta">
                  <i class="fa-solid fa-circle-info"></i>
                  <strong>Atenção</strong>
                  <span>
Prezado colaborador,

Considerando que o referido débito ainda não se encontra atualizado no sistema da Equatorial (SAP CRM), orientamos aguardar a efetivação da arrecadação, a qual ocorre de forma automática.

Ressaltamos que somente após a devida atualização no sistema será realizada a retirada de negativação automática, também no prazo interno de 5 dias.
                  </span>
                </div>
              `;
            }

            if (arrecadado === "sim") {
              dados.innerHTML = `
                <div class="complaint-field">
                  <label>Nome</label>
                  <input id="email_nome" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>CPF/CNPJ</label>
                  <input id="email_documento" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>Conta contrato</label>
                  <input id="email_conta" autocomplete="off">
                </div>
              `;

              document.getElementById("generateEmailButton").disabled = false;
            }
          });
        }
      });

    } else if (tipo === "cadastroLogradouro") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Localidade</label>
          <input id="email_localidade">
        </div>

        <div class="complaint-field">
          <label>Bairro</label>
          <input id="email_bairro">
        </div>

        <div class="complaint-field">
          <label>Tipo de logradouro</label>
          <select id="email_tipo">
            <option value="">Selecione</option>
            <option value="RUA">RUA</option>
            <option value="TRAVESSA">TRAVESSA</option>
            <option value="ALAMEDA">ALAMEDA</option>
            <option value="ESTRADA">ESTRADA</option>
            <option value="AVENIDA">AVENIDA</option>
            <option value="RODOVIA">RODOVIA</option>
            <option value="QUADRA">QUADRA</option>
            <option value="RAMAL">RAMAL</option>
            <option value="BECO">BECO</option>
            <option value="VIELA">VIELA</option>
            <option value="PRAÇA">PRAÇA</option>
            <option value="ACESSO">ACESSO</option>
          </select>
        </div>

        <div class="complaint-field">
          <label>Quantidade de ligações</label>
          <input id="email_qtd">
        </div>

        <div class="complaint-field">
          <label>Nome do logradouro</label>
          <input id="email_logradouro">
        </div>

        <div class="email-actions">
          <button id="gerarPlanilhaLogradouro" class="copy-script-button" type="button">
            <i class="fa-solid fa-file-excel"></i>
            Gerar planilha de logradouro
          </button>
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = true;

      document.getElementById("gerarPlanilhaLogradouro").addEventListener("click", async () => {
        const localidade = document.getElementById("email_localidade")?.value.trim();
        const bairro = document.getElementById("email_bairro")?.value.trim();
        const tipoLogradouro = document.getElementById("email_tipo")?.value.trim();
        const qtdLigacoes = document.getElementById("email_qtd")?.value.trim();
        const nomeLogradouro = document.getElementById("email_logradouro")?.value.trim();

        if (!localidade || !bairro || !tipoLogradouro || !qtdLigacoes || !nomeLogradouro) {
          alert("Preencha todos os campos antes de gerar a planilha.");
          return;
        }

        try {
          const response = await fetch("modelo-logradouro.xlsx");
          const arrayBuffer = await response.arrayBuffer();

          const workbook = new ExcelJS.Workbook();
          await workbook.xlsx.load(arrayBuffer);

          const sheet = workbook.worksheets[0];

          sheet.getCell("A6").value = localidade;
          sheet.getCell("B6").value = bairro;
          sheet.getCell("C6").value = tipoLogradouro;
          sheet.getCell("D6").value = Number(qtdLigacoes);
          sheet.getCell("E6").value = nomeLogradouro;

          const buffer = await workbook.xlsx.writeBuffer();

          const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          });

          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "Cadastro_Logradouro_Preenchido.xlsx";
          link.click();

          document.getElementById("generateEmailButton").disabled = false;

        } catch (error) {
          console.error(error);
          alert("Erro ao carregar o modelo de planilha.");
        }
      });

    } else if (tipo === "cartaAnuencia") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>O status da intimação está PROTESTADO ou CONFIRMADO?</label>
          <select id="email_status_intimacao">
            <option value="">Selecione</option>
            <option value="confirmado">CONFIRMADO</option>
            <option value="protestado">PROTESTADO</option>
          </select>
        </div>

        <div id="emailCartaAnuenciaArea"></div>
      `;

      document.getElementById("generateEmailButton").disabled = true;

      document.getElementById("email_status_intimacao").addEventListener("change", () => {
        const status = document.getElementById("email_status_intimacao").value;
        const area = document.getElementById("emailCartaAnuenciaArea");

        document.getElementById("emailTo").value = "";
        document.getElementById("emailCc").value = "";
        document.getElementById("emailSubject").value = "";
        document.getElementById("emailBody").value = "";
        document.getElementById("generateEmailButton").disabled = true;

        if (status === "confirmado") {
          area.innerHTML = `
            <div class="complaint-empty-state aviso-carta">
              <i class="fa-solid fa-circle-info"></i>
              <strong>Atenção</strong>
              <span>
Prezado colaborador,

Caso o status da intimação esteja como CONFIRMADO, orientar o cliente a comparecer ao cartório no qual foi intimado para realizar o pagamento da fatura, acrescido da taxa de intimação junto ao órgão competente.

Caso o cliente tenha efetuado o pagamento da fatura enquanto o status da intimação ainda constava como CONFIRMADO, informar que o título seguirá para protesto, conforme a Lei do Protesto (Lei nº 9.492/1997). Nessa situação, será necessário aguardar a atualização do status da intimação para PROTESTADO, para que então seja possível solicitar a carta de anuência.
              </span>
            </div>
          `;
        }

        if (status === "protestado") {
          area.innerHTML = `
            <div class="complaint-field">
              <label>O débito da fatura já se encontra arrecadado no sistema SAP CRM?</label>
              <select id="email_debito_arrecadado">
                <option value="">Selecione</option>
                <option value="nao">NÃO</option>
                <option value="sim">SIM</option>
              </select>
            </div>

            <div id="emailCartaAnuenciaDados"></div>
          `;

          document.getElementById("email_debito_arrecadado").addEventListener("change", () => {
            const arrecadado = document.getElementById("email_debito_arrecadado").value;
            const dados = document.getElementById("emailCartaAnuenciaDados");

            document.getElementById("emailTo").value = "";
            document.getElementById("emailCc").value = "";
            document.getElementById("emailSubject").value = "";
            document.getElementById("emailBody").value = "";
            document.getElementById("generateEmailButton").disabled = true;

            if (arrecadado === "nao") {
              dados.innerHTML = `
                <div class="complaint-empty-state aviso-carta">
                  <i class="fa-solid fa-circle-info"></i>
                  <strong>Atenção</strong>
                  <span>
Prezado colaborador,

Considerando que o referido débito ainda não se encontra atualizado no sistema da Equatorial (SAP CRM), orientamos aguardar a efetivação da arrecadação, a qual ocorre de forma automática.

Ressaltamos que somente após a devida atualização no sistema será possível realizar a solicitação da carta de anuência.
                  </span>
                </div>
              `;
            }

            if (arrecadado === "sim") {
              dados.innerHTML = `
                <div class="complaint-field">
                  <label>Titular</label>
                  <input id="email_titular" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>CPF / CNPJ</label>
                  <input id="email_documento" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>Conta contrato</label>
                  <input id="email_conta" autocomplete="off">
                </div>
              `;

              document.getElementById("generateEmailButton").disabled = false;
            }
          });
        }
      });

    } else {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-empty-state">
          <i class="fa-regular fa-envelope"></i>
          <strong>Modelo ainda não configurado</strong>
          <span>Esse tipo de e-mail será configurado posteriormente.</span>
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = true;
    }

  });
});


// ================= GERAR EMAIL =================

document.getElementById("generateEmailButton").addEventListener("click", () => {

  if (emailTipoSelecionado === "poda") {
    const numero = document.getElementById("email_numero")?.value.trim() || "";
    const solicitante = document.getElementById("email_solicitante")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const telefone = document.getElementById("email_telefone")?.value.trim() || "";
    const email = document.getElementById("email_email")?.value.trim() || "";

    const rua = document.getElementById("email_rua")?.value.trim() || "";
    const numeroEndereco = document.getElementById("email_numero_endereco")?.value.trim() || "";
    const complemento = document.getElementById("email_complemento")?.value.trim() || "";
    const bairro = document.getElementById("email_bairro")?.value.trim() || "";
    const cidade = document.getElementById("email_cidade")?.value.trim() || "";

    const endereco = `${rua}, Nº ${numeroEndereco}${complemento ? ", " + complemento : ""}, Bairro: ${bairro}, Cidade: ${cidade}`;
    const hoje = new Date().toLocaleDateString("pt-BR");

    document.getElementById("emailTo").value =
      "vanessa.maia@equatorialenergia.com.br; jerlison.tavares@equatorialenergia.com.br; jose.junior1@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "paola.moreira@equatorialenergia.com.br; lana.gomes@equatorialenergia.com.br; nayra.pinto@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; aline.riker@equatorialenergia.com.br; raiane.bentes@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      `SOLICITAÇÃO PODA DE ÁRVORE Nº ${numero} - CONTA CONTRATO: ${conta} – ${cidade}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Segue solicitação poda de árvore entregue hoje ${hoje} na agência Santarém, cliente está ciente que será realizado a comunicação ao mesmo em até 20 dias, para informar data prevista para atendimento da sua solicitação.

Solicitante: ${solicitante}
Telefone: ${telefone}
Endereço: ${endereco}
E-mail: ${email}`;

    return;
  }

  if (emailTipoSelecionado === "furtoTrafoQueimado") {
    const ocorrencia = document.getElementById("email_ocorrencia")?.value || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const nota = document.getElementById("email_nota")?.value.trim() || "";
    const cidade = document.getElementById("email_cidade")?.value.trim() || "";

    const tituloOcorrencia = ocorrencia === "furto"
      ? "FURTO DE TRANSFORMADOR"
      : "TRAFO QUEIMADO";

    document.getElementById("emailTo").value =
      "maria.santos@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "eldem.souza@equatorialenergia.com.br; clayson.almeida@equatorialenergia.com.br; aldelino.silva@equatorialenergia.com.br; edmilson.junior@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      `${tituloOcorrencia} - CONTA CONTRATO: ${conta} - ${cidade}`.toUpperCase();

    if (ocorrencia === "furto") {
      document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos para conhecimento e devidas providências a ocorrência de furto de transformador, informada por cliente que compareceu à agência de atendimento em Santarém, conforme boletim de ocorrência apresentado e em anexo.

Segue dados para análise:

Conta contrato: ${conta}
Nota: ${nota}
Cidade: ${cidade}

A supervisão da agência, Kleberton Viana, encontra-se em cópia para acompanhamento e apoio, caso necessário.`;
    } else {
      document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos para conhecimento e devidas providências a ocorrência de TRAFO queimado, informada por cliente que compareceu à agência de atendimento em Santarém.

Segue dados para análise:

Conta contrato: ${conta}
Nota: ${nota}
Cidade: ${cidade}

A supervisão da agência, Kleberton Viana, encontra-se em cópia para acompanhamento e apoio, caso necessário.`;
    }

    return;
  }

  if (emailTipoSelecionado === "conexaoMla") {
    const comunidade = document.getElementById("email_comunidade")?.value.trim() || "";
    const cliente = document.getElementById("email_cliente")?.value.trim() || "";
    const telefone = document.getElementById("email_telefone")?.value.trim() || "";
    const email = document.getElementById("email_email")?.value.trim() || "";

    document.getElementById("emailTo").value =
      "geraldo.silva@equatorialenergia.com.br; yuri.souza@equatorialenergia.com.br; matheus.c.soares@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "juliana.lima@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; suzane.oliveira@equatorialenergia.com.br; nayra.pinto@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; miriam.godinho@equatorialenergia.com.br; meciano.evaristo@equatorialenergia.com.br; carlindo.junior@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      `SOLICITAÇÃO DE ADESÃO – PROJETO PLPT REMOTO – ${comunidade}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos, para conhecimento e análise, o ofício entregue na agência de Santarém da ${comunidade}, referente à solicitação de adesão ao Projeto PLPT Remoto, conforme documento anexo.

Segue dados do solicitante:

Nome: ${cliente}
Telefone para retorno: ${telefone}
E-mail para retorno: ${email}

Permanecemos à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "oficioAssociacaoMoradores") {
    const associacao = document.getElementById("email_associacao")?.value.trim() || "";
    const solicitante = document.getElementById("email_solicitante")?.value.trim() || "";
    const telefone = document.getElementById("email_telefone")?.value.trim() || "";
    const email = document.getElementById("email_email")?.value.trim() || "";

    const nomeUpper = associacao.toUpperCase();

    let preposicao = "DA";

    if (nomeUpper.startsWith("BAIRRO")) {
      preposicao = "DO";
    } else if (nomeUpper.startsWith("COMUNIDADE")) {
      preposicao = "DA";
    }

    document.getElementById("emailTo").value =
      "aline.riker@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "nayra.pinto@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; miriam.godinho@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; carlindo.junior@equatorialenergia.com.br; suzane.oliveira@equatorialenergia.com.br; meciano.evaristo@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      `OFICIO - ASSOCIAÇÃO DE MORADORES ${preposicao} ${associacao}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados (as),

Segue oficio entregue na agência de Santarém ${preposicao.toLowerCase()} ${associacao}, conforme anexo,

Solicitante: ${solicitante}
Telefone de retorno: ${telefone}
E-mail de retorno: ${email}`;

    return;
  }

  if (emailTipoSelecionado === "estornoTrocaTitularidadeFaturas") {
    const motivo = document.getElementById("email_motivo")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const instalacao = document.getElementById("email_instalacao")?.value.trim() || "";
    const titularAtual = document.getElementById("email_titular_atual")?.value.trim() || "";
    const parceiroAtual = document.getElementById("email_parceiro_atual")?.value.trim() || "";
    const titularAnterior = document.getElementById("email_titular_anterior")?.value.trim() || "";
    const parceiroAnterior = document.getElementById("email_parceiro_anterior")?.value.trim() || "";

    const referencias = document.querySelectorAll(".email_fatura_estorno_referencia");
    const valores = document.querySelectorAll(".email_fatura_estorno_valor");

    let faturasTexto = "";

    referencias.forEach((ref, index) => {
      const referencia = ref.value.trim();
      const valor = valores[index]?.value.trim() || "";

      if (referencia || valor) {
        faturasTexto += `${referencia} – ${valor}\n`;
      }
    });

    document.getElementById("emailTo").value =
      "kleberton.cruz@cgbengenharia.com.br";

    document.getElementById("emailCc").value =
      "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      "EQTL PA - ESTORNO DE TROCA DE TITULARIDADE COM FATURA - REGIONAL OESTE";

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezado Kleberton,

Solicito seu apoio para solicitação de estorno de troca de titularidade com faturas, conforme dados abaixo:

Motivo: ${motivo}

Dados da unidade consumidora:
Conta contrato atual: ${conta}
Instalação: ${instalacao}

Titular atual:
Nome: ${titularAtual}
Parceiro do atual titular: ${parceiroAtual}

Titular anterior:
Nome: ${titularAnterior}
Parceiro do titular anterior: ${parceiroAnterior}

Faturas em aberto:
${faturasTexto}

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "transferenciaTrocaTitularidadeFaturas") {
    const motivo = document.getElementById("email_motivo")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const instalacao = document.getElementById("email_instalacao")?.value.trim() || "";
    const titularAtual = document.getElementById("email_titular_atual")?.value.trim() || "";
    const parceiroAtual = document.getElementById("email_parceiro_atual")?.value.trim() || "";
    const novoTitular = document.getElementById("email_novo_titular")?.value.trim() || "";
    const parceiroNovo = document.getElementById("email_parceiro_novo")?.value.trim() || "";

    const referencias = document.querySelectorAll(".email_fatura_referencia");
    const valores = document.querySelectorAll(".email_fatura_valor");

    let faturasTexto = "";

    referencias.forEach((ref, index) => {
      const referencia = ref.value.trim();
      const valor = valores[index]?.value.trim() || "";

      if (referencia || valor) {
        faturasTexto += `${referencia} – ${valor}\n`;
      }
    });

    document.getElementById("emailTo").value =
      "kleberton.cruz@cgbengenharia.com.br";

    document.getElementById("emailCc").value =
      "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      "EQTL PA - TRANSFERÊNCIA DE TROCA DE TITULARIDADE E FATURA - REGIONAL OESTE";

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezado Kleberton,

Solicito seu apoio para solicitação de troca de titularidade com transferência de faturas, conforme dados abaixo:

Motivo: ${motivo}

Dados da unidade consumidora:
Conta contrato atual: ${conta}
Instalação: ${instalacao}

Titular atual:
Nome: ${titularAtual}
Parceiro do atual titular: ${parceiroAtual}

Novo titular:
Nome: ${novoTitular}
Parceiro do novo titular: ${parceiroNovo}

Faturas em aberto:
${faturasTexto}

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "retiradaNegativacao") {
    const nome = document.getElementById("email_nome")?.value.trim() || "";
    const documento = document.getElementById("email_documento")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";

    document.getElementById("emailTo").value =
      "claudianna.gomes@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      `SOLICITAÇÃO DE RETIRADA DE NEGATIVAÇÃO - CPF: ${documento} - CONTA CONTRATO: ${conta}`;

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezada Claudiana,

Solicito seu apoio na análise e retirada de negativação, conforme dados abaixo.
Ressalto que o cliente apresentou evidência de negativação junto à Serasa, conforme documento anexo.

Nome: ${nome}
CPF/CNPJ: ${documento}
Conta contrato: ${conta}

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "cartaAnuencia") {
    const titular = document.getElementById("email_titular")?.value.trim() || "";
    const documento = document.getElementById("email_documento")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";

    document.getElementById("emailTo").value =
      "s_protesto@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "ISRAEL.SOUSA@EQUATORIALENERGIA.COM.BR; gilliard.vaz@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; ana.magalhaes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br";

    document.getElementById("emailSubject").value =
      `EQTL PA - SOLICITAÇÃO DE CARTA DE ANUÊNCIA - CONTA CONTRATO: ${conta} - REGIONAL OESTE`;

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Solicito a liberação da carta de anuência, tendo em vista que o débito intimado já se encontra com status PROTESTADO, bem como devidamente arrecadado no sistema SAP.

Segue dados para análise:

Titular: ${titular}
Conta contrato: ${conta}
CPF/CNPJ: ${documento}
Distribuidora: Pará

Permanecemos à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

});


// ================= COPIAR EMAIL =================

document.querySelectorAll("[data-copy-target]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-copy-target");
    const campo = document.getElementById(id);

    if (!campo || !campo.value.trim()) return;

    await navigator.clipboard.writeText(campo.value);

    btn.classList.add("copied");
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;

    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = `Copiar`;
    }, 2000);
  });
});