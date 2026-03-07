const SUPABASE_URL = "https://wysllrtctdrbvexdphbn.supabase.co";
const SUPABASE_KEY = "sb_publishable_4ZVW7lEg8z9JJ06zP81SgQ_n8efyHvN";

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

async function enviarPedido(){

let pedido = {
cliente: "Teste",
telefone: "0000",
endereco: "Rua teste",
itens: cart,
total: cart.reduce((t,i)=>t+i.preco,0),
status: true
};

await fetch(SUPABASE_URL + "/rest/v1/pedidos",{
method:"POST",
headers:{
"apikey": SUPABASE_KEY,
"Authorization": "Bearer " + SUPABASE_KEY,
"Content-Type":"application/json"
},
body: JSON.stringify(pedido)
});

alert("Pedido enviado!");

}
