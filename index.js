//Ao clicar em Saiba Mais, irá rolar até ao final da página
function saibaMaisScroll(){
    var link1 = document.querySelector("h2");
    link1.scrollIntoView({behavior: 'smooth'});

  }

function btnEntrar(){
  var entrarNaConta = document.getElementById('entrar-conta');
  console.log(entrarNaConta);
  entrarNaConta.style.display = "block";
}

  