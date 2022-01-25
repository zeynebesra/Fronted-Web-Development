//--- Fonksiyon Nedir? Neden Kullanırız?

// function helloWorld() {
//   console.log("Hello World");
// }

// function hello() {
//   console.log("Merhaba");
//   helloWorld();
// }

// // hata alabiliriz...
// // function userCheck () {
// //     if (userName && age >= 18) {
// //         info.innerHTML = "ehliyet alabilirsiniz"
// //     } else if (!userName) {
// //         info.innerHTML = "Kullanici Adiniz Yok"
// //     } else if ( !(age >= 18) ) {
// //         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
// //     }
// // }

// hello(); // calistir

// --------------Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

// let firstName = "Lorem"

// function greetings(firstName="", lastName="") { // default parametre aliyor..
//     // console.log(`Merhaba ${firstName ? firstName : ""}`)
//     // console.log(`Merhaba ${firstName}`)
//     console.log(`Merhaba ${firstName} ${lastName}`)
// }

// console.log(firstName) // degisken
// greetings() // fonksiyona parametre gondermedik ??
// greetings("Parametre")

// function greetings2(firstName, lastName) {
//     let info = `Merhaba ${firstName} ${lastName}`
//     return info
// }

// let greetingsInfo = greetings2("Ad", "Soyad")
// // let info = "deneme" // ?????
// console.log(greetingsInfo)

// function domIdWriteInfo(id, info) {
//     let domObject = document.querySelector(`#${id}`)
//     domObject.innerHTML = info
// }

// let htmlInfo = `<span style="color:red">Color REDDDD</span>`

// domIdWriteInfo('greeting', htmlInfo)
// domIdWriteInfo('info', greetings2("Lorem", "Ipsum") )

//TEST

// function Question(hobby) {
//   switch (hobby) {
//     case "car":
//       return function (name) {
//         console.log(name + " do you have a car ?");
//       };
//       break;

//     case "book":
//       return function (name) {
//         console.log(name + " what is your favorite author?");
//       };
//       break;

//     case "software":
//       return function (name, type) {
//         console.log(name + " are you interested in " + type + "?");
//       };
//       break;

//     default:
//       return function (name) {
//         console.log(name + "  how are you ?");
//       };
//       break;
//   }
// }

// var softwareQuestion = Question("software");
// softwareQuestion("Cemre", "nodejs");

//-------- Arrow function Kullanimi

// function hello(firstName) {
//   console.log(`Merhaba ${firstName}`);
// }

// hello("JavaScript");

// const helloFuncV1 = (firstName) => {
//   console.log(`Merhaba ${firstName}`);
// };
// helloFuncV1("helloFuncV1");

// const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`); // bir parametre, bir donus islemi
// helloFuncV2("helloFuncV2");

// const helloFuncV3 = (firstName, lastName) =>
//   console.log(`Merhaba ${firstName} ${lastName}`); // console.log parantezi

// helloFuncV3("helloFuncV3", "Last Name info");

// const helloFuncV4 = (firstName, lastName) => {
//   let info = `Merhaba ${firstName} ${lastName}`;
//   console.log(info);
//   return info;
// };

// helloFuncV4("helloFuncV4", "Other Info");

//------DOM Etkinlikleriyle Calismak

// let greeting = document.querySelector("#info");
// greeting.addEventListener("click", domClick);

// function domClick() {
//   console.log("etkinlik denetlendi");
//   this.style.color == "red"
//     ? (this.style.color = "black")
//     : (this.style.color = "red");
// }

// --------Functions Bolum Sonu Egzersizi
//!!!!!!!!!! arttır-azlatt
// let counter = 0;
// let counterDOM = document.querySelector("#counter");
// let increaseDOM = document.querySelector("#increase");
// let decreaseDOM = document.querySelector("#decrease");

// counterDOM.innerHTML = counter;

// increaseDOM.addEventListener("click", clickEvent);
// decreaseDOM.addEventListener("click", clickEvent);

// function clickEvent() {
//   console.log(this.id);
//   this.id == "increase" ? (counter += 1) : (counter -= 1);
//   counterDOM.innerHTML = counter;
// }
