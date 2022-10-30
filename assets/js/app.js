//Declarações tela de login e conta
const nome = document.getElementById("input-name");
const cpf = document.getElementById("input-cpf");
const cel = document.getElementById("input-cel");
const password = document.getElementById("input-password");
const confirmPassword = document.getElementById("input-password-confirm");
const telaLogin = document.querySelector(".cadastro-screen");

const contasCadastradas = [];

const submitButton = document.getElementById("submit-button");
const clearButton = document.getElementById("clear-button");


//Declarações tela de operações
const selectOperacao = document.getElementById("operacao");
const valorOp = document.getElementById("valorOp");

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
};


//Definindo pattern campo de valor
const args = {
  allowNegative: false,
  negativeSignAfter: false,
  prefix: "R$",
  suffix: "",
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ",",
  thousandsSeparator: ".",
  cursor: "move",
};
const input = SimpleMaskMoney.setMask(valorOp, args);
input.formatToNumber();

//Desabilitando campo valor caso operação seja consulta de saldo
selectOperacao.addEventListener("change", () => {
  if (selectOperacao.value === "SALDO") {
    valorOp.disabled = true;
  } else {
    valorOp.disabled = false;
  }
});
