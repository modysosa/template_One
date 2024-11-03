/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  /*
  Loop
  - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let products1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors1 = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products1.length; i++) {
  console.log(products1[i]);
  nestedLoop: for (let j = 0; j < colors1.length; j++) {
    console.log(`- ${colors1[j]}`);
    if (colors1[j] === "Green") {
      break mainLoop;
    }
  }
}

/*
  Loop For Advanced Example
*/

let products2 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products2[i]);
  i++;
  if (i === products2.length) break;
}

/*
  Products Practice
*/
/*
let products3 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors3 = ["Red", "Green", "Blue"];
let showCount = 5;
document.write(`<h1>Show ${showCount} Products</h1>`);
for(let i=0; i<showCount;i++){
document.write('<div>');
document.write(`<h3>[${[i+1]}] ${products3[i]}</h3>`);
// for(j=0;j<colors3.length;j++){
// document.write(`<p>${colors3[j]}</p>`)
// }
document.write(`<p>${colors.join(" | ")}</p>`);
document.write(`</div>`);
}
*/

/*
  Loop
  - While
*/

let products4 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products4.length) {
  console.log(products4[index]);
  index += 1;
}
// while(true){
//   console.log(index);
//   index++;
//   if(index===3){break;}
// }

/*
  Loop
  - Do / While
*/

let products5 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i1 = 0;

do {
  console.log(i1);
  i1++;
} while (false);

console.log(i1);

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let adminsCount =myAdmins.indexOf("Stop")
document.write(`<h2>We Have X Admins</h2>`);
document.write(`<h2>We Have ${myAdmins.indexOf("Stop")} Admins</h2>`);
document.write(`<hr>`)
for (let k=0; k<myAdmins.indexOf("Stop"); k++){
  document.write(`<div>`);
  document.write(`<h4>The Admin For Team [${k+1}] Is ${myAdmins[k]}</h4>`)
  document.write(`<h3>Team Members:</h3>`)
  let n =1;
for(let m =0;m< myEmployees.length;m++){
    if(myEmployees[m][0]!==myAdmins[k][0]){continue;}
    document.write(`<p>[${n}] ${myEmployees[m]}</p>`)
  n++;
}
document.write(`<hr>`)
  document.write(`</div>`);
}