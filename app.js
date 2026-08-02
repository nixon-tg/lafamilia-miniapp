const ids=['home','catalog','dead','contact'];
function show(id){ids.forEach(x=>document.getElementById(x).classList.add('hidden'));document.getElementById(id).classList.remove('hidden');}
catalogBtn.onclick=()=>show('catalog');
contactBtn.onclick=()=>show('contact');
catalogBack.onclick=()=>show('home');
deadBtn.onclick=()=>show('dead');
deadBack.onclick=()=>show('catalog');
contactBack.onclick=()=>show('home');
writeBtn.onclick=()=>{const u='https://t.me/elotonieja';if(window.Telegram&&Telegram.WebApp){Telegram.WebApp.openTelegramLink(u);}else{window.open(u,'_blank');}};
