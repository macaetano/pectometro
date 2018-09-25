class carousel {

    static preencherUltimasProposicoes(pecs) {
        let div = $('#carousel-pecs > .carousel-slider')[0];
        pecs.dados.forEach(function(pec) {
            div.innerHTML += 
            `
                <div class="carousel-slide">
                    <h1>PEC ${pec.numero} / ${pec.ano}</h1>
                </div>
            `;
        });  
    }

}