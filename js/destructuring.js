/*115
https://elzero.org/javascript-2021-destructuring-arrays-part-1/
https://www.youtube.com/watch?v=tR6VARwdmzA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=115
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);


/*116
https://elzero.org/javascript-2021-destructuring-arrays-part-2/
https://www.youtube.com/watch?v=cv3LaTelG3I&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=116
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends1 = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [a1, , [, b1]]] = myFriends1;

console.log(a1); // Shady
console.log(b1); // Gamal


/*117
https://elzero.org/javascript-2021-destructuring-arrays-part-3-swap-variables/
https://www.youtube.com/watch?v=NnTQs7dYVf0&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=117
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);

/*118
https://elzero.org/javascript-2021-destructuring-objects-part-1/
https://www.youtube.com/watch?v=4_McBh1NcAk&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=118
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry1: "Egypt",
  };
  
  // console.log(user.theName);
  // console.log(user.theAge);
  // console.log(user.theTitle);
  // console.log(user.theCountry);
  
  // let theName = user.theName;
  // let theAge = user.theAge;
  // let theTitle = user.theTitle;
  // let theCountry = user.theCountry;
  
  // console.log(theName);
  // console.log(theAge);
  // console.log(theTitle);
  // console.log(theCountry);
  
  // ({ theName, theAge, theTitle, theCountry } = user);
  const { theName, theAge, theCountry1 } = user;
  
  console.log(theName);
  console.log(theAge);
  console.log(theCountry1);

  /*119
  https://elzero.org/javascript-2021-destructuring-objects-part-2/
  https://www.youtube.com/watch?v=zq-ErjysJ84&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=119
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user1 = {
    theName2: "Osama",
    theAge2: 39,
    theTitle: "Developer",
    theCountry2: "Egypt",
    theColor2: "Black",
    skills: {
      html: 70,
      css: 80,
    },
  };
  
  const {
    theName2: n,
    theAge2: a2,
    theCountry2,
    theColor2: co = "Red",
    skills: { html: h, css },
  } = user1;
  
  console.log(n);
  console.log(a2);
  console.log(theCountry2);
  console.log(co);
  console.log(`My HTML Skill Progress Is ${h}`);
  console.log(`My CSS Skill Progress Is ${css}`);
  
  const { html: skillOne, css: skillTwo } = user1.skills;
  
  console.log(`My HTML Skill Progress Is ${skillOne}`);
  console.log(`My CSS Skill Progress Is ${skillTwo}`);


  /*120
  https://elzero.org/javascript-2021-destructuring-function-parameters/
  https://www.youtube.com/watch?v=2WtdhvOkgcs&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=120
  Destructuring
  - Destructuring Function Parameters
*/

const user3 = {
    theName: "Osama",
    theAge: 39,
    skills: {
      html: 70,
      css: 80,
    },
  };
  
  showDetails(user3);
  
  // function showDetails(obj) {
  //   console.log(`Your Name Is ${obj.theName}`);
  //   console.log(`Your Age Is ${obj.theAge}`);
  //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
  // }
  
  function showDetails({ theName: x, theAge: y, skills: { css: z } } = user3) {
    console.log(`Your Name Is ${x}`);
    console.log(`Your Age Is ${y}`);
    console.log(`Your CSS Skill Progress Is ${z}`);
  }

  /*121
  https://elzero.org/javascript-2021-destructuring-mixed-content/
  https://www.youtube.com/watch?v=I6mI4GW6Du4&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=121
  Destructuring
  - Destructuring Mixed Content
*/

const user4 = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
      egypt: "Cairo",
      ksa: "Riyadh",
    },
  };
  
  const {
    theName: na,
    theAge: ag,
    skills: [, , three],
    addresses: { egypt: ed },
  } = user4;
  
  console.log(`Your Name Is: ${na}`);
  console.log(`Your Age Is: ${ag}`);
  console.log(`Your Last Skill Is: ${three}`);
  console.log(`Your Live In: ${ed}`);

  /*122
  https://elzero.org/javascript-2021-destructuring-challenge/

  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends4 = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let obj = myFriends4[(chosen-1)];
const {title:title9,age:age9,available:available9,skills:[aa,bb]}=obj;
console.log(title9)
console.log(age9)

if(available9){ console.log("free");console.log(aa)} else {console.log("not free");console.log(bb)};
// console.log(aa)
// console.log(bb)

// let {
//     title: empName,
//     age,
//     available,
//     skills: [, lastSkill],
//   } = myFriends[chosen - 1];
  
//   console.log(empName);
//   console.log(age);
//   console.log(available ? "available" : "not avialable");
//   console.log(lastSkill);