const form = document.getElementById('form_comparativo');//criamos essa constante a fim de evitar a atualização do formulário.
form.addEventListener('submit',function(e){//evento em monitoramento é o submit, e a ação será chamar uma função na qual sempre irá ocorrer quando houver alguma ação no submit. Essa ação é denominada como e (evento)
    e.preventDefault();//essa função cancela a função padrão do submit (cancelando o reload da página)

    const valorA = document.getElementById('numeroA').value;
    const valorB = document.getElementById('numeroB').value;
    const mensagemSucesso = `O valor inserido em B foi de: ${valorB} <b>e o valor de A foi: ${valorA}</b>. Sendo assim sua requisição foi aprovada!<b/>`;
    const mensagemErro = `O valor inserido em B foi de: ${valorB} <b>e o valor de A foi: ${valorA}</b>. Sendo B menor que A não podemos processeguir com a requisição!`;

    var containerMensagemSucesso = document.querySelector('.sucess-message');
    var containerMensagemFalha = document.querySelector('.error-message');
    var formEValido = valorB >= valorA;
    if (formEValido){
        alert("Pedido realizado com sucesso!");
        
        document.querySelector('.sucess-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";
        containerMensagemFalha.style.display = "none";

    } else{
        alert("Não há estoque para o pedido!");

        document.querySelector('.error-message').innerHTML= mensagemErro;
        containerMensagemFalha.style.display = "block";
        containerMensagemSucesso.style.display = "none";

    }
})
