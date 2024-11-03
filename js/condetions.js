/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only       true
console.log(-100 == "-100"); // Compare Value Only   true
console.log(10 != "10"); // Compare Value Only       false

console.log(10 === "10"); // Compare Value + Type    false
console.log(10 !== "10"); // Compare Value + Type    true
console.log(10 !== 10); // Compare Value + Type      false

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed"); //  true
console.log("Osama" === "Ahmed"); //  false

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//   price -= discountAmount; // price = price - discountAmount
// } else if (country === "Egypt") {
//   price -= 40;
// } else if (country === "Syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

/*
  Nested If
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {

  price -= discountAmount;

} else if (country === "Egypt") {

  if (student === true) {

    price -= discountAmount + 30;

  } else {

    price -= discountAmount + 10;

  }

} else {

  price -= 10;

}

console.log(price);

/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

  /*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price1 = 0;

console.log(`The Price Is ${price1 || 200}`);
console.log(`The Price Is ${price1 ?? 200}`);

/*
  If Condition Challenge
*/

let a1 = 10;

if (a1 < 10) {
  console.log(10);
} else if (a1 >= 10 && a1 <= 40) {
  console.log("10 To 40");
} else if (a1 > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
a1<10 ? console.log(10) : a1 >= 10 && a1 <= 40 
? console.log("10 To 40") : a1 > 40 ? console.log("> 40") : console.log("Unknown")

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof(st.length)  === "number") {
  console.log("Good");
}

if (st.slice("E",6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "A";

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }
switch (job)
{
case "Manager":
  salary = 8000;
  break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
      salary = 7000;
      break;
  default:
        salary = 4000;

}
console.log(salary);


  // If Challenge


let holidays = 0;
let money = 0;
if (holidays===0){
  money = 5000;
}
else if (holidays === 1 || holidays === 2){
  money = 3000;
}
else if (holidays === 3){
  money = 2000;
}
else if (holidays === 4){
  money = 1000;
}
else if (holidays === 5){
  money = 0;
}
else {money = 0;}
console.log(`My Money is ${money}`);
/*
switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
    */