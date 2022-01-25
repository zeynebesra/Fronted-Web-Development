//------ FORM SUBMIT:

// let formDOM = document.querySelector("#userForm");
// formDOM.addEventListener("submit", formSubmit);

// function formSubmit(event) {
//   event.preventDefault(); // default islemi engelledik...
//   console.log("islem gerceklesti");
// }

//----- INPUT icindeki degeri(value) almak

// let formDOM = document.querySelector("#userForm");
// formDOM.addEventListener("submit", formSubmit);

// function formSubmit(event) {
//   event.preventDefault(); // default islemi engelledik...
//   console.log("islem gerceklesti");

//   let scoreInputDOM = document.querySelector("#score");
//   console.log(scoreInputDOM.value);
//   localStorage.setItem("score", scoreInputDOM.value);
// }

//------ FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

//hata
const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function formHandler(event) {
  event.preventDefault();
  //bilgileri aldık.
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value); // gonderdikten sonra sifirladik
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Baslik Bilgisi",
      "Eksik Bilgi Girdiniz",
      "danger" //classismi
    );
  }
}

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
  ${userName} 
  <span class="badge bg-primary rounded-pill">${score}</span>
`;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};

//---------------------TEST

// function myFunction() {
//   var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = x;
// }

// function myFunction() {
//   var x = document.getElementById("myText");
//   document.getElementById("demo").innerHTML = x;
// }
//çıktı : [object HTMLInputElement]

// function myFunction() {
//   var x = document.querySelectorAll("myText").value;
//   document.getElementById("demo").innerHTML = x;
// }
// çıktı :undefined
