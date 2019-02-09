var ementa = "";
var numero = localStorage.getItem('pecNum');
var ano    = localStorage.getItem('ano');
var id     = localStorage.getItem('pecId');

console.log(id)

$.ajax({
    "type": "GET",
    "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`,
    "success": function(response) {
        id = response.dados.id;
        getAutores(id);
        getTramitacoes(id);
        getMessages()
        document.getElementById('numPec').innerHTML = 'PEC ' + numero + ' / ' + (response.dados.ano ? response.dados.ano : 2018);
        document.getElementById('ementa').innerHTML += titleCase(response.dados.ementa + "<br/> " + response.dados.ementaDetalhada);
        document.getElementById('constituicao').innerHTML += "<a href='"+response.dados.statusProposicao.url+"'>" + response.dados.statusProposicao.url + "</a>";
    }
});

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

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
    //localStorage.setItem(`pecAno`, document.getElementById('ano').value);
    window.location.href = './listasPec.html';
    
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
            <div class="conteudo-comentario" style='
                word-break: break-all;
              '><p>${comentario.text}</p></div>
        </div>`
    });
}