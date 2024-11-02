// Zero baze indixing
let theName="  Ahmed  ";
console.log(theName);
console.log(theName[1]);
//  character at postion
console.log(theName.charAt(1));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
// chain Method
console.log(theName.trim().charAt(2).toUpperCase());

/* 
indexOf(Value [Mand], Start [Opt] 0)
lastIndexOf(Value [Mand], Start [Opt] length)
slice(Start [mand], End [Opt] Not including End)
repeat(Times) ES6 Ekma script 6
split(separator [Opt], limit[Opt]) return as array
*/

let a = "Mohamed Abdel Rahman";
console.log(a.indexOf("Abdel"));
console.log(a.indexOf("Abdel" , 9));

console.log(a.indexOf("m"));
console.log(a.lastIndexOf("m"));
console.log(a.lastIndexOf("m" , 16)); 

console.log(a.slice(8,13));
console.log(a.slice(-12, -7));

console.log(a.repeat(5));
console.log(a.split()); // return as array
console.log(a.split(" "));
console.log(a.split(""));
console.log(a.split(" ",2));
console.log(a.split("",7));

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let b = "Elzero Web School";

console.log(b.length);

console.log(b.substring(2, 6));
console.log(b.substring(6, 2));
console.log(b.substring(2, 6));
console.log(b.substring(-10, 6)); // 0 - 6
console.log(b.substring(b.length - 5, b.length - 3));

console.log(b.substr(0, 6));
console.log(b.substr(17));
console.log(b.substr(-3));
console.log(b.substr(-5, 2));

console.log(b.includes("Web"));
console.log(b.includes("Web", 8));

console.log(b.startsWith("E"));
console.log(b.startsWith("E", 2));
console.log(b.startsWith("zero", 2));

console.log(b.endsWith("o", 6));
console.log(b.endsWith("ro", 6));
console.log(b.endsWith("l"));

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let c = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(c.charAt(2).toUpperCase()+c.slice(3,6)); // Zero

// 8 H
console.log(c.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(c.split("",6)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(c.substr(0,7)+ c.substr(-6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(c.charAt(0).toLowerCase() + c.substring(1,c.length-1).toUpperCase() + c.charAt(c.length-1).toLowerCase()); // eLZERO WEB SCHOOl