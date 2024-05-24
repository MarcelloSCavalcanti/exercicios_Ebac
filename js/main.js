$(document).ready(function() {
    $("#tel").mask("(00) 0 0000-0000", {
        placeholder: "(21) 9 8765-4321"
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
                required: false,
                minlength: 16,
            },
            message: {
                required: true,
                minlength: 10,
            },
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