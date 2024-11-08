/*112
https://elzero.org/javascript-2021-local-storage-color-app-practice/
https://www.youtube.com/watch?v=QsGN8B8g8QE&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=112
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");
let exp = document.getElementsByClassName("experiment")
console.log(exp);
if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});


/*113
https://elzero.org/javascript-2021-session-storage-and-use-cases/
https://www.youtube.com/watch?v=lT-hZqsKfu4&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=113
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
//     // console.log(this.value);
    window.sessionStorage.setItem("input-name", this.value);
  };