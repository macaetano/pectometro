$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
  });

/*CAROUSEL*/
var b = false;
let imgs = [
    `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
    `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
    `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
    `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
    `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
]

class carousel {

  // static preencherUltimasProposicoes(pecs) {
  //     let div = $('#carousel-pecs > .carousel-slider')[0];
  //     pecs.dados.forEach(function(pec) {
  //         div.innerHTML += 
  //         `
  //             <div class="carousel-slide">
  //                 <h1>PEC ${pec.numero} / ${pec.ano}</h1>
  //             </div>
  //         `;
  //     });  
  // }

  // static addProposicao(pec) {
  //     let div = $('#carousel-pecs')[0];
  //     div.innerHTML += 
  //     `
  //         <div class="item ${!b ? 'active' : ''}">
  //             <img src="${imgs[0]}" alt="${pec.numero} / ${pec.ano}" style="width:100%;">
  //             <div class="carousel-caption">
  //             <h3>${pec.numero} / ${pec.ano}</h3>
  //             <p>LA is always so much fun!</p>
  //             </div>
  //         </div>

  //     `;
  //     b = true;
  //     imgs.splice(0,1);
  // }

}