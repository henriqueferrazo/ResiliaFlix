const entrar = document.getElementById('btnEntrar');
entrar.addEventListener('click', (event) => {
    event.preventDefault()
    

    const email = document.getElementById('email');

   
        if(email.value == ''){
           email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
        }

        

        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
            email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
            const elementPai = document.getElementById('btns');
            const elementFilhogo = document.getElementById('email');
            const elementFilhogo2 = document.getElementById('btnEntrar');
            elementPai.removeChild(elementFilhogo);
            elementPai.removeChild(elementFilhogo2);
            const msg = document.getElementById('h6BOL');
            msg.innerHTML = "Email enviado, clique no botão entrar para voltar";
            const botao = document.getElementById('btnEntrar').innerText = "Voltar";
          
        }
      
})

