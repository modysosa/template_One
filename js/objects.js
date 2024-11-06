/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function () {
      return `Hello`;
    },
  };
  
  console.log(user.theName);
  console.log(user.theAge);
  console.log(user.sayHello());
  /*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user1 = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user1.theName);
console.log(user1.country); // user.country
console.log(user1.myVar); // user.country
console.log(user1[myVar]); // user.country

/*
  Object
  - Nested Object And Trainings
*/

// let available = true;

let user2 = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) { // donot write without user.
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user2.name);
console.log(user2.age);
console.log(user2.skills);
console.log(user2.skills.join(" | "));
console.log(user2.skills[2]); // Access With Index
console.log(user2.addresses.ksa);
console.log(user2.addresses.egypt.one);
console.log(user2["addresses"].egypt.one);
console.log(user2["addresses"]["egypt"]);
console.log(user2["addresses"]["egypt"]["one"]);

console.log(user2.checkAv()); // access available from local scop if not fownd will bring from global


/*
  Object
  - Create With New Keyword new Object();
*/
// let user3 = {
//     age: 20,
// };

let user3 = new Object({
    age: 20,
  });
  
  console.log(user);
  
  user3.age = 38;
  user3["country"] = "Egypt";
  
  user3.sayHello = function () {
    return `Hello`;
  };
  
  console.log(user3);
  console.log(user3.age);
  console.log(user3.country);
  console.log(user3.sayHello());


  /* 83
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search /////////////// this will change in strict mode
  - Strict Mode
*/

console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user4 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user4.age);
console.log(user4.ageInDays());

/* 84
  Object
  - Create Object With Create Method
*/

let user5 = {
    age: 20,
    doubleAge: function () {
      return this.age * 2;
    },
  };
  
  console.log(user5);
  console.log(user5.age);
  console.log(user5.doubleAge());
  
  let obj = Object.create({});
  
  obj.a = 100;
  
  console.log(obj);
  
  let copyObj = Object.create(user5);
  
  copyObj.age = 50;
  
  console.log(copyObj);
  console.log(copyObj.age);
  console.log(copyObj.doubleAge());

  /* 85
  Object
  - Create Object With Assign Method
*/

let obj1 = {
    prop1: 1,
    meth1: function () {
      return this.prop1;
    },
  };
  
  let obj2 = {
    prop2: 2,
    meth2: function () {
      return this.prop2;
    },
  };
  
  let targetObject = {
    prop1: 100,
    prop3: 3,
  };
  
  let finalObject = Object.assign(targetObject, obj1, obj2);
  
  finalObject.prop1 = 200;
  finalObject.prop4 = 4;
  
  console.log(finalObject);
  
  let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
  
  console.log(newObject);


  
  /* 86
  DOM     // document object model
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span"); //will bring the first class
let myQueryElements = document.querySelector("#my-div");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryElements);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

/* 87
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");



/*88
https://elzero.org/javascript-2021-check-attributes-and-examples/#google_vignette
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute    // will remove the attripute 
*/

console.log(document.getElementsByTagName("p")[2].attributes);

let myP = document.getElementsByTagName("p")[2];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[2].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}



