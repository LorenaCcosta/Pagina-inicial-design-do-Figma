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
    inputQtd.value = parseInt(inputQtd.value) + 1 ;
  }
  
}
//Retirar quantidade do input
function diminuirQuantidade(botao) {
  
  var inputQtd = botao.parentNode.querySelector('.input-produto');

  var qtdAtual = parseInt(inputQtd.value);
  if (qtdAtual > 1) {
    inputQtd.value = parseInt(inputQtd.value) - 1;
  }
}
// Adicionar quantidade no carrinho
function addCarrinho(botao){
  var inputQtd = botao.parentNode.querySelector('.input-produto');
  var qtdCarrinho = document.getElementById("qtd-carrinho")
  var qtdAtual = parseInt(inputQtd.value);
  var qtdTotal = parseInt(qtdCarrinho.textContent);
  qtdCarrinho.textContent = qtdTotal + qtdAtual;
  
  inputQtd.value = 1;

    alert("Produto(s) adicionado(s) ao carrinho!");

}



  















// document.getElementById("entrar-conta");
// const displayNoneBackground = document.getElementById("div-cor-background");
// const displayBlockForm = document.getElementById("entrar-conta");
// const displayBlockBackground = document.getElementById("div-cor-background");

// //Ao clicar em Saiba Mais, irá rolar até ao final da página
// function saibaMaisScroll() {
//   var saibaMais = document.querySelector("h2");
//   saibaMais.scrollIntoView({ behavior: "smooth" });
// }

// function btnComprar(){
//   var compreAqui = document.getElementsByClassName("sect-3-produtos")[0];
//   compreAqui.scrollIntoView({ behavior: "smooth" });
// }
// // Abrir o formulario para entrar
// function abrirForm() {
//   displayBlockForm.style.display = "block";
//   displayBlockBackground.style.display = "block";
//   document.body.style.overflow = "hidden";
// }
// //Fechar o formulario apertando no X
// function fecharForm() {
//   displayNoneForm.style.display = "none";
//   displayNoneBackground.style.display = "none";
//   document.body.style.overflow = "auto";
// }
// //Ao clicar no checkbox a senha do input Password ira aparecer em texto
// function mostrarSenha() {
//   const senhaInput = document.getElementById("senha-div-entrar");
//   const checkBox = document.getElementById("mostrar-senha-checkbox");

//   if (checkBox.checked) {
//     senhaInput.type = "text";
//   } else {
//     senhaInput.type = "password";
//   }
// }

// //Mensagem se ao clicar o botão de enviar e a senha estiver incorreta
// var senhaCorreta = "minhasenha12";

// function btnEntrar(event) {
//   event.preventDefault();

//   const senhaInput = document.getElementById("senha-div-entrar").value;

//   if (senhaInput === senhaCorreta) {
//     alert('Bem-Vindo!');
//     displayNoneForm.style.display = "none";
//     displayNoneBackground.style.display = "none";
    

//   } else {
//     var mensagemSenhaIncorreta = document.getElementById("senha-incorreta");
//     mensagemSenhaIncorreta.innerHTML =
//       'Senha Incorreta, Por favor tente novamente. Caso se esqueceu da senha, aperte "esqueci a senha"';
//   }
// }