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