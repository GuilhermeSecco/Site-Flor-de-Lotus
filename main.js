$('#atendimento').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('.info').hide('.info')
    $('.contatos').hide('.contatos');
    $('.atendimento').show('.atendimento');
    $('#back').show('#back');
})

$('#contatos').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('.info').hide('.info');
    $('.atendimento').hide('.atendimento');
    $('.contatos').show('.contatos');
    $('#back').show('#back');
})

$('#reikiB').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('#reiki').show('#reiki');
    $('#back').show('#back');
})

$('#limpezaB').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('#limpeza').show('#limpeza');
    $('#back').show('#back');
})

$('#registrosB').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('#registros').show('#registros');
    $('#back').show('#back');
})

$('#energiaB').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('#energia').show('#energia');
    $('#back').show('#back');
})

$('#divorcioB').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('#divorcio').show('#divorcio');
    $('#back').show('#back');
})

$('#missaoB').click((event)=>{
    event.preventDefault();
    $('#area').hide('#area');
    $('.work').hide('.work');
    $('#missao').show('#rmissao');
    $('#back').show('#back');
})


$('#back').click((event)=>{
    event.preventDefault();
    $('#area').show('#area');
    $('.work').show('.work');
    $('.info').hide('.info');
    $('.atendimento').hide('.atendimento');
    $('.contatos').hide('.contatos');
    $('#back').hide('#back');
})

$('#seta').click((event)=>{
    event.preventDefault();
    $('#area').show('#area');
    $('.work').show('.work');
    $('.info').hide('.info');
    $('.atendimento').hide('.atendimento');
    $('.contatos').hide('.contatos');
    $('#back').hide('#back');
})


function enviarMsg(){
    var numero = "+5514981739355";

    var nomeA = document.querySelector('#nomeA').value;
    var idadeA = document.querySelector('#idadeA').value;
    var cidadeA = document.querySelector('#cidadeA').value;
    var civilA = document.querySelector('#civilA').value;
    var filhoA = document.querySelector('#filhoA').value;
    var trabalhoA = document.querySelector('#trabalhoA').value;
    var relaA = document.querySelector('#relaA').value;
    var saudeA = document.querySelector('#saudeA').value;
    var reliA = document.querySelector('#reliA').value;
    var motivoA = document.querySelector('#motivoA').value;

    var url = "https://wa.me/" + numero + "?text="
    +"Nome: " + nomeA+ "%0a"
    +"Idade: " + idadeA + "%0a"
    +"Cidade e Estado: " + cidadeA + "%0a"
    +"Estado Civil: " + civilA + "%0a"
    +"Quantidade de filhos: " + filhoA + "%0a"
    +"Trabalho: " + trabalhoA + "%0a"
    +"Relação familiar: " + relaA + "%0a"
    +"Problema de saúde: " + saudeA + "%0a"
    +"Religião ou seguimento espiritual: " + reliA + "%0a"
    +"Motivo do atendimento: " + motivoA + "%0a"

    window.open(url, '_blank').focus();
}


