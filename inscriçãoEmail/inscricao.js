

function validaEmail(){
    const email = document.querySelector(".text")
    const error = document.querySelector(".error")

    if(email.checkValidity()){
        error.innerHTML = " "
    }else if(!email.checkValidity()){
        error.innerHTML = "E-mail invalido"
    }
}
function entrarEmail(){
    const email = document.querySelector(".text")
    const error = document.querySelector(".error")

    if(email.checkValidity()){
        document.location.assign("../inscriçãoNomeSenha/inscricaoNomeSenha.html")
    }
}
