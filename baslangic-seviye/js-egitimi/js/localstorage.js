// // Local Storage:
// //----Veri Eklemek, Düzenlemek ve Silmek

// // localStorage icerisine bilgi kaydetmek:
// let email = "hakanyalcinkaya@gmail.com";
// localStorage.setItem("userEmail", email); // -> anahtar, deger yapisi kullanilir(key, value)

// // localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
// let localStorageEMailInfo = localStorage.getItem("userEmail"); // daha once atadigimiz anahtar bilgisi

// console.log(localStorageEMailInfo);

// // localStorage icerisinden istenilen Key bilgisinin silinmesi:
// localStorage.removeItem("userEmail"); // key bilgisini yazarak silebiliriz..

// //----Farklı Türde Veriler Eklemek

// // Local Storage Islemleri:
// // Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.

// let user = {userName: "hakanyalcinkaya", isActive: true}
// console.log(user)
// localStorage.setItem('userInfo', JSON.stringify(user) )

// let userInfo = localStorage.getItem('userInfo') // bilgiyi al
// userInfo = JSON.parse(userInfo)
// console.log(userInfo)

// // 2. egzersiz:
// let items = [1,2,3, user]
// // localStorage.setItem('newItems', items) // hatali :(
// localStorage.setItem('newItems', JSON.stringify(items))

// let newItems = JSON.parse( localStorage.getItem('newItem') ) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..

//----Bolum Egzersizi

let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  this.id == "increase" ? (counter += 1) : (counter -= 1);
  localStorage.setItem("counter", counter);
  counterDOM.innerHTML = counter;
}
