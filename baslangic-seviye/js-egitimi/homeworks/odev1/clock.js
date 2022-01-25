// ödev 1
//Basitçe sizden girişte isminizi isteyip sonra bu ismi karşılama ekranına
// yerleştirerek o anki saati ve günü gösteren bir ekran.

//isim al ve yazdır
let userName = prompt(" Adiniz:");

let info = document.querySelector("#info");

if (userName) {
  info.innerHTML = userName;
}

//Saat ve günü yazdır

//document.getElementById("myClock").innerHTML = Date();

var date = new Date().toLocaleString(); // tarih saati al
document.getElementById("myClock").innerHTML = date; // zaman id'li elemente yazdır
