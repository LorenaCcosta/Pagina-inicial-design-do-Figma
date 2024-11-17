// Função para rolar a página até "Saiba Mais"
function saibaMaisScroll() {
  document.querySelector("h2").scrollIntoView({ behavior: "smooth" });
}

// Função para rolar a página até os produtos
function btnComprar(){
  var compreAqui = document.getElementsByClassName("sect-3-produtos")[0];
  compreAqui.scrollIntoView({ behavior: "smooth" });
}

// Função para abrir o formulário de login
function abrirForm() {
  document.getElementById("entrar-conta").style.display = "block";
  document.getElementById("div-cor-background").style.display = "block";
  document.body.style.overflow = "hidden";
}

// Função para fechar o formulário de login
function fecharForm() {
  document.getElementById("entrar-conta").style.display = "none";
  document.getElementById("div-cor-background").style.display = "none";
  document.body.style.overflow = "auto";
}

// Função para mostrar a senha
function mostrarSenha() {
  const senhaInput = document.getElementById("senha-div-entrar");
  senhaInput.type = senhaInput.type === "password" ? "text" : "password";
}

// Função para verificar a senha ao clicar no botão de entrar
function btnEntrar(event) {
  event.preventDefault();

  const senhaCorreta = "minhasenha12";
  const senhaInput = document.getElementById("senha-div-entrar").value;
  const mensagemSenhaIncorreta = document.getElementById("senha-incorreta");

  if (senhaInput === senhaCorreta) {
    alert("Bem-Vindo!");
    fecharForm();
  } else {
    mensagemSenhaIncorreta.textContent =
      'Senha Incorreta. Por favor, tente novamente. Caso se esqueceu da senha, clique em "esqueci a senha".';
  }
}
//Mostrar lista ao passar o mouse em "Nossos Cafés"
function mostrarLista(){
  document.querySelector('.nossos-cafes').style.display = 'grid';

  document.querySelector('.sect-produtos').style.display = 'grid';
}
//Esconder a lista
function esconderLista(){
  document.querySelector('.nossos-cafes').style.display = 'none';

  document.querySelector('.sect-produtos').style.display = 'none';
}
//Adicionar quantidade do input
function adicionarQuantidade(botao) {
  
  var inputQtd = botao.parentNode.querySelector('.input-produto');
  
  if (inputQtd) {
    inputQtd.value = parseInt(inputQtd.value) + 1;
  }
}
//Retirar quantidade do input
function adicionarQuantidade(botao) {
  
  var inputQtd = botao.parentNode.querySelector('.input-produto');
  
  if (inputQtd) {
    inputQtd.value = parseInt(inputQtd.value) - 1;
  }
}