const nome = document.getElementById("input-name");
const cpf = document.getElementById("input-cpf");
const cel = document.getElementById("input-cel");
const password = document.getElementById("input-password");
const confirmPassword = document.getElementById("input-password-confirm");

const contasCadastradas = [];

const submitButton = document.getElementById("submit-button");
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", (evento) => {
  evento.preventDefault();
  nome.value = "";
  cpf.value = "";
  cel.value = "";
  password.value = "";
  confirmPassword.value = "";
});

submitButton.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (password.value === confirmPassword.value) {
    criaConta();
  } else {
    alert("As senhas devem ser iguais.");
  }
});

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
};
