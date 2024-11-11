// /*167
// https://elzero.org/javascript-2021-modules-import-and-export/
// https://www.youtube.com/watch?v=3NZEb3uPLtM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=167
// */
// import { a, arr, saySomething as s } from "./import_main.js";

// console.log(a);
// console.log(arr);
// console.log(s());

/*168
https://elzero.org/javascript-2021-named-vs-default-export-and-import-all/
https://www.youtube.com/watch?v=xbW_gX9KIak&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=168
 */
// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(elzero());

import * as all from "./import_main.js";

console.log(all);

console.log(all.myNumber);
console.log(all.arr);