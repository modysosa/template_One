/*134
https://www.youtube.com/watch?v=V-8vs_teVlo&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=134
https://elzero.org/javascript-2021-intro-and-what-is-regular-expression/
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

let str1 = '10 20 100 1000 5000';
let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

let invalidEmail = 'Osama@@@gmail....com';
let validEmail = 'o@nn.sa';

let ip = '192.168.2.1'; // IPv4

let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd'; 

/*
https://www.youtube.com/watch?v=c5ZyMM0CKzk&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=135
https://elzero.org/javascript-2021-regular-expression-modifiers/
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")   /////////////

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;

console.log(myString.match(regex));

/*136
https://elzero.org/javascript-2021-regular-expression-ranges-part-1/
https://youtube.com/watch?v=HcVBlbDHbFA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=136
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

/*137
https://elzero.org/javascript-2021-regular-expression-ranges-part-2/
https://www.youtube.com/watch?v=3f30hJMi4jI&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=137
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString1 = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
console.log(myString1.match(atozSmall));
console.log(myString1.match(NotAtozSmall));
console.log(myString1.match(atozCapital));
console.log(myString1.match(NotAtozCapital));
console.log(myString1.match(aAndcAnde));
console.log(myString1.match(NotaAndcAnde));
console.log(myString1.match(lettersCapsAndSmall));
console.log(myString1.match(numsAndSpecials));
console.log(myString1.match(specials));


/*138
https://www.youtube.com/watch?v=gYB66iXxKlM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=138
https://elzero.org/javascript-2021-regular-expression-character-classes-part-1/
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));


/*139
https://elzero.org/javascript-2021-regular-expression-character-classes-part-2/
https://www.youtube.com/watch?v=jrg1p3Xv6E0&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=139
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/ig.test("Osama"));
console.log(/(\bspam|spam\b)/ig.test("1Spam"));
console.log(/(\bspam|spam\b)/ig.test("Spam1"));



/*140
https://elzero.org/javascript-2021-regular-expression-quantifiers-part-1/
https://www.youtube.com/watch?v=n_E9It_E2eo&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=140
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails1 = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails1.match(mailsRe));

let nums1 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe1 = /0\d*0/ig;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));


/*141
https://elzero.org/javascript-2021-regular-expression-quantifiers-part-2/
https://www.youtube.com/watch?v=f1DBhT9YKvI&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=141
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

/*142
https://elzero.org/javascript-2021-regular-expression-quantifiers-part-3/
https://www.youtube.com/watch?v=k0JeghEiRBg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=142
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString2 = "We Love Programming";
let names2 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString2));
console.log(/^we/ig.test(myString2));
console.log(/lz$/ig.test(names2));
console.log(/^\d/ig.test(names2));

console.log(names2.match(/\d\w{5}(?=Z)/ig));
console.log(names2.match(/\d\w{8}(?!Z)/ig));

/*143
https://elzero.org/javascript-2021-regular-expression-replace-with-pattern/
https://www.youtube.com/watch?v=08ny8Udc4Ug&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=143
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re1 = /@/ig;
console.log(txt.replaceAll(re1, "JavaScript"));
console.log(txt.replaceAll(/@/ig, "JavaScript"));

/*144
https://elzero.org/javascript-2021-regular-expression-form-validation/
https://www.youtube.com/watch?v=tFtDqOzD1g0&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=144
  Regular Expression
  - Input Form Validation Practice
*/
/*
<form id="register" action="" method="get">
  <input type="text" id="phone" name="the-phone" maxlength="15" />
  <input type="submit" value="Register" />
</form>
*/ 

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
}


/*145
https://www.youtube.com/watch?v=aTBNZ3jKHpA&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=145
https://docs.validatar.com/docs/commonly-used-regex
top commonly-used-regex

Regular expretuions Sites
https://regexr.com/
https://www.regextester.com/
https://regex101.com/

146
Challenge

/*
  Regular Expression
  - Challenge
*/

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = //;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));






