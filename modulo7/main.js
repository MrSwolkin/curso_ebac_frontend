const form = document.getElementById('form-numbers');//declarando variaveis
let campoA = document.getElementById('numero-A');
let campoB = document.getElementById('numero-B');

form.addEventListener('submit', function (e){
    e.preventDefault();
//iniciando declaração das variáveis
    const numeroA = parseFloat(document.getElementById("numero-A").value);
    const numeroB = parseFloat(document.getElementById("numero-B").value);
    let formValido = false;
    const mensagemSucesso = "<b>Correto! Valor B é maior que valor A.</b>"
    const mensagemErro = "<b>Invalido! Valor A é maior que valor B.</b>"
    const containerMensagemErro = document.querySelector('.error-message');
    const containerMensagemSucesso = document.querySelector('.success-message');
//função
    function validaValor(valorA, valorB){
        return valorB > valorA;

    }//fim da função

    formValido = validaValor(numeroA, numeroB);
    //inicio condicional (IF)
    if(formValido){
        
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';// para nao mostrar a mensagem de erro
        campoA.value = ' ';//para limpar campo do valor A
        campoB.value = ' ';//limpar o campo do valor B

    }//fim IF

    else {
        
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }//fim ELSE

})//fim do EVENTLISTENERs