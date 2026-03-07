let cart = [];

fetch("menu.json")
.then(res => res.json())
.then(data => {

let menuDiv = document.getElementById("menu");

data.forEach(item => {

let div = document.createElement("div");
div.className = "item";

div.innerHTML = `
<h3>${item.nome}</h3>
<p>R$ ${item.preco}</p>
<button onclick="addCart('${item.nome}',${item.preco})">Adicionar</button>
`;

menuDiv.appendChild(div);

});

});

function addCart(nome,preco){

cart.push({nome,preco});
renderCart();

}

function renderCart(){

let ul = document.getElementById("cart");
ul.innerHTML = "";

cart.forEach(i=>{
let li = document.createElement("li");
li.innerText = i.nome + " - R$"+i.preco;
ul.appendChild(li);
});

}

function enviarPedido(){

alert("Pedido enviado (teste)");

}
