//Seu JavaScript de validação aqui

const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const mensagemErroNome = document.querySelector('span.mensagem-erro-nome');
const mensagemErroEmail = document.querySelector('span.mensagem-erro-email');
const mensagemErroAssunto = document.querySelector('span.mensagem-erro-assunto');


campoNome.addEventListener('blur', function () {
    mensagemErroNome.innerHTML = '';
    if (campoNome.value == "") {
        mensagemErroNome.innerHTML = 'O campo "nome" precisa ser preenchido.';
    }
});

campoEmail.addEventListener('blur', function () {
    mensagemErroEmail.innerHTML = '';
    if (campoEmail.value == "") {
        mensagemErroEmail.innerHTML = 'O campo "E-mail" precisa ser preenchido.';
    }
});

campoAssunto.addEventListener('blur', function () {
    mensagemErroAssunto.innerHTML = '';
    if (campoAssunto.value == "") {
        mensagemErroAssunto.innerHTML = 'O campo "Assunto" precisa ser preenchido.';
    }
});