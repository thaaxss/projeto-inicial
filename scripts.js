var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero =  
var complemento = 
var bairro =  

function alertar(){
    // alert("O nome inserido foi " + nome.value);

    saida.innerText = "Nome:" + nome.value +
             "\n E-mail: " + email.value;
             "\n Telefone: " + telefone.value;
             "\n CEP: " + cep.value;
             "\n Logradouro: " + logradouro.value;
            

}

