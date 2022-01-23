// Ternary Operator 3 adet parametre alan tek JavaScript operatörüdür.
//DERS

//* TEST */ undefined
// let boolean;

// const isBooleanTrue = boolean ? true : false;

// console.log(isBooleanTrue) >> false;

// console.log(boolean);

//TEST : Giriş Yapabilirsiniz
// let age = 24;
// let permission = age >= 18 ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

// console.log(permission);

//TEST :iki şehir aynı değil
// let firstCity = "Ankara";

// let secondCity = "İstanbul";
// const isEqual =
//   firstCity === secondCity ? "İki şehir aynı" : "İki şehir aynı değil";

// console.log(isEqual);

//TEST : Para miktarını girmen gerekmektedir.
// var money;
// var canBuy =
//   money < 17
//     ? "Satın alamazsın.."
//     : money > 30
//     ? "Satın alabilirsin.."
//     : "Para miktarını girmen gerekmektedir..";

// console.log(canBuy);

var user = "guest";
var price = 1;

console.log(price > 0 && !user == "guest");
console.log(price > 0 && user == "guest");
console.log(price > 2 && user == "guest");
console.log(!(price > 0 && user == "guest"));
