/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});

console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);


/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);


/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers1 = "Elz123er4o";

let ign1 = ignoreNumbers1
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");

console.log(ign1);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");

console.log(mixedContent);


/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let add1 = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5);

console.log(add);


/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/
console.log("$$$$$$$$$$$$$$");
let myString15 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString15.split(",").filter((a) => (isNaN(parseInt(a)))).reduce((c,d) => (c+d)).slice(true).map();
// let solution = myString15
//   .split(",")
//   .filter((ele) => isNaN(Number.parseInt(ele)))
//   .map((ele, arr) => {
//     arr.length = arr.length--;
//     return ele.replace("_", " ");
//   })
//   .reduce((acc, ele, index, arr) => acc + ele)
//   .slice(true);

  let mix11 ="1,2,3,EE,L,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";
let clear=mix11.split(",")
.filter(e=>isNaN(parseInt(e)))
.map(function(e,ind,arr){arr.length=arr.length--;return e!="_"?e:" "})
.reduce((acc,cur)=>acc+cur)
.slice(true)
console.log(clear);


// console.log(solution); // Elzero Web School




// Function test

// Map
// 
let mo = [2,4,6,8];
console.log(mo);
let ma = mo.map((a => a+a));
console.log(ma);
let maa = mo.map(function(b){return b+b;})
console.log(maa);

function calc3(c){
  return c*c;
}
let maaa = mo.map(calc3);
console.log(maaa);

function conv(d){
  let sw1 = d.split("").map(function(e){return e === e.toUpperCase() ? e=e.toLowerCase() : e=e.toUpperCase()}).join("");
return sw1;
}
console.log(conv("MOHamed"));

let str5 = ["MOHamed", "TARek" , "MARiam"];
let convst = str5.map(conv);
console.log(convst);

let invertNum = [2,-6,10,-20,80,-90];
let invNums = invertNum.map((d) => (d = -d));
console.log(invNums);

let ignNum = "Moham1254ed Sos254a";
// let ignMums = ignNum.split("").map(function(a){
//   return isNaN(parseInt(a))? a : ""; 
// }).join("")

let ignMums = ignNum.split("").map((a) => (isNaN(parseInt(a))? a : "")).join(""); 
console.log(ignMums);


let friends6 = ["Ahmed", "Sameh", "Sayed", "Asmaa","Amina", "Amgad", "Israa"];
let filFreinds = friends6.filter((a) => (a.startsWith("A")));
console.log(filFreinds);

let colNumber = [11,20,2,5,17,10];
let evNums = colNumber.filter((a)=>(a%2 === 0));
console.log(evNums);


let sentence1 = "I Love Foood Code Too Playing Much";
let filSent = sentence1.split(" ").filter((a) => (a.length <= 4)).join(" ");
console.log(filSent);
let ign8 = ignoreNumbers.split("").filter((f) => (isNaN(parseInt(f)))).join("");
console.log(ign8);

let mix1 = "A13BS2ZX";
let mixx = mix.split("").filter((e) => (!isNaN(parseInt(e)))).map((d) => (d*d)).join(",");
console.log(mixx);

let NUms = [10,20,15,30];
let NUMS = NUms.reduce((a,b) => a > b? a : b);
console.log(NUMS);

let removeChars1 = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let removedChars1 = removeChars1.filter((b) => (b!=="@")).reduce((f,e) => (`${f}${e}`));
console.log(removedChars1);

let mix22 ="1,2,3,EE,L,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";
let Clear1 = mix22.split(",").filter(a => isNaN(parseInt(a))).map(function(c,d,e){e.length=e.length--;return c!="_"?c:" "}).reduce((a,b) => (a+b)).slice(true);
// let Clear1 = mix22.split(",").filter(a => isNaN(parseInt(a))).map(function(c,d,e){e.length=e.length--;return c!="_"?c:" "}).join("").slice(true);
console.log(Clear1);