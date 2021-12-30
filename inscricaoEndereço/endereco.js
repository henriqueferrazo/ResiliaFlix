
$(function(){
    const $textCep = $('#cep');
    const $textEndereco = $('#endereco');
    const $textBairro = $('#bairro');
    const $textCidade = $('#cidade');
    const $textEstado = $('#estado');

   $textCep.on('change', function(){
    
    const valorCep = $textCep.val();
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;

    $.get({
        url : url
    }).done(function(valor){
        
        $textCep.val(valor.cep);
        $textEndereco.val(valor.logradouro);
        $textBairro.val(valor.bairro);
        $textCidade.val(valor.localidade);
        $textEstado.val(valor.uf);

    });


});

});