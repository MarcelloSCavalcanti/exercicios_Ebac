$(document).ready(function() {
    $("#cpf").mask("000.000.000-00", {
        placeholder: "111.222.333-44"
    })
    $("#tel").mask("(00) 0 0000-0000", {
        placeholder: "(21) 9 8765-4321"
    })
    $("#cep").mask("00000-000", {
        placeholder: "12345-678"
    })
    $("#cadastro").validate({
        rules: {
            cName: {
                required: true,
                minlength:3,
            },
            email: {
                required: true,
                email:true,
            },
            tel: {
                required: true,
                minlength: 16,
            },
            address: {
                required: true,
                minlength: 10,
            },
            cep: {
                required: true,
                minlength: 8,
            },
            cpf: {
                required: true,
                minlength: 14,
            }
        },
        messages: {
            cName: "Por favor insira seu nome completo!",
        },
        invalidHandler: function(e, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
    })
})