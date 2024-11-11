/*169
https://elzero.org/javascript-2021-what-is-json/
https://www.youtube.com/watch?v=VA_AROETZ58&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=169
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

/*170
https://elzero.org/javascript-2021-json-syntax-and-compare-with-js-object/#google_vignette
https://www.youtube.com/watch?v=mCAe4RZSLrM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=170
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null

  https://jsoneditoronline.org/

*/

/*171
https://www.youtube.com/watch?v=J8_DaHkqw5o&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=171
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API
https://api.github.com/users/elzerowebschool
https://api.github.com/users/elzerowebschool/repos


*/
// baaaaaaaaaaaaaaaaaaaaaaaaad

// let http = new XMLHttpRequest();
// http.open('get', 'json/json1.json', true );
// http.send();
// http.onload = function(){
//     if(this.readyState == 4 && this.status == 200){
//         let products = JSON.parse(this.responseText);
//         let output = "";
//         for(let item of products){
//             output +=`
//             <div>${window.title}</div>`
//         }
//     }
// }

/*172
https://elzero.org/javascript-2021-parse-and-stringify/
https://www.youtube.com/watch?v=Hoj5Kkn5tSU&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=172

  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
/////////////////////////////////
let objfromserver = '{"one": "mody","two": "tarek"}';
let objinjs = JSON.parse(objfromserver);
console.log(objinjs.one);
console.log(objinjs);
objinjs.one = "Mohamed";
console.log(objinjs.one);
objfromserver = JSON.stringify(objinjs);
console.log(objfromserver);
////////////////////////////////////////////
// async function fetchDataZ() {
//     try{
//         let myDataZ= await fetch("../json/json1.json");
// console.log(await myDataZ.json());

//     } catch (reasonZ) {
//         console.log(`Reason ${reasonZ}`);
//     }finally{
//         console.log("After Fetch")
//     }

// }
// fetchDataZ()


// const fs = require('fs').promises; // Use promises for async/await

// async function modifyJson() {
//     try {
//         // Read the JSON file
//         let data = await fs.readFile('../json/json1.json', 'utf8');
//         let jsonData = JSON.parse(data);

//         // Modify the data as needed
//         jsonData.newField = "New data"; // Example modification

//         // Write the modified data back to the file
//         await fs.writeFile('../json/json1.json', JSON.stringify(jsonData, null, 2));
//         console.log("JSON file updated successfully.");
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }

// modifyJson();



/*173
https://elzero.org/javascript-2021-asynchronous-vs-synchronous-programming/
https://www.youtube.com/watch?v=qsncfaOUpyg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=173

  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

/*174
https://elzero.org/javascript-2021-call-stack-and-web-api/
https://www.youtube.com/watch?v=AzBaH0wNEos&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=174

  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
  console.log("Web API");
}, 0);

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three();

/*


=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");


/*175
https://elzero.org/event-loop-and-callback-queue/
https://www.youtube.com/watch?v=e-oSGQz7eT8&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=175

  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;

/*176
https://elzero.org/javascript-2021-what-is-ajax-and-network-informations/
https://www.youtube.com/watch?v=X-RkZHyzidc&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=176
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);


/*177
https://elzero.org/javascript-2021-request-and-response-from-real-api/
https://www.youtube.com/watch?v=-RmWQYMGeIs&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=177

  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};



/*178
https://elzero.org/javascript-2021-loop-on-data/
https://www.youtube.com/watch?v=26ZkK1JcSgE&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=178
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest1 = new XMLHttpRequest();
// myRequest.open("GET", "test.json") and you can do it with text file
myRequest1.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest1.send();
myRequest1.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

// let myDataL = new XMLHttpRequest();
// myDataL.open("GET","../json/json1.json");
// myDataL.send();
// myDataL.onreadystatechange = function(){

//   if(this.readyState === 4 && this.status ===200){
//     console.log(this.responseText);
//     console.log(this.readyState);
//     console.log(this.status);
//     let jsDataL = JSON.parse(this.responseText);
//     for (let u = 0; u < jsDataL.length; u++) {
//       let div = document.createElement("div");
//       let named = document.createTextNode(jsDataL.widget[u])
//       div.appendChild(named)
//       document.body.appendChild(div);
//     }
//     console.log(jsDataL.widget.window.name)
//   }
// };

// let connection = new XMLHttpRequest()
// connection.open("GET", "../json/json1.json");
// connection.send()
// connection.onreadystatechange = function(){
//   document.write(this.responseText)
//   let jesonData = JSON.parse(this.responseText)
//   document.write("<br/>")
//   document.write(jesonData.widget.window.name)
// }



/*179
https://elzero.org/javascript-2021-callback-hell-or-pyramid-of-doom/
https://www.youtube.com/watch?v=vZjHCcZJMi4&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=179
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
  console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


/*180
https://elzero.org/javascript-2021-promise-intro-and-syntax/
https://www.youtube.com/watch?v=UXmqduAHxzY&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=180
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter); ///////////////////////

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);


/*181
https://www.youtube.com/watch?v=EOysmTtZzzc&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=182
https://elzero.org/javascript-2021-promise-then-catch-and-finally/
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise1 = new Promise((resolveFunction, rejectFunction) => {
  let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise1
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));


  /*182
  https://elzero.org/javascript-2021-promise-and-xhr/
  https://www.youtube.com/watch?v=QvzH9Y8dw2s&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=182
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest2 = new XMLHttpRequest();
    myRequest2.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest2.open("GET", apiLink);
    myRequest2.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));


  /*183
  https://elzero.org/javascript-2021-fetch-api/
  https://www.youtube.com/watch?v=oO0a7tQcGps&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=183
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
.then((result) => {
  console.log(result);
  let myData3 = result.json();
  console.log(myData3);
  return myData3;
})
.then((full) => {
  full.length = 10;
  return full;
})
.then((ten) => {
  console.log(ten[0].name);
});

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));



/*184
https://elzero.org/javascript-2021-promise-all-all-settled-race/
https://www.youtube.com/watch?v=OipVzp0R7zs&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=184
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );