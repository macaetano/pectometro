$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".collapsible").collapsible();
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {});
});

/*CAROUSEL*/
var b = false;
let imgs = [
  `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
  `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
  `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
  `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`,
  `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/eixo-monumental-brasilia-distrito-federal.jpg`
];

function enviarPEC() {
  $.ajax({
    type: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    url: "https://pectometro.herokuapp.com/message",
    data: {
      text: document.getElementById("comentario").value,
      pec: numero,
      username: document.getElementById("nomeTexto").value,
      userEmail: document.getElementById("emailTexto").value
    },
    success: function(response) {
      getMessages();
      clearComentarios();
      alert("Mensagem enviada com sucesso");
      console.log(response);
    }
  });
}

function clearComentarios() {
  $("#comentarios")[0].innerHTML = `<div class="comentario">
          <div class="autor-comentario"><span class="nome"></span><br/><span class="email"></span></div>
          <div class="conteudo-comentario"><span></span></div>
      </div>`;
}

function getMessages() {
  $.ajax({
    method: "get",
    url: "https://pectometro.herokuapp.com/messages/" + numero,
    success: function(response) {
      console.log(response);
      preencherComentarios(response.messages);
    }
  });
}

function showFiltros() {
  $("#aloalo").hide();
  $("#filter").show();
  $('.card').hide();
  $("#filter").addClass("fullHeight");
  $(".card-content").hide();
}

function hideFiltros() {
  $("#aloalo").show();
  $("#filter").hide();
  $('.card').show();
  $("#filter").removeClass("fullHeight");
  $(".card-content").show();
}