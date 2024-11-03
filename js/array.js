/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));


/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends1 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends1[myFriends1.length-1]);
myFriends1[myFriends1.length-1] = "Mody";
    console.log(myFriends1);
myFriends1.length = 2;

console.log(myFriends1);


/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends2 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends2);

myFriends2.unshift("Osama", "Nabil");

console.log(myFriends2);

myFriends2.push("Samah", "Eman");

console.log(myFriends2);

let first = myFriends2.shift();

console.log(myFriends2);

console.log(`First Name Is ${first}`);

let last = myFriends2.pop();

console.log(myFriends2);

console.log(`Last Name Is ${last}`);

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])               if not true will return -1
  - lastIndexOf(Search Element, From Index [Opt])           if not true will return -1
  - includes(valueToFind, fromIndex [Opt]) [ES7] true or false
*/

let myFriends3 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends3);

console.log(myFriends3.indexOf("Ahmed"));
console.log(myFriends3.indexOf("Ahmed", 2)); // from first 2

console.log(myFriends3.lastIndexOf("Ahmed"));
console.log(myFriends3.lastIndexOf("Ahmed", -2)); // from last 2

console.log(myFriends3.includes("Ahmed"));
console.log(myFriends3.includes("Ahmed", 2)); // start from 2

if (myFriends3.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFriends3.indexOf("Osama"));
console.log(myFriends3.lastIndexOf("Osama"));


/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let myFriends4 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends4);
console.log(myFriends4.sort().reverse());
console.log(myFriends4.sort());

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends5 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends5);
// slice creat ne array and dont change the original array
console.log(myFriends5.slice());
console.log(myFriends5.slice(1));
console.log(myFriends5.slice(1, 3));   // not including end
console.log(myFriends5.slice(-3));    // start from last -3
console.log(myFriends5.slice(1, -2));  // End to -2 but not include end
console.log(myFriends5.slice(-4, -2));
console.log(myFriends5);
//splice change the orginal array
myFriends5.splice(0, 0, "Sameer", "Samara");
console.log(myFriends5);
myFriends5.splice(1, 2, "Sameer", "Samara");

console.log(myFriends5);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFriends6 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends6.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
let my1=[];
console.log(my1.concat(my.slice(my.indexOf("Elham"),my.indexOf("Gamal")).reverse() ,my.slice(zero,my.indexOf("Elham")).reverse())); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(zero,counter).concat(my[counter]).reverse());
console.log(my.slice(my.indexOf("Mazero"), counter).reverse()); // ["Elham", "Mazero"]
console.log(my.slice(my.indexOf("Mazero"), counter).reverse());

console.log(my[my.indexOf("Elham")].slice(zero, my[my.indexOf("Elham")].indexOf("ham")) + my[my.indexOf("Mazero")].slice(my[my.indexOf("Mazero")].indexOf("zero"))); // "Elzero"

console.log( my[++zero].slice(++counter, ++counter) + my[zero].slice(counter).toUpperCase()); // "rO"
