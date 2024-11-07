/*102
https://elzero.org/javascript-2021-what-is-bom/
https://www.youtube.com/watch?v=KxhIRUjcdxQ&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=102

  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

// window.document.title = "Hello JS";


/*103
https://elzero.org/javascript-2021-alert-confirm-prompt/
https://www.youtube.com/watch?v=bRvu4_3uubQ&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=103
//////////////////////////////////////////////////////////////////////////////////////////
https://sweetalert2.github.io/
//////////////////////////////////////////////////////////////////////////////////////////
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }
/////////////////////////////////////////////////////////////////////////////////
// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// console.log(promptMsg);
/////////////////////////////////////////////////////////////////////////////////
/*104 ///////////////////// important
https://elzero.org/javascript-2021-settimeout-and-cleartimeout/
https://www.youtube.com/watch?v=vwERdirszK4&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=104
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayMsg, 3000, "Osama", 38);


/*105
https://elzero.org/javascript-2021-setinterval-and-clearinterval/
https://www.youtube.com/watch?v=-4tIbTx55nQ&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=105

  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }
/////////////////////////////////////////////////////////////////////////
let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter1);
  }
}

let counter1 = setInterval(countdown, 1000);
/////////////////////////////////////////////////////////////////////////////

/*106
https://elzero.org/javascript-2021-window-location-object/
https://www.youtube.com/watch?v=6UZIhbPEUGg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=106
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
////////////////////////////////////////////////////////////////
console.log(location);
console.log(location.href);
////////////////////////////////////////////////////////
// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

/*107
https://elzero.org/javascript-2021-window-open-and-close/
https://www.youtube.com/watch?v=M7LO4aTXW_I&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=107

  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function () {
    window.open("", "_self", "", false);
  }, 3000);
  
//   setTimeout(function () {
//     window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
//   }, 2000);

/*108
https://elzero.org/javascript-2021-window-history-object/
https://www.youtube.com/watch?v=UhQ0RIdCB3M&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=108
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*109
https://elzero.org/javascript-2021-scroll-scrollto-scrollby-focus-print-stop/
https://www.youtube.com/watch?v=kJslAJD39Nk&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=109
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

/*110
https://elzero.org/javascript-2021-scroll-to-top-using-scrolly-practice/
https://www.youtube.com/watch?v=TkAgnDT3ZjM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=110
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btn1 = document.getElementById("up");


window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn1.style.display = "block";
  } else {
    btn1.style.display = "none";
  }
};

btn1.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};


/*111
https://elzero.org/javascript-2021-local-storage/
https://www.youtube.com/watch?v=n64yffJXsHY&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=111
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);