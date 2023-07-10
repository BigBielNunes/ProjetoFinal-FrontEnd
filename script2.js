var buscaValor = JSON.parse(localStorage.getItem('carrinho'))

buscaValor.forEach(img => {
    
    var div = document.querySelector("#div")

    var imagem = new Image(200,200)
    imagem.src = img

    div.appendChild(imagem)

});


var Quantidade = document.querySelector("#Quantidade")
Quantidade.innerHTML = buscaValor.length    