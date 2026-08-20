// 1 captura dos elementos

const campoTexto = document.getElementById('campoTexto');
const btnConsultar = document.getElementById('btnConsultar');
const btnLimpar = document.getElementById('btnLimpar');
const display = document.getElementById('display');


btnConsultar.addEventListener("click", function() {
    const campoTextoInput = campoTexto.value;
    if (campoTextoInput === "") {
        alert("ERRO !!!! Digite um CEP!!!");
        return;
    }
    const url = `https://viacep.com.br/ws/${campoTextoInput}/json/`;
    fetch(url)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dados) {
            console.log(dados);
            if (dados.erro) {
                alert("CEP não encontrado!");
                return;
            }
            display.innerHTML = `CEP: ${dados.cep}<br>`;
            display.innerHTML += `Logradouro: ${dados.logradouro}<br>`;
            display.innerHTML += `Bairro: ${dados.bairro}<br>`;
            display.innerHTML += `Cidade: ${dados.localidade}<br>`;
            display.innerHTML += `Estado: ${dados.uf}<br>`;
            display.style.display = "block";
        });
});
btnLimpar.addEventListener("click", function() {
    campoTexto.value = "";
    display.innerHTML = "";
    display.style.display = "none";

});



 
