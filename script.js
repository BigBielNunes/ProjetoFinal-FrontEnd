var butao_mais_ps5_1  = document.querySelector("#butao-mais-ps5-1")
var butao_menos_ps5_1  = document.querySelector("#butao-menos-ps5-1")
var butao_mais_ps5_2  = document.querySelector("#butao-mais-ps5-2")
var butao_menos_ps5_2  = document.querySelector("#butao-menos-ps5-2")
var butao_mais_ps5_3  = document.querySelector("#butao-mais-ps5-3")
var butao_menos_ps5_3  = document.querySelector("#butao-menos-ps5-3")
var butao_mais_ps5_4  = document.querySelector("#butao-mais-ps5-4")
var butao_menos_ps5_4 = document.querySelector("#butao-menos-ps5-4")
var butao_mais_ps5_5  = document.querySelector("#butao-mais-ps5-5")
var butao_menos_ps5_5  = document.querySelector("#butao-menos-ps5-5")

var carrinho = document.querySelector("#carrinho")

var precoCarrinho = document.querySelector("#preco-carrinho")

// precoCarrinho.setAttribute('preco-carrinho','10,00')

var menu = document.querySelector("#xzc")
var boxSanduiche = document.querySelector("#header-sanduiche")

var carrinho = document.querySelector("#carrinho-img")

var butao_mais_xbox_1  = document.querySelector("#butao-mais-xbox-1")
var butao_menos_xbox_1  = document.querySelector("#butao-menos-xbox-1")
var butao_mais_xbox_2  = document.querySelector("#butao-mais-xbox-2")
var butao_menos_xbox_2  = document.querySelector("#butao-menos-xbox-2")
var butao_mais_xbox_3  = document.querySelector("#butao-mais-xbox-3")
var butao_menos_xbox_3  = document.querySelector("#butao-menos-xbox-3")
var butao_mais_xbox_4  = document.querySelector("#butao-mais-xbox-4")
var butao_menos_xbox_4  = document.querySelector("#butao-menos-xbox-4")
var butao_mais_xbox_5  = document.querySelector("#butao-mais-xbox-5")
var butao_menos_xbox_5  = document.querySelector("#butao-menos-xbox-5")

var verificar = JSON.parse(localStorage.getItem('carrinho'))
console.log(verificar)
if(!verificar){
    localStorage.setItem('carrinho',JSON.stringify([]))
}

carrinho.addEventListener('click', ()=>{
    var imagem = localStorage.getItem('img')

    const div = document.querySelector('#div');         

    var image = new Image(200, 200); // Largura (width) e altura (height).
    image.src = imagem;
          
    div.appendChild(image);
})
butao_mais_ps5_1.addEventListener('click', ()=>{    
    // alert("ola")
        var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
        localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/ps5-1.jpg']))
        
        let n1 = Number(precoCarrinho.value)
        n1.value = "10,00"
        // const div = document.getElementById("div");
        
        // const image = document.createElement("img");
        // image.src = "img/ps5-1.jpg"
        
        // div.appendChild(image); tentativa 2
})

// menu.addEventListener('click',()=>{
//     boxSanduiche.style.display = "block"
//     // alert("ola")
// })
butao_mais_ps5_2.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/ps5-2.jpg']))
})
butao_mais_ps5_3.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/ps5-3.jpg']))
})
butao_mais_ps5_4.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/ps5-4.jpg']))
})
butao_mais_ps5_5.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/ps5-5.jpg']))
})

butao_menos_ps5_1.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/ps5-1.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_ps5_2.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/ps5-2.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_ps5_3.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/ps5-3.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_ps5_4.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/ps5-4.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_ps5_5.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/ps5-5.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_mais_xbox_1.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/xbox-1.jpg']))
})
butao_mais_xbox_2.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/xbox-2.jpg']))
})
butao_mais_xbox_3.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/xbox-3.jpg']))
})
butao_mais_xbox_4.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/xbox-4.jpg']))
})
butao_mais_xbox_5.addEventListener('click',()=>{
    var cacheCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    localStorage.setItem("carrinho",JSON.stringify([...cacheCarrinho,'img/xbox-5.jpg']))
})
butao_menos_xbox_1.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/xbox-1.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_xbox_2.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/xbox-2.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_xbox_3.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/xbox-3.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_xbox_4.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/xbox-4.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})
butao_menos_xbox_5.addEventListener('click',()=>{
    var excluirCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    var itemExcluido = excluirCarrinho.findIndex(item =>{
        return item == 'img/xbox-5.jpg'    
    })
    var carrinhoItemExcluido = excluirCarrinho.slice(itemExcluido + 1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoItemExcluido))
})