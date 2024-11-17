//Ao clicar em Saiba Mais, irá rolar até ao final da página
function saibaMaisScroll(){
    var link1 = document.querySelector("h2");
    link1.scrollIntoView({behavior: 'smooth'});

  }
// Abrir o formulario para entrar
function abrirForm(){
  document.getElementById("entrar-conta").style.display = "block";
  document.getElementById("div-cor-background").style.display = "block";
  document.body.style.overflow = "hidden";
}
//Fechar o formulario apertando no X
function fecharForm(){
  document.getElementById("entrar-conta").style.display = "none"
  document.getElementById("div-cor-background").style.display = "none";
  document.body.style.overflow = "auto"
}
//Ao clicar no checkbox a senha do input Password ira aparecer em texto
function mostrarSenha(){
  const senhaInput = document.getElementById('senha-div-entrar');
  const checkBox = document.getElementById('mostrar-senha-checkbox');
    if (checkBox.checked) {
      senhaInput.type = 'text';
      
    } else {
      senhaInput.type = 'password';
    }
}


//Mensagem se ao clicar o botão de enviar e a senha estiver incorreta
var senhaCorreta = "minhasenha12";

function btnEntrar(event){
  event.preventDefault();

  const senhaInput = document.getElementById('senha-div-entrar').value;

  if (senhaInput === senhaCorreta) {
    document.getElementById("entrar-conta").style.display = "none"
    document.getElementById("div-cor-background").style.display = "none";
    
  } else{
    document.getElementById('senha-incorreta').innerHTML = 'Senha Incorreta, Por favor tente novamente. Caso se esqueceu da senha, aperte "esqueci a senha"';
  }


}
