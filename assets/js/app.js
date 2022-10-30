//Declarações tela de login e conta
const nome = document.getElementById("input-name");
const cpf = document.getElementById("input-cpf");
const cel = document.getElementById("input-cel");
const password = document.getElementById("input-password");
const confirmPassword = document.getElementById("input-password-confirm");
const telaLogin = document.querySelector(".cadastro-screen");

const contasCadastradas = [
  {
    nome: "Adalto",
    cpf: "12528235682",
    cel: "31985565662",
    password: "12345678",
  },
];

const submitButton = document.getElementById("submit-button");
const clearButton = document.getElementById("clear-button");

//Declarações tela de operações
const selectOperacao = document.getElementById("operacao");
const telaOperacoes = document.querySelector(".operacoes-screen");
const operarButton = document.getElementById("finalizar-button");
const clearOpButton = document.getElementById("clear-op-button");
const valorOp = document.getElementById("valorOp");
const contaOp = document.getElementById("contaOp");
const senhaOp = document.getElementById("senhaOp");

//Limpando campos
clearButton.addEventListener("click", (evento) => {
  evento.preventDefault();
  nome.value = "";
  cpf.value = "";
  cel.value = "";
  password.value = "";
  confirmPassword.value = "";
});

//Validando igualdade de senhas e criando conta
submitButton.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (password.value === confirmPassword.value) {
    criaConta();
  } else {
    alert("As senhas devem ser iguais.");
  }
});

//Funcionalidade de criação de contas
const criaConta = () => {
  const contaAtual = Math.floor(1000 + Math.random() * 90000);
  contasCadastradas.push({
    nome: nome.value,
    cpf: cpf.value,
    cel: cel.value,
    senha: password.value,
    conta: contaAtual,
    saldo: 0,
  });
  alert(`Conta ${contaAtual} registrada com sucesso.`);
  telaLogin.style.display = "none";
  telaOperacoes.style.display = "flex";
};

//Desabilitando campo valor caso operação seja consulta de saldo
selectOperacao.addEventListener("change", () => {
  if (selectOperacao.value === "SALDO") {
    valorOp.disabled = true;
  } else {
    valorOp.disabled = false;
  }
});

//Declarações operações
clearOpButton.addEventListener("click", (evento) => {
  evento.preventDefault();
  valorOp.value = "";
  contaOp.value = "";
  senhaOp.value = "";
});

operarButton.addEventListener("click", (evento) => {
  evento.preventDefault();

  switch (valorOp) {
    case "SALDO":
      break;
    case "SAQUE":
      break;
    case "DEPOSITO":
      break;
    default:
      alert("Operação inválida.");
  }
});

const obterConta = (conta) => {
  const contaCliente = contasCadastradas.find((c) => c.conta === conta);
  return contaCliente;
};

// //Função Saque
// const sacar = (){

// }

//Função Depósito
const depositar = (conta, valor) => {
  if (validarValor(valor)) {
    if (validarSaldo(conta, valor)) {
      let saldoAtual;
      const contasAtualizadas = contasClientes.map((c) => {
        if (c.conta === conta) {
          saldoAtual = c.saldo - valor;
          return { ...c, saldo: saldoAtual };
        }
        return c;
      });

      contasClientes = contasAtualizadas;

      alert(`Saque efetuado com sucesso! Saldo atual: ${saldoAtual}`);
    } else {
      alert("Saldo insuficiente");
    }
  } else {
    alert("Valor inválido");
  }
};

//Função Consulta de Saldo
const consultar = (conta) => {
  const contaCliente = obterConta(conta);

  alert(`Saldo atual: ${contaCliente.saldo}`);
};
