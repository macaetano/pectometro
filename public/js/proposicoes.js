getUltimasProposicoes(10, function(response) { 
    carousel.preencherUltimasProposicoes(response);
});

function getUltimasProposicoes(quant, cb) {
    $.ajax({
        "type": "GET",
        "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?itens=${quant}&siglaTipo=PEC&ordem=ASC&ordenarPor=id`,
        "success": function(response) {
            cb(response);
        }
    });
}