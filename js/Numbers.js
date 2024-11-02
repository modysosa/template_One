let title="Mohamed", description = "Description", date="15/10/2024";
let markUp = `
<div class="card">
        <h3>Hello ${title}</h3>
        <p>${description}</p>
        <Span>${date}</Span>    
</div>`;
document.write(markUp.repeat(4));
document.write(10 +20);
// console.log(10+20);

let a=10;
let b="20";
let c=80;
//           10  +  20  +  80  - 11
console.log(+a++ + +b++ + +c++ - +a++);
//           13 -  21 + 81  + 13  + 14
console.log(++a + -b + +c++ - -a++ + +a);
//           81 + 21 + 13  *  21  - 22 * 13 + 12 - 1
//                375 -  306
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// console.log(--c)
// console.log(+b)
// console.log(--a)
// console.log(+b++)
// console.log(+b)
// console.log(a)
// console.log(--a)
// console.log(+true)
let d= "-100";
let e= "20";
let f=30;
let g=true;
console.log(-d * e); //2000
console.log(-d + e * ++g +f  + ++g);//173
console.log((100).toString());
console.log(100.10.toString());
console.log(100.555555.toFixed(2));
console.log(Number("100 Mody"));
console.log(+"100 Mody");
console.log(parseInt("100 Mody"));
console.log(parseInt("Mody 100 Mody"));
console.log(parseInt("100.500 Mody"));
console.log(parseFloat("100.500 Mody"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));
console.log(Number.isNaN(100));
console.log(Number.isNaN(100 / "Mody"));

// Math
console.log(Math.round(99.5));
console.log(Math.round(99.2));
console.log(Math.ceil(99.2));
console.log(Math.floor(99.1));
console.log(Math.max(10,20,30,40,50));
console.log(Math.min(100,10,-100,200));
console.log(Math.pow(2,4));
console.log(Math.random());
console.log(Math.trunc(99.5));
// Challenge
a=1_00;
b=2_00.5;
c=1e2;
d=2.4;
console.log(parseInt(Math.min(a,b,c,d))); // 2
console.log(Math.pow(a,(Math.floor(d)))); // 10000
// variable d get 2 with 4 method
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // use b and d to get result 66.67
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); // use b and d to get result 67