var contato = [
    {
        "nome": "SAC -      ",
        "Contato": "1234.1234 - ",
        "email": "sac@fornada.com.br"
    },
    {
        "nome": "Administrativo - ",
        "Contato": "9878.2345 - ",
        "email": "adm@fornada.com.br"
    },
    {
        "nome": "Financeiro - ",
        "Contato": "1234.1234 - ",
        "email": "financeiro@fornada.com.br"
    }
]
function exibirContatos(){
var textoHTML = '';
        for(let x=0; x<contato.length; x++){
            textoHTML += `${contato[x].nome + contato[x].Contato + contato[x].email} <br>`;
        };
        var tela = document.getElementById('fale'); 
        tela.innerHTML = textoHTML;  
}
