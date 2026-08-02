document.getElementById("supportButton").addEventListener("click",()=>{
 if(window.Telegram&&Telegram.WebApp){
   Telegram.WebApp.openTelegramLink("https://t.me/elotonieja");
 }else{
   window.open("https://t.me/elotonieja","_blank");
 }
});

document.getElementById("catalogButton").addEventListener("click",()=>{
 alert("Etap 2 - Katalog będzie dodany w kolejnej wersji.");
});
