/*159
https://elzero.org/javascript-2021-date-and-time-introduction/
https://www.youtube.com/watch?v=G5Ql9pQFxJA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=159

  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*160
https://elzero.org/javascript-2021-get-date-and-time/
https://www.youtube.com/watch?v=lljWW6UEEhI&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=160
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow1 = new Date();
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow1);
console.log(dateNow1.getTime());
console.log(dateNow1.getDate());
console.log(dateNow1.getFullYear());
console.log(dateNow1.getMonth());
console.log(dateNow1.getDay());
console.log(dateNow1.getHours());
console.log(dateNow1.getMinutes());
console.log(dateNow1.getSeconds());

/*161
https://www.youtube.com/watch?v=rahCIVgxc50&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=161
  https://elzero.org/javascript-2021-set-date-and-time/
Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow2 = new Date();
console.log(dateNow2);

console.log("#".repeat(66));

// dateNow2.setTime(0);
// console.log(dateNow2);

// console.log("#".repeat(66));

// dateNow2.setTime(10000);
// console.log(dateNow2);

// console.log("#".repeat(66));

// dateNow2.setDate(35);
// console.log(dateNow);

// dateNow2.setFullYear(2020, 13);
// console.log(dateNow2);

dateNow2.setMonth(15);
console.log(dateNow2);


/*162
https://www.youtube.com/watch?v=N4aYazqnvYQ&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=162
https://elzero.org/javascript-2021-formatting-date-and-time/
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

/*163
https://elzero.org/javascript-2021-tracking-operations-time/
https://www.youtube.com/watch?v=YhOuTEAImyk&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=163
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 100000; i++) {
  // document.write(`<div>${i}</div>`);
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);

/*164
https://elzero.org/javascript-2021-generator-function-introduction/
https://www.youtube.com/watch?v=6t4YL6aa2XU&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=164
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
    yield 1;
    console.log("Hello After Yield 1");
    yield 2;
    yield 3;
    yield 4;
  }
  
  let generator = generateNumbers();
  
  console.log(typeof generator);
  console.log(generator);
  console.log("############");
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  
  for (let value of generateNumbers()) {
    console.log(value);
  }
  
  for (let value of generator) {
    console.log(value);
  }

/*165
https://elzero.org/javascript-2021-delegate-generator-function/
https://www.youtube.com/watch?v=lYb4pnr1nYM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=165
  Generators
  - Delegate Generator
*/

function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
  }
  
  function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [4, 5, 6];
  }
  
  let generator1 = generateAll();
  
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.return("Z"));
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());


  
  /*166
  https://elzero.org/javascript-2021-generate-infinite-numbers/
  https://www.youtube.com/watch?v=zjANdEj6QSs&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=166
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

// function* generateNumbers1() {
//     // yield 1;
//     // yield 2;
//     // return "A";
//     // yield 3;
//     // yield 4;
//     let index = 0;
  
//     while (true) {
//       yield index++;
//     }
//   }
  
//   let generator2 = generateNumbers1();
  
//   console.log(generator2.next());
//   console.log(generator2.next());
//   console.log(generator2.next());
//   console.log(generator2.next());