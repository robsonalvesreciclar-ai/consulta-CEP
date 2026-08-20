const campoTexto = document.getElementById("campoTexto");
const btnConsultar = document.getElementById("btnConsultar");
const btnLimpar = document.getElementById("btnLimpar");
const display = document.getElementById("display");

btnConsultar.addEventListener("click", function () {

    let cep = campoTexto.value.trim();
    if (cep === "") {
        alert("Digite um CEP!");
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            display.innerHTML =
                "CEP: " + dados.cep + "<br>" +
                "Logradouro: " + dados.logradouro + "<br>" +
                "Bairro: " + dados.bairro + "<br>" +
                "Cidade: " + dados.localidade + "<br>" +
                "Estado: " + dados.uf;
            display.style.display = "block";
        });
});

btnLimpar.addEventListener("click", function () {
    campoTexto.value = "";
    display.innerHTML = "";
    display.style.display = "none";
});



 
