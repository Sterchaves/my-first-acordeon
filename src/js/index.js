const itensPerguntasERespostas = document.querySelectorAll(".item")

itensPerguntasERespostas.forEach(function(item){
    item.addEventListener("click", function(){
        const itemAtivoAtual = document.querySelector(".item.ativo");
        itemAtivoAtual.classList.remove("ativo");
        item.classList.add("ativo");
    });
});


// A const itemAtivoAtual não está sendo lido