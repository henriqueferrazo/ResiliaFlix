$(function () {
  const $textCep = $("#cep");
  const $textEndereco = $("#endereco");
  const $textBairro = $("#bairro");
  const $textCidade = $("#cidade");
  const $textEstado = $("#estado");

  $textCep.on("change", function () {
    const valorCep = $textCep.val();
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;

    $.get({
      url: url,
    }).done(function (valor) {
      $textCep.val(valor.cep);
      $textEndereco.val(valor.logradouro);
      $textBairro.val(valor.bairro);
      $textCidade.val(valor.localidade);
      $textEstado.val(valor.uf);
    });
  });
});

const entrar = document.getElementById("btnEntrar");
entrar.addEventListener("click", (event) => {
  event.preventDefault();

  const cep = document.getElementById("cep");
  const endereco = document.getElementById("endereco");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const numero = document.getElementById("numero");
  const estado = document.getElementById("estado");
  const complemento = document.getElementById("complemento");
  const checkbox = document.getElementById('checkbox');
  const termos = document.getElementById('termos');


  if (cep.value == "" ) {
    cep.classList.add("errorInput");

  } else {
    cep.classList.remove("errorInput");
  }

  if (endereco.value == "") {
    endereco.classList.add("errorInput");
  } else {
    endereco.classList.remove("errorInput");
  }

  if (bairro.value == "") {
    bairro.classList.add("errorInput");
  } else {
    bairro.classList.remove("errorInput");
  }

  if (cidade.value == "") {
    cidade.classList.add("errorInput");
  } else {
    cidade.classList.remove("errorInput");
  }

  if (numero.value == "") {
    numero.classList.add("errorInput");
  } else {
    numero.classList.remove("errorInput");
  }

  if (estado.value == "") {
    estado.classList.add("errorInput");
  } else {
    estado.classList.remove("errorInput");
  }

  if (complemento.value == "") {
    complemento.classList.add("errorInput");
  } else {
    complemento.classList.remove("errorInput");
  }
 

  if (cep.value.length <= 8) {
    cep.classList.add("errorInput");
  } else {
    cep.classList.remove("errorInput");
  }
  
  if (endereco.value.length <= 4) {
    endereco.classList.add("errorInput");
  } else {
    endereco.classList.remove("errorInput");
  }

  if (bairro.value.length <= 4) {
    bairro.classList.add("errorInput");
  } else {
    bairro.classList.remove("errorInput");
  }

  if (cidade.value.length <= 4) {
    cidade.classList.add("errorInput");
  } else {
    cidade.classList.remove("errorInput");
  }

  if (numero.value.length <= 0) {
    numero.classList.add("errorInput");
  } else {
    numero.classList.remove("errorInput");
  }

  if (estado.value.length <= 1) {
    estado.classList.add("errorInput");
  } else {
    estado.classList.remove("errorInput");
  }

  if (complemento.value.length <= 0) {
    complemento.classList.add("errorInput");
  } else {
    complemento.classList.remove("errorInput");
  }

  if (cep.value.length > 8 && endereco.value.length > 4 && bairro.value.length > 4 && cidade.value.length > 4 && numero.value.length > 0 && estado.value.length > 1 && complemento.value.length > 0) {
    const elementoPai = document.querySelector('.col-md-4');
    const elementoPai2 = document.querySelector('.col-md-2');
    const elementoPai3 = document.querySelector('.bairro');
    const elementoPai4 = document.querySelector('.numero');
    const elementoPai5 = document.querySelector('.estado');
    const elementoPai6 = document.querySelector('.col-md-12');
    const elementoPai7 = document.querySelector('.cidade');
    const elementoPai8 = document.querySelector('.checkbox');
    const elementoPai9 = document.querySelector('.termos');
    
    elementoPai.removeChild(cep);
    elementoPai2.removeChild(endereco);
    elementoPai3.removeChild(bairro);
    elementoPai4.removeChild(numero);
    elementoPai5.removeChild(estado);
    elementoPai6.removeChild(complemento);
    elementoPai7.removeChild(cidade);
    elementoPai8.removeChild(checkbox);
    elementoPai9.removeChild(termos);
    
    
  }
});
