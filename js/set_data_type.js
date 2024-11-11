/*123
https://elzero.org/javascript-2021-set-data-type-and-methods/
https://www.youtube.com/watch?v=lsirOGbdWYA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=123
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);




// search of weakset cases
/*124
// https://www.youtube.com/watch?v=umjMxxzvYsI&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=124
// https://elzero.org/category/courses/javascript-bootcamp/
https://elzero.org/javascript-2021-set-vs-weakset-and-garbage-collector/
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/*125
https://elzero.org/javascript-2021-map-data-type-vs-object/
https://www.youtube.com/watch?v=VN8btoo2DII&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=125

  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);



/*126
https://elzero.org/javascript-2021-map-methods/
https://www.youtube.com/watch?v=xLfjINocEok&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=126

  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap1 = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap1);

console.log(myMap1.get(10));
console.log(myMap1.get("Name"));
console.log(myMap1.get(false));

console.log("####");

console.log(myMap1.has("Name"));

console.log("####");

console.log(myMap1.size);

console.log(myMap1.delete("Name"));

console.log(myMap1.size);

myMap1.clear();

console.log(myMap1.size);

/*127
https://elzero.org/javascript-2021-map-vs-weakmap/
https://www.youtube.com/watch?v=kA3Xjh3WQlA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=127

  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap2 = new Map();

myMap2.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap2);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);


/*128
https://elzero.org/javascript-2021-array-from-method/
https://www.youtube.com/watch?v=gaesHQz41oc&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=128

  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet2 = new Set(myArray);

console.log(Array.from(mySet2));

// console.log([...new Set(myArray)]); // Future

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));


/*129
https://elzero.org/javascript-2021-array-copywithin-method/
https://www.youtube.com/watch?v=M5aiQTPJQ10&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=129
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray3 = [10, 20, 30, 40, 50, "A", "B"];

// myArray3.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray3.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray3.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray3.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray3.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray3);


/*130
https://elzero.org/javascript-2021-array-some-method/
https://www.youtube.com/watch?v=nrmA_yGlG0g&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=130
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check = nums.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

/*131
https://elzero.org/javascript-2021-array-every-method/
https://www.youtube.com/watch?v=A-Tb2nY1Kfo&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=131
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let check1 = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check1);


/*132
https://elzero.org/javascript-2021-spread-syntax-and-use-cases/
https://www.youtube.com/watch?v=D9UdBHoAOzg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=132
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });


/*133
https://elzero.org/javascript-2021-map-and-set-challenge/
https://www.youtube.com/watch?v=SuxyO5je5XY&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=133

  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2)  *  [...n1, ...n2].length); // 210