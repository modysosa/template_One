/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

function sayHello(userName) {
    console.log(`Hi ${userName}`);
  }
  
  sayHello("Osama");
  sayHello("Sayed");
  sayHello("Ali");

  /*
  Function Advanced Examples
*/

function sayHello1(userName, age) {
    if (age < 20) {
      console.log(`App is Not Suitable For You`);
    } else {
      console.log(`Hello ${userName} Your Age is ${age}`);
    }
  }
  
  sayHello1("Osama", 38);
  sayHello1("Sayed", 40);
  sayHello1("Ali", 18);
  
  function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
      if (i === exclude) {
        continue;
      }
      console.log(i);
    }
  }
  
  generateYears(1982, 2021, 2020);

  /*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
    for (let i = start; i <= end; i++) {
      if (i === 15) {
        return `Interrupting`;
      }
      console.log(i);
    }
  }
  
  generate(10, 20);

  /*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    
    if(sk.length===0){
      document.write(`<p>You Dont Have Skils</p>`);
    }
    else {document.write(`<p>Skills Is Hidden</p>`);}
  }
  document.write(`</div>`);
}

showInfo("Mody", 38, 20, "No", "Html", "CSS");


/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(...check){
  let st="";
  let num=0;
  let bool=true;
  for (let c =0; c<check.length;c++){
    // if (typeof(check[c])==="string"){
    //   st=check[c];
    // }
    // else if (typeof(check[c])==="number"){
    //   num=check[c];
    // }
    // else if (typeof(check[c])==="boolean"){
    //   bool=check[c];
    // }
    typeof(check[c])==="string" ?  st=check[c]: typeof(check[c])==="number"? num=check[c]:bool=check[c];
  }

  bool===true? document.write(`Hello ${st}, Your Age Is ${num}, You Are Available For Hire <br>`) :document.write(`Hello ${st}, Your Age Is ${num}, You Are Not Available For Hire <br>`);
//   if (bool===true){
//   document.write(`Hello ${st}, Your Age Is ${num}, You Are Available For Hire <br>`); 
// }
//   else if(bool===false){
//     document.write(`Hello ${st}, Your Age Is ${num}, You Are Not Available For Hire <br>`);
//   }
}
showDetails("mohamed", 40, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "mohamed", 40); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Mody");
}

document.getElementById("show").onclick = sayHello;

// setTimeout(function elzero() {
setTimeout(function () {
  console.log("Good");
}, 2000);


/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Mohamed"));

// Example 2

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// Example 3

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Mohamed", "Sosa"));


/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
//   return num;
// };

// let print = num => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();


/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...name) {
//   let result1="";
//   for (let g=0; g<name.length;g++){
//      result1+="["+name[g]+"],";
//   }
//   return `String ${result1} => Done !`;
// };

let names = (...person) =>`String [${person.join("],[")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => "???";


let myNumbers3 = [20,50,10,60];
let calc4 =(one1, two1, ...nums1)=> one1 + two1 +nums1[0];
let calc3 = (one3,two3,...nums3)=>{return one3+two3+parseInt(nums3.join(''))}
console.log(calc4(10, myNumbers3[0], myNumbers3[1])); // 80