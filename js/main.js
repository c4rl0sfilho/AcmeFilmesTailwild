'use strict'

$(document).ready(function(){
  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // Mais opções personalizadas...
  });
});




import {getFilmes, getFilmeByID, postFilme} from './filmes.js'

function criarCard(filme){
    const card = document.createElement('div')
    const tituloFilme = document.createElement('h1')
    tituloFilme.textContent = filme.nome
    card.appendChild(tituloFilme)

    return card
}



async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}
preencherContainer()

const filme = {
    "nome": "Todos Menos Você",
    "sinopse": "Baseado no comédia de William Shakespeare, Much Ado About Nothing, Todos Menos Você, é um longa que acompanha Bea (Sydney Sweeney) e Ben (Glen Powell), dois jovens que combinam um encontro após se esbarrarem nos corredores da faculdade em que estudam. Em uma noite quase perfeita, o jovem casal possui tudo para manter o contato: química, uma boa conversa e um incrível desejo um pelo outro. \nNo entanto, o primeiro encontro não passa disso, e a relação de ambos se esfria até pararem de se falar. Anos após a formatura, os dois acabam coincidentemente sendo convidados para o mesmo casamento na Austrália. \nLonge de casa e dos problemas, os dois acabam fazendo um trato, fingindo ser um casal para todos até o casamento acabar. \nMas a tarefa se torna complicada quando os convidados e familiares percebem a antipatia que nutrem um pelo outro, fazendo com que tornem o trabalho mais convincente e os encontros mais frequentes.",
    "duracao": "01:44:00",
    "data_lancamento": "2024-01-25",
    "data_relancamento": null,
    "foto_capa": "https://br.web.img3.acsta.net/c_310_420/pictures/23/10/19/16/00/5781108.jpg",
    "valor_unitario": 20
}

postFilme(filme)