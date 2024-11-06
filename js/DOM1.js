
/* DOM Start lesson 86 in js/objects.js
89
https://elzero.org/javascript-2021-create-and-append-elements/
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*90
https://elzero.org/javascript-2021-product-with-heading-and-paragraph/#google_vignette
https://www.youtube.com/watch?v=QQ6g0Yryh_s&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=90

  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add Heading Text
// myHeading.appendChild(myHeadingText);

// // Add Heading To Main Element
// myMainElement.appendChild(myHeading);

// // Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// // Add Paragraph To Main Element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);
//////////////////////////////////////////////////////////////////////////
// let myMainElement1 = document.createElement("div");
// myMainElement1.className = "main-div";
// let myHeading1 = document.createElement("h4");
// let myParagraph1 = document.createElement("p");

// let myHeading1Text = document.createTextNode("Heading");
// let myParagraph1Text = document.createTextNode("Paragraph");

// document.body.appendChild(myMainElement1);

// myMainElement1.appendChild(myHeading1);
// myMainElement1.appendChild(myHeading1Text);
// myMainElement1.appendChild(myParagraph1);
// myMainElement1.appendChild(myParagraph1Text);
/////////////////////////////////////////////////////////

// let mainDiv = document.createElement("div");
// mainDiv.className="main-div";
// let heading1 = document.createElement("h3");
// let heading1Text = document.createTextNode("Title Heading");
// let paragraph1 = document.createElement("p");
// let paragraph1Text = document.createTextNode("Paragraph Paragraph");
// document.body.appendChild(mainDiv);
// mainDiv.appendChild(heading1);
// mainDiv.appendChild(heading1Text);
// mainDiv.appendChild(paragraph1);
// mainDiv.appendChild(paragraph1Text);

/*91
https://elzero.org/javascript-2021-deal-with-childrens/#google_vignette
https://www.youtube.com/watch?v=DA3zF8Pm9Tc&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=91
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);    // dot inerhtml and change what you want
// console.log(myElement.childNodes);     //all things with spaces
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);



/*92
https://www.youtube.com/watch?v=BFd05UsHP48&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=92
https://elzero.org/javascript-2021-dom-events/#google_vignette
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/


let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};

/*93
https://elzero.org/javascript-2021-validate-form-and-prevent-default/#google_vignette
https://www.youtube.com/watch?v=Iq0K54HzdGs&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=93

  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};


/*94
https://elzero.org/javascript-2021-event-simulation-click-focus-blur/
https://www.youtube.com/watch?v=XY7GjH0DwYM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=94
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {   //go out from element
  // document.links[0].click();
  two.focus();
};


/*95
https://elzero.org/javascript-2021-classlist-object-and-methods/
https://www.youtube.com/watch?v=ShSLbgFu4gg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=95

  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element4 = document.getElementById("my-div1");

console.log(element4.classList);
console.log(typeof element4.classList);
console.log(element4.classList.contains("osama"));
console.log(element4.classList.contains("show"));
console.log(element4.classList.item("3"));

element4.onclick = function () {
  element4.classList.toggle("show");
};


/*96
https://elzero.org/javascript-2021-css-styling-and-stylesheets/
https://www.youtube.com/watch?v=GELiBxWNdmo&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=96
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

let element5 = document.getElementById("my-div1");

element5.style.color = "red";
element5.style.fontWeight = "bold";

element5.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

element5.style.removeProperty("color");
element5.style.setProperty("font-size", "40px", "important");

document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "wheat", "important");
// console.log(document.styleSheets[0].rules[0])


/*97
https://elzero.org/javascript-2021-before-after-prepend-append-remove/#google_vignette
https://www.youtube.com/watch?v=5dTV-28Z868&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=97

  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element6 = document.getElementById("my-div");
let createdP = document.createElement("p");

// element6.after("hello")
// element6.before("hello")
// element6.after(createdP)
// element6.append(createdP)
// element6.prepend(createdP)


// element.remove();


/*98
https://elzero.org/javascript-2021-dom-traversing/
https://www.youtube.com/watch?v=oTvOBJO5KHQ&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=98
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".twoo");
console.log(span)
console.log(span.nextSibling)
console.log(span.parentElement);
console.log(span.nextElementSibling)
console.log(span.previousElementSibling)
console.log(span.parentElement)

span.onclick = function () {
  span.parentElement.remove();
  // span.parentElement.style.opacity= '10';
}


/*99
https://elzero.org/javascript-2021-dom-cloning/
https://www.youtube.com/watch?v=b3YxfLUzaFc&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=99
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP1 = document.querySelector("p").cloneNode(true);
let myDiv1 = document.querySelector("div");

myP1.id = `${myP1.id}-clone`;

myDiv1.appendChild(myP1);

/*100
https://elzero.org/javascript-2021-addeventlistener/
https://www.youtube.com/watch?v=OsrT0kxQCvA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=100
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});

