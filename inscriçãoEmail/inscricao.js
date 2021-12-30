function validaEmail() {
  const email = document.querySelector(".text");
  const error = document.querySelector(".error");

  if (email.checkValidity()) {
    error.innerHTML = " ";
  } else if (!email.checkValidity()) {
    error.innerHTML = "E-mail invalido";
  }
}
function entrarEmail() {
  const email = document.querySelector(".text");
  const error = document.querySelector(".error");

  if (email.checkValidity()) {
    document.location.assign("../inscriçãoNomeSenha/inscricaoNomeSenha.html");
  }
}

const entrar = document.getElementById("btnEntrar");
entrar.addEventListener("click", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome");
  const sobrnome = document.getElementById("sobrnome");
  const idade = document.getElementById("idade");
  const celular = document.getElementById("celular");
  const senha = document.getElementById("senha");
  const confsenha = document.getElementById("conf-senha");

  if (nome.value == "") {
    nome.classList.add("errorInput");
  } else {
    nome.classList.remove("errorInput");
  }

  if (senha.value == "") {
    senha.classList.add("errorInput");
  } else {
    senha.classList.remove("errorInput");
  }

  if (sobrnome.value == "") {
    sobrnome.classList.add("errorInput");
  } else {
    sobrnome.classList.remove("errorInput");
  }
  if (idade.value == "") {
    idade.classList.add("errorInput");
  } else {
    idade.classList.remove("errorInput");
  }
  if (celular.value == "") {
    celular.classList.add("errorInput");
  } else {
    celular.classList.remove("errorInput");
  }
  if (confsenha.value == "") {
    confsenha.classList.add("errorInput");
  } else {
    confsenha.classList.remove("errorInput");
  }

  if (nome.value.length <= 5) {
    nome.classList.add("errorInput");
  } else {
    nome.classList.remove("errorInput");
  }

  if (sobrnome.value.length <= 5) {
    sobrnome.classList.add("errorInput");
  } else {
    sobrnome.classList.remove("errorInput");
  }

  if (confsenha.value.length <= 5) {
    confsenha.classList.add("errorInput");
  } else {
    confsenha.classList.remove("errorInput");
  }

  if (senha.value.length <= 5) {
    senha.classList.add("errorInput");
  } else {
    senha.classList.remove("errorInput");
  }

  if (celular.value.length <= 8) {
    celular.classList.add("errorInput");
  } else {
    celular.classList.remove("errorInput");
    
  }

  if(nome.value.length > 5 && sobrnome.value.length > 5 && confsenha.value.length > 5 && senha.value.length > 5 && celular.value.length > 8) {
    window.location.replace("../inscricaoEndereço/inscricaoEndereco.html");
  }
  
  
});
