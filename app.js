let cart=0;
const wrap=document.getElementById("products");
products.forEach(p=>{
const d=document.createElement("div");
d.className="card";
d.innerHTML=`<h3>${p.name}</h3>
<div>${p.type}</div>
<div class='price'>${p.price} PLN</div>
<button class='add'>➕ Dodaj do koszyka</button>`;
d.querySelector("button").onclick=()=>{
cart++;
document.getElementById("count").textContent=cart;
};
wrap.appendChild(d);
});
if(window.Telegram?.WebApp){
Telegram.WebApp.ready();
Telegram.WebApp.expand();
const u=Telegram.WebApp.initDataUnsafe?.user;
if(u)document.getElementById("welcome").textContent=`Witaj ${u.first_name}!`;
}
