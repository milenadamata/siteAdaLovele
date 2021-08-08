document.querySelector("#botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
  document.getElementById("email").value != "" && document.getElementById("telefone"))   
  {alert("Prontinho! você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, telefone e email.")
  }
}