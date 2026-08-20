const campoTexto = document.getElementById("campoTexto");
const btnConsultar = document.getElementById("btnConsultar");
const btnLimpar = document.getElementById("btnLimpar");
const display = document.getElementById("display");

btnConsultar.addEventListener("click", function () {

    let cep = campoTexto.value;

    if (cep == "") {
        alert("Digite um CEP!");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {

            if (dados.erro) {
                alert("CEP não encontrado!");
                return;
            }

            display.innerHTML = "CEP: " + dados.cep + "<br>";
            display.innerHTML += "Logradouro: " + dados.logradouro + "<br>";
            display.innerHTML += "Bairro: " + dados.bairro + "<br>";
            display.innerHTML += "Cidade: " + dados.localidade + "<br>";
            display.innerHTML += "Estado: " + dados.uf;

            display.style.display = "block";
        });
});
btnLimpar.addEventListener("click", function () {

    campoTexto.value = "";
    display.innerHTML = "";
    display.style.display = "none";
});



 
