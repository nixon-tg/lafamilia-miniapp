const home=document.getElementById('home-page');
const contact=document.getElementById('contact-page');

document.getElementById('contactButton').onclick=()=>{
 home.classList.add('hidden');
 contact.classList.remove('hidden');
};

document.getElementById('backButton').onclick=()=>{
 contact.classList.add('hidden');
 home.classList.remove('hidden');
};

document.getElementById('writeButton').onclick=()=>{
 const url='https://t.me/elotonieja';
 if(window.Telegram&&Telegram.WebApp){
   Telegram.WebApp.openTelegramLink(url);
 }else{
   window.open(url,'_blank');
 }
};

document.getElementById('catalogButton').onclick=()=>{
 alert('Etap 2 - Katalog będzie dodany później.');
};
