/* ---------- TELA INICIAL ---------- */

var imagens = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-DzTP9qxIy-5w7PJvFJXZW2lTf-fjqRJQr9Wvap1zY8cqPvr',
    'https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hVsfMp7KM_lG4PTGYcj_VE316qrGVkBPiizKLiYQ5pH39ltJ',
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrR7vmKvt5hRy_4KC5mi3sJnNi1WHqRQAqqpNF-MMMHJ3KUKH'
]

/* Ao carregar index, fazer get em últimas requisições e então preencher o carousel */
if (window.location.href.includes('index.html'))
    getUltimasProposicoes(5, preencherUltimasPecs);

function preencherUltimasPecs(pecs) {
    var div = $('#carousel-pecs')[0];
    for (var i in pecs) {
        var pec = pecs[i];
        div.innerHTML += `
        <div class="item ${i == 0 ? 'active' : ''}">
            <img src="${imagens[i]}" onclick="exibirDadosPec(${pec.id}, ${pec.numero})" alt="PEC ${pec.numero} / ${pec.ano}" style="width:100%;">
            <div class="carousel-caption">
            <h3>PEC ${pec.numero} / ${pec.ano}</h3>
            </div>
        </div>
        `;
    }
}

function getUltimasProposicoes(quant, cb) {
    $.ajax({
        "type": "GET",
        "crossDomain": true,
        "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?itens=${quant}&siglaTipo=PEC&ordem=DESC&ordenarPor=id&ano=${(new Date()).getFullYear()}`,
        "success": function(response) {
            cb(response.dados);
        }
    });
}

/* ---------- VISUALIZAÇÃO DA PEC ---------- */

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
            })
            console.log(response);
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