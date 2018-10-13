getUltimasProposicoes(5, () => { console.log(cb); })

function exibirDadosPec(pecNum) {
    localStorage.setItem(`pec`, pecNum);
    window.location.href = 'file:///home/matheus/Documents/TIS/public/dadosPec.html';
}

function getUltimasProposicoes(quant, cb) {
    $.ajax({
        "type": "GET",
        "crossDomain": true,
        "url": `https://www.camara.leg.br/SitCamaraWS/Proposicoes.asmx/ListarProposicoes?sigla=PEC&numero=&ano=${(new Date()).getFullYear()}&datApresentacaoIni=&datApresentacaoFim=&parteNomeAutor=&idTipoAutor=&siglaPartidoAutor=&siglaUFAutor=&generoAutor=&codEstado=&codOrgaoEstado=&emTramitacao=`,
        "success": function(response) {
            cb(response);
        }
    });
}

// function getIndexUltimaProposicao(cb, i=630) {
//     $.ajax({
//         "type": "GET",
//         "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${i}`,
//         "success": function(response) {
//             if (response.dados.length == 0) {
//                 cb(i - 1);
//             } else {
//                 getIndexUltimaProposicao(function(indice) {
//                     cb(indice);
//                 }, i+1);
//             }
//         }
//     });
//}