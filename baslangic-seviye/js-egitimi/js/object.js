// -------1.) Object(Nesne) Nedir ? Nasıl Oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// let arrayObj = [1, 2, 3];
// let object1 = { obj: 1 };

// console.log("arrayObj", typeof arrayObj);
// console.log("object1", typeof object1);

// let item1 = new Object();
// let item2 = {};
// console.log("item1", typeof item1);
// console.log("item2", typeof item2);

// // Object olusturmak
// let item3 = {};
// let item4 = new Object();

// console.log("object1", object1);

/*********************************************************/

// --------2.) Object Anahtar (Key) ve Değer (Value) Yapısının Kullanımı/Erişimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// // [key1:1, key1:2, key3:3, ]
// let laptop1 = {
//   brand: "Apple",
//   model: "MacBook Pro",
//   "2kg": 2,
//   modelName: "MacBook Pro",
//   // model-name: "MacBook Pro",
//   model_name: "MacBook Pro",
// };

// console.log(laptop1);
// // Dogru Anahtar Bilgisi Olusturmak

// console.log(laptop1.brand, laptop1["brand"]);
// console.log(laptop1.model, laptop1["model"]);
// console.log(laptop1["2kg"]);

// // Anahtar bilgisine yeni deger eklemek
// laptop1.brand = "Mac";
// laptop1["brand"] = "Mac1";
// console.log(laptop1);

// // Yeni Bilgi Eklemek
// laptop1.version = "10.15.7";
// console.log(laptop1);

// // Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
// keys = Object.keys(laptop1);
// console.log(keys);
// console.log(Object.keys(laptop1));

// keys.forEach((keyInfo) => {
//   console.log(keyInfo);
//   console.log(laptop1[keyInfo]);
// });

// // Deger Bilgilerine Ulasmak (values) -> Object.values(item)
// console.log(Object.values(laptop1));

// let values = Object.values(laptop1);

// values.forEach((value) => {
//   console.log("value: ", value);
// });

// // tum bilgilerin tek yerde toplanmasi icin object kullanabiliriz ;)
// let setting = {
//   password: 1234,
//   userName: "user1",
// };

/******************************************************************/
//-----------3.) Nesnelere Nasıl Metot Ekleriz?

// let user1 = {
//   firstName: "Bilgin",
//   lastName: "Uzman",
//   score: [1, 2, 3, 4],
//   isActive: true,
//   shortName: function () {
//     return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
//   },
// };

// console.log(user1);
// console.log(user1.shortName);

/******************************************************************/
//---------------4.) Object ve Array Destructuring Kullanımı
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// // Object Destructuring:

// let settings = {
//     userName: "loremIpsum",
//     password: "BadPassword",
//     isActive: false,
//     ip: "127.0.0.1",
//     serverName: "kodluyoruz.org"
//   }

//   // obje icindeki bilgilerin tek seferde cikarilmasi
//   // let userName = settings.userName
//   // console.log(userName)

//   // rename && destructuring
//   let {userName: user, password, isActive, ip:serverIP, serverName} = settings

//   console.log(user, password, isActive, serverIP, serverName)
//   console.log(settings)
//   console.log(user)

//   // obje icindeki bazi bilgilerin cikarilmasi
//   let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings
//   // eger degisken ismi daha once tanimlanmadiysa:
//   // let {userName, password, isActive, ...newSettings} = settings

//   console.log(userName2, password2, isActive2, newSettings)

//   // objenin destructuring ile kopyalanmasi

//   // HATALI!!!
//   // let settings2 = settings
//   // settings2.userName = "Degisen Bilgi"
//   // console.log("settings", settings)
//   // console.log("settings2", settings2)

//   // DOGRUSU :)
//   let settings2 = {...settings}
//   settings2.userName = "Degisen Bilgi"
//   console.log("settings", settings)
//   console.log("settings2", settings2)

//   let score = [100, 200, 300, 400]

//   let [score1, score2, ...otherScore] = score
//   console.log(score1, score2, otherScore)

//   // object kopyalama ile ayni... let settings2 = {...settings}
//   let copyOfScore = [...score]
//   console.log(copyOfScore)

//TEST

// let [, pronoun, , name] = ["Merhaba", "benim", "adım", "Mehmet"];
// console.log(pronoun);
// console.log(name);
// //çıktı: benim mehmet

// let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
// let { name: foo } = person;
// console.log(foo);
// //çıktı : selin
