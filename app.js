const tg=window.Telegram.WebApp;
tg.ready();
const user=tg.initDataUnsafe?.user;
if(user){
document.getElementById("welcome").textContent=`Witaj, ${user.first_name}!`;
}
