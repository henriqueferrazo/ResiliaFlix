const entrar = document.getElementById('btnEntrar');
entrar.addEventListener('click', (event) => {
    event.preventDefault()
    

    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

   
        if(email.value == ''){
           email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
        }


        if(senha.value == ''){
            senha.classList.add('errorInput');
        } else {
            senha.classList.remove('errorInput');
        }

        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
            email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
        }


        if(senha.value.length <= 5) {
            senha.classList.add('errorInput');
        }else {
            senha.classList.remove('errorInput');
        }


        if(senha.value.length >= 5 == true && email.value.indexOf('@','.') >= 0 == true) {
            window.location.replace('./index.html');
        }
       
            
      
      
      
})

