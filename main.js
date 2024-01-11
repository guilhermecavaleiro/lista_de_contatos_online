const form = document.getElementById('form-contatos');
const listaNomes = [];
const listaTelefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    totalContatos();
})

function adicionaLinha(){
    let nomeAtualInput = document.getElementById('nome-do-contato');
    let numeroAtualInput = document.getElementById('numero-do-contato');

    if (listaTelefones.includes(parseInt(numeroAtualInput.value))){
        alert(`O número ${numeroAtualInput.value} já foi adicionado a sua lista anteriormente.`)
    } else{
        listaNomes.push(nomeAtualInput.value);
        listaTelefones.push(parseInt(numeroAtualInput.value));

        let linha = "<tr>";
        linha += `<td>${nomeAtualInput.value}</td>`;
        linha += `<td>${numeroAtualInput.value}</td>`;
        linha += `<td><a href="https://web.whatsapp.com/send?phone=${numeroAtualInput.value}" target="_blank">Enviar Mensagem</a></td>`;
        linha += "</tr>";
    
        linhas += linha;
    }

    nomeAtualInput = '';
    numeroAtualInput = '';
}

function atualizaTabela(){
    const corpoDaTabela = document.querySelector('tbody');
    corpoDaTabela.innerHTML = linhas;
}

function calculaTotalContatos(){
    let totalContatos = 0;

    for(let i = 0; i < listaTelefones.length; i++){
        totalContatos ++;
    }
    return totalContatos;
}

function totalContatos(){
    document.getElementById('total-contatos-foot').innerHTML = calculaTotalContatos();
}