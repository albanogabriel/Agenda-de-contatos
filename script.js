const form = document.querySelector('#form-contatos')
const nomes = []
const numeros = []

let linhas = ' '


form.addEventListener('submit' , function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
const nomeContato = document.querySelector('#nome-contato')
const numeroContato = document.querySelector('#numero-contato')
const iconeContato = '<img src="./images/user-icon-01.png" id="icon-user" alt="contato logo">'
const iconePhone = '<img src="./images/phone-icon-01.png" id="icon-phone" alt="">'

    if (nomes.includes(nomeContato.value) && numeros.includes(numeroContato.value)) {
        alert(`O nome ${nomeContato.value} e o número ${numeroContato.value} já foram adicionados!`)
    } else {
        nomes.push(nomeContato.value)
        numeros.push(numeroContato.value)

        let linha = '<tr>';
        linha += `<td> ${iconeContato} ${nomeContato.value} </td>`;
        linha += `<td> ${iconePhone} ${numeroContato.value} </td>`;
        linha += `</tr>`

        linhas += linha

    nomeContato.value = ' '
    numeroContato.value = ' '
    
}}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}


