var ementa = "";
var numero = localStorage.getItem('pecNum');
var ano    = localStorage.getItem('pecAno');
var id     = localStorage.getItem('pecId');
$.ajax({
    "type": "GET",
    "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${numero}&ano=${ano ? ano : 2018}`,
    "success": function(response) {
        id = response.dados[0].id;
        getAutores(id);
        getTramitacoes(id);
        getMessages()
        document.getElementById('numPec').innerHTML = 'PEC ' + numero + ' / ' + (ano ? ano : 2018);
        document.getElementById('ementa').innerHTML += response.dados[0].ementa;
    }
});

function busca() {
  $.ajax({
    "type": "GET",
    "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${document.getElementById('search').value}&ano=${ano ? ano : 2018}`,
    "success": function(response) {
        document.getElementById('numPec').innerHTML = 'PEC ' + document.getElementById('search').value + ' / ' + (ano ? ano : 2018);
        document.getElementById('ementa').innerHTML = response.dados[0].ementa;
    }
  });
}

function keypress(e,i){
    if(e.key == `Enter`){
        openPec();
    }
}

  function openPec() {
      localStorage.setItem(`pecNum`, document.getElementById('search').value);
    localStorage.setItem(`pecAno`, document.getElementById('ano').value);
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
                <span class="nome">${comentario.username}</span>
                <br/><span class="email">${comentario.userEmail}</span>
            </div>
            <div class="conteudo-comentario"><span>${comentario.text}</span></div>
        </div>`
    });
}