var ementa = "";
var numero = localStorage.getItem('pecNum');
var id     = localStorage.getItem('pecId');
$.ajax({
    "type": "GET",
    "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${numero}&ano=2018`,
    "success": function(response) {
        id = response.dados[0].id;
        getAutores(id);
        getTramitacoes(id);
        var comentarios = [
          {
            "autor": {
              "nome": "Lucas Silveira Macedo",
              "email": "lucas.macedo@sga.pucminas.br"
            },
            "conteudo": "Achei bem ruim essa API. Na documentação não fala nada sobre ser obrigado a mandar o ano na requisição pra poder listar todas as PECs."
          },
          {
            "autor": {
              "nome": "Matheus de Assis Caetano",
              "email": "macaetano@gmail.com"
            },
            "conteudo": "Sei lá, só queria mesmo testar o Css com mais de um comentário."
          }
        ];
        preencherComentarios(comentarios);
        document.getElementById('numPec').innerHTML = 'PEC ' + numero + ' / 2018';
        document.getElementById('ementa').innerHTML += response.dados[0].ementa;
    }
});

function busca() {
  $.ajax({
    "type": "GET",
    "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${document.getElementById('search').value}&ano=2018`,
    "success": function(response) {
        document.getElementById('numPec').innerHTML = 'PEC ' + document.getElementById('search').value + ' / 2018';
        document.getElementById('ementa').innerHTML = response.dados[0].ementa;
    }
  });
}

function myscript(e,i){
  localStorage.setItem(`pecNum`, document.getElementById('search').value);
    if(e.key == `Enter`){
      busca();
    }
}

function exibirDadosPec(pecId, pecNum) {
    localStorage.setItem(`pecId`, pecId);
    localStorage.setItem(`pecNum`, pecNum);
    window.location.href = './dadosPec.html';
}

function getAutores(id) {
    $.ajax({
        "type": "GET",
        "crossDomain": true,
        "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/autores`,
        "success": function(response) {
            var autores = response.dados;
            document.getElementById("span-autor").innerHTML = autores.length > 1 ? "Autores: " : "Autor: ";
            if (autores) {
            autores.forEach(function(autor, index) {
                if (index > 0) document.getElementById("autores").innerHTML += ", ";
                document.getElementById("autores").innerHTML += autor.nome;
            });
            }
        }
    });
}

function getTramitacoes(id) {
    $.ajax({
        "type": "GET",
        "crossDomain": true,
        "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/tramitacoes`,
        "success": function(response) {
            console.log(response);
        }
    });
}

function preencherComentarios(comentarios) {
    comentarios.forEach(function(comentario) {
        $("#comentarios")[0].innerHTML += `
        <div class="comentario">
            <div class="autor-comentario">
                <span class="nome">${comentario.autor.nome}</span>
                <br/><span class="email">${comentario.autor.email}</span>
            </div>
            <div class="conteudo-comentario"><span>${comentario.conteudo}</span></div>
        </div>`
    });
}