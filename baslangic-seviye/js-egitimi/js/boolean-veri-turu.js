// 0 ve 1'i Anlamak ->
let isActive = false; // 0
isActive = true; // 1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11"); // true
Boolean("0"); // true
Boolean(""); // false

userName = "user";

console.log("User Name:", Boolean(userName));

// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0); //  false
Boolean(-0); // false
Boolean(-0.1); // true
Boolean(0 === 0); // true

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
Boolean(userName.length > 0); // true

TEST;
var x = 10 / "a";
console.log(Boolean(x)); //false

var t = "" && -2 && "JavaScript";
console.log(Boolean(t)); //false

var w = false || 0;
console.log(Boolean(w)); //false

var a = true;
console.log(Boolean(a)); //true

const b = "0";
console.log(Boolean(b)); // true

let a;
console.log(Boolean(a)); //false
