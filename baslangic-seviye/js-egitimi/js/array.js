// //--------1.) Dizi (Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak

// // Array olusturmak
// let domain = "kodluyoruz";
// let isActive = false;
// let items = [15, 25, 35, isActive, domain];
// console.log(items);

// let emptyArray = []; // bos list

// // Array icerisindeki eleman/oge sayisini ogrenmek
// console.log(
//   items.length // array icindeki oge sayisi
// );

// // document.querySelector("#info").innerHTML = items.length;

// // Array icindeki ilk elemanin cagirilmasi
// console.log(items[0]);

// // Array icindeki son elemanin cagirilmasi
// console.log(items[items.length - 1]);

// // Array icindeki ortadaki elemanin cagirilmasi
// console.log("ortadaki :", items[Math.floor(items.length / 2)]);

// // degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
// console.log(
//   typeof items // object olarak cikti veriyor
// );

// console.log(Array.isArray(items));

// // hangileri isArray -> True verir ?

// console.log("[] : ", Array.isArray([]));
// console.log("1 : ", Array.isArray(1));
// console.log("true : ", Array.isArray(true));

//------2.) Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi

// let items = [10, 20, 30, 40];
// console.log("items - ilk hali : ", items);

// // Array: sona oge/eleman eklemek -> push
// items.push(50);
// console.log("50 : ", items);

// // Array: basa oge eklemek -> unshift
// items.unshift(5);
// console.log("5 : ", items);

// // Array: sondaki ogeyi cikarmak -> pop
// let lastItem = items.pop(); // son elemani lastItem icerisine ekledik
// console.log("lastItem: ", lastItem, ", items: ", items);

// // Array: bastaki ogeyi cikarmak -> shift
// let firstItem = items.shift(); // ilk elemani firstItem icerisine ekledik
// console.log("firstItem: ", firstItem, ", items: ", items);

// // Array icindeki bir ogenin bilgisinin degistirilmesi:

// // ilk ogenin degistirilmesi
// items[0] = 5;
// console.log(items);

// // sonuncu ogenin degistirilmesi:
// items[items.length - 1] = 1000;
// console.log(items);

// items[2] = 10000;
// console.log(items);

//-----------3.) Array (Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5];

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers); //başına ekleme

items.push(maleUsers);

console.log(items);

console.log(items.length);
console.log(items[0].length); // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]); // Ayse bilgisine ulastik :)

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5);

console.log("newItems: ", newItems);
console.log("items: ", items);
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items;
console.log(items);

copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

console.log("kopyalandiktan sonraki hali:");
copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

let es6Items = [...items]; // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]; // es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melissa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);
