var ementa = "";
var numero = localStorage.getItem('pecNum');
var ano    = localStorage.getItem('ano');
var politico    = localStorage.getItem('politico');

var id     = localStorage.getItem('pecId');

$.ajax({
    "type": "GET",
    "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${numero}&ano=${ano ? ano : ''}&autor=${politico}`,
    "success": function(response) {
        response.dados.forEach(element => {
            preencherPecs(element);
            getAutores(element.id);
        });
        id = response.dados[0].id;
        getAutores(id);
        getTramitacoes(id);
        getMessages()
        document.getElementById('numPec').innerHTML = 'PEC ' + numero + ' / ' + (ano ? ano : 2018);
        document.getElementById('ementa').innerHTML += response.dados[0].ementa;
    }
});

function keypress(e, i, type = 'pecNum', version = 'mobile') {
    if (e.key == `Enter`) {
        openPec(version, type);
    }
}

function openPec(version='mobile', type='pecNum') {
    if (version == 'mobile') {
        localStorage.setItem('pecNum', document.getElementById("search").value);
    } else {
        localStorage.setItem('pecNum', document.getElementById("search-pc").value);
    }
    localStorage.setItem('ano', document.getElementById("ano").value);
    localStorage.setItem('politico', document.getElementById("politico").value);

    //localStorage.setItem(`pecAno`, document.getElementById('ano').value);
    window.location.href = "./listasPec.html";
}

function preencherPecs(pec){
    var ul = document.getElementById('pecs');
    ul.innerHTML += `   
        <li class="collection-item">
            <div> <h3>PEC ${pec.numero}/${pec.ano}</h3>
                <a>Autor(es): <span id="autores-${pec.id}" style="line-height: 28px;"></span><a>
                <a href="#" class="secondary-content"><i onclick='setDados(${JSON.stringify(pec)})' class="material-icons">send</i>
                </a>
            </div>
        </li>
    `

}

function setDados(pec){
    console.log(pec.id);
    localStorage.setItem('pecNum', pec.numero);
    localStorage.setItem('pecAno', pec.ano);
    localStorage.setItem('pecId', pec.id);
    console.log(pec);
    window.location.href = './dadosPec.html';
}
function getAutores(id) {
    $.ajax({
        "type": "GET",
        "crossDomain": true,
        "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/autores`,
        "success": function(response) {
            var autores = response.dados;
            var result = '';
            if (autores) {
                autores.forEach(function(autor, index) {
                    if (index > 0) result += ", ";
                    result += autor.nome;
                });
            }
            console.log(autores);
            console.log(result);
            document.getElementById('autores-' + id).innerHTML = result;
        }
    });
}

function showFiltros() {
  $("#conteudo").hide();
  $("#filter").show();
  $('.card').hide();
  $("#filter").addClass("fullHeight");
  $(".card-content").hide();
}

function hideFiltros() {
  $("#conteudo").show();
  $("#filter").hide();
  $('.card').show();
  $("#filter").removeClass("fullHeight");
  $(".card-content").show();
}