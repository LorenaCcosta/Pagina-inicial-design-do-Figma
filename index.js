// Função para rolar a página até o"Saiba Mais"
function saibaMaisScroll() {
  document.querySelector("h2").scrollIntoView({
     behavior: "smooth"
  });
}

// Função para rolar a página até os produtos
function btnComprar() {
  const compreAqui = document.getElementsByClassName("sect-3-produtos")[0];
  compreAqui.scrollIntoView({
     behavior: "smooth"
  });
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
  const checkBox = document.getElementById("mostrar-senha-checkbox");

  if (checkBox.checked) {
     senhaInput.type = "text";
  } else {
     senhaInput.type = "password";
  }
}

// Função para verificar a senha ao clicar no botão de entrar
function btnEntrar(event) {
  event.preventDefault();

  const senhaCorreta = "minhasenha12";
  const senhaInput = document.getElementById("senha-div-entrar").value;
  const mensagemSenhaIncorreta = document.getElementById("senha-incorreta");

  if (senhaInput === senhaCorreta) {
     alert("Bem-Vindo!");
     document.getElementById("senha-div-entrar").value = "";
     document.getElementById('email-div-entrar').value = "";
     mensagemSenhaIncorreta.textContent = "";
     fecharForm();

  } else {
     mensagemSenhaIncorreta.textContent =
        'Senha Incorreta. Por favor, tente novamente. Caso se esqueceu da senha, clique em "esqueci a senha".';
  }
}
//Mostrar lista ao passar o mouse em "Nossos Cafés"
function mostrarLista() {
  document.querySelector('.nossos-cafes').style.display = 'grid';

  document.querySelector('.sect-produtos').style.display = 'grid';
}
//Esconder a lista
function esconderLista() {
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
//Diminuira quantidade do input
function diminuirQuantidade(botao) {

  var inputQtd = botao.parentNode.querySelector('.input-produto');

  var qtdAtual = parseInt(inputQtd.value);

  if (qtdAtual > 1) {
     inputQtd.value = parseInt(inputQtd.value) - 1;
  }
}
// Adicionar quantidade no carrinho
function addCarrinho(botao) {
  var inputQtd = botao.parentNode.querySelector('.input-produto');
  var qtdCarrinho = document.getElementById("qtd-carrinho")
  var qtdAtual = parseInt(inputQtd.value);
  var qtdTotal = parseInt(qtdCarrinho.textContent);
  qtdCarrinho.textContent = qtdTotal + qtdAtual;

  inputQtd.value = 1;

  alert("Produto(s) adicionado(s) ao carrinho! Boas Compras!");

}

// Mensagem para aparecer se não preencher email que está no final da pagina 
function btnEmail(){
  var paragrafoEmail = document.getElementById("paragrafo-footer-email");
  var inputEmail = document.getElementById("email-input").value;

  if (inputEmail == 0) {
    paragrafoEmail.textContent = "Este é um campo obrigatório."
   
  } else {
    alert("E-mail cadastrado!")
  }
}