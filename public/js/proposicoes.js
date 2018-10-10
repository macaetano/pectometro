function exibirDadosPec(pecNum) {
    localStorage.setItem(`pec`, pecNum);
    window.location.href = 'file:///home/matheus/Documents/TIS/public/dadosPec.html';
}

// getUltimasProposicoes(5, function(response) { 
//     //carousel.preencherUltimasProposicoes(response);
//     carousel.addProposicao(response.dados[0], );
//     console.log(response.dados);
// });

// function getUltimasProposicoes(quant, cb) {
//     getIndexUltimaProposicao(function(ultima) {
//         for (var i = ultima; i > ultima - quant; i--) {
//             $.ajax({
//                 "type": "GET",
//                 "url": `https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${i}`,
//                 "success": function(response) {
//                     cb(response);
//                 }
//             });
//         }
//     });
// }

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