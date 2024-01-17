$(document).ready(function() {
    $("#cpf").mask("000.000.000-00", {
        placeholder: "111.222.333-44"
    })
    $("#tel").mask("(00) 0 0000-0000", {
        placeholder: "(21) 9 8765-4321"
    })
    $("#cep").mask("00000-000", {
        placeholder: "00000-000"
    })
    $("#cadastro").validate({
        rules: {
            cName: {
                required: true,
            },
            email: {
                required: true,
                email:true,
            },
            tel: {
                required: true,
            },
            address: {
                required: true,
            },
            cep: {
                required: true,
            },
            cpf: {
                required: true,
            }
        },
        messages: {
            cName: "Por favor insira seu nome"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(e, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
    })
})