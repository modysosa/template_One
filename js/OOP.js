/*148
https://www.youtube.com/watch?v=uv5OULDiCXg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=147
https://www.youtube.com/watch?v=_zBImgVB3Pk&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=148
https://elzero.org/javascript-2021-constructor-function/
  Constructor Function
*/

function User(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
  
  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "Hassan", 6000);
  let userThree = new User(102, "Sayed", 7000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);
  
  console.log(userTwo.i);
  console.log(userTwo.u);
  console.log(userTwo.s);
  
  console.log(userThree.i);
  console.log(userThree.u);
  console.log(userThree.s);
  
  // const userOne = {
  //   id: 100,
  //   username: "Elzero",
  //   salary: 5000,
  // };
  
  // const userTwo = {
  //   id: 101,
  //   username: "Hassan",
  //   salary: 6000,
  // };
  
  // const userThree = {
  //   id: 102,
  //   username: "Sayed",
  //   salary: 7000,
  // };


  /*
  Constructor Function
  - New Syntax
*/

class User1 {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne1 = new User1(100, "Elzero", 5000);

console.log(userOne1.i);
console.log(userOne1.u);
console.log(userOne1.s);

console.log(userOne1 instanceof User1);
console.log(userOne1.constructor === User1);

/*150
https://elzero.org/javascript-2021-deal-with-properties-and-methods/
https://www.youtube.com/watch?v=tMvXS98_KgI&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=150
  Constructor Function
  - Deal With Properties And Methods
*/

class User2 {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne2 = new User2(100, "Elzero", 5000);
let userTwo2 = new User2(101, "", 6000);

console.log(userOne2.u);
console.log(userOne2.s);
console.log(userOne2.msg());
console.log(userOne2.writeMsg());

console.log(userTwo2.u);
console.log(userTwo2.s);
console.log(userTwo2.msg); // Native Code
console.log(userTwo2.writeMsg); // Native Code


/*151
https://elzero.org/javascript-2021-update-properties-built-in-constructors/
https://www.youtube.com/watch?v=vBqlMWCejSA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=151
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User3 {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne3 = new User3(100, "Elzero", 5000);

console.log(userOne3.u);
userOne3.updateName("Osama");
console.log(userOne3.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);


/*152
https://elzero.org/javascript-2021-class-static-properties-and-methods/
https://www.youtube.com/watch?v=xFCh7Whz5gw&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=152
  Class
  - Static Properties And Methods
*/

class User4 {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User4.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne4 = new User4(100, "Elzero", 5000);
let userTwo4 = new User4(101, "Ahmed", 5000);
let userThree4 = new User4(102, "Sayed", 5000);

console.log(userOne4.u);
console.log(userTwo4.u);
console.log(userOne4.count);
console.log(User4.count);
console.log(User4.sayHello());
console.log(User4.countMembers());


/*153
https://elzero.org/javascript-2021-class-inheritance/
https://www.youtube.com/watch?v=Rhjht0ATx-4&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=153
  Class
  - Inheritance
*/

// Parent Class
class User5 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends User5 {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne5 = new User5(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne5.u);
console.log(userOne5.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());


/*154
https://elzero.org/javascript-2021-class-encapsulation/
https://www.youtube.com/watch?v=EPp4KTSpVFY&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=154
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User6 {
  // Private Property
  #e;
  constructor(id, username, ePassword) {
    this.i = id;
    this.u = username;
    this.#e = ePassword;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne6 = new User6(100, "Elzero", "5000 Gneh");

console.log(userOne6.u);
console.log(userOne6.getSalary() * 0.3);


/*155
https://elzero.org/javascript-2021-prototype-introduction/
https://www.youtube.com/watch?v=iKEunMHFmVc&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=155
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User7 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne7 = new User7(100, "Elzero");
console.log(userOne.u);

console.log(User7.prototype);

let strOne7 = "Elzero";

console.log(String.prototype);



/*156
https://elzero.org/javascript-2021-add-to-prototype-chain/
https://www.youtube.com/watch?v=boUkOH37_tM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=156
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User8 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne8 = new User8(100, "Elzero");
console.log(userOne8.u);
console.log(User8.prototype);
console.log(userOne8);

User8.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";
console.log(myString.addDotBeforeAndAfter())


/*157
https://elzero.org/javascript-2021-object-meta-data-and-descriptor-part-1/
https://www.youtube.com/watch?v=Fn33wjewamg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=157
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 3,
});

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

myObject.c = 100;

console.log(delete myObject.c);

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log(myObject);


/*158
https://elzero.org/javascript-2021-object-meta-data-and-descriptor-part-2/#google_vignette
https://www.youtube.com/watch?v=IMy3si0WJkE&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=158
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject1 = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject1, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject1);

console.log(Object.getOwnPropertyDescriptor(myObject1, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject1));

