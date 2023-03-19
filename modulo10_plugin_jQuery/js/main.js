$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00.000-000', {
        placeholder: '00.000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true
            },
            telefon: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome.',
            cpf: 'Por favor, insira seu CPF.',
            email: 'Por favor, insira seu E-mail.',
            telefone: 'Por favor, insira seu Telefone.',
            endereço: 'Por favor, insira seu Endereço.',
            cep: 'Por favor, inira seu CEP.'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});