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

function enviarPEC() {
  console.log(numero)
  $.ajax({
    type: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    url: 'http://localhost:8080/message',
    data: {
      email: 'teste@gmail.com',
      text: document.getElementById('textarea1').value,
      pec: numero ,
      username: 'teste',
      userEmail: 'teste@gmail.com',
    },
    "success": function(response){
      getMessages()
      clearComentarios()
      alert('Mensagem enviada com sucesso')
      console.log(response)
    }
  })
}

function clearComentarios() {
  $("#comentarios")[0].innerHTML = `<div class="comentario">
          <div class="autor-comentario"><span class="nome"></span><br/><span class="email"></span></div>
          <div class="conteudo-comentario"><span></span></div>
      </div>`
}

function getMessages () {
  $.ajax({
    method:'get',
    url: 'http://localhost:8080/messages/' + numero,
    success: function(response) {
      console.log(response)
      preencherComentarios(response.messages)
    }
})}
