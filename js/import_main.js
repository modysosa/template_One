// /*167
// https://elzero.org/javascript-2021-modules-import-and-export/
// https://www.youtube.com/watch?v=3NZEb3uPLtM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=167

//   Modules
//   - Import And Export
// */

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a, arr, saySomething };



/*168
https://elzero.org/javascript-2021-named-vs-default-export-and-import-all/
https://www.youtube.com/watch?v=xbW_gX9KIak&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=168
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a as myNumber, arr, saySomething };

export default function () {
  return `Hello`;
}