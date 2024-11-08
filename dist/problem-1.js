"use strict";
function sumArray(params) {
    const total = params.reduce((a, b) => a + b, 0);
    return total;
}
;
const array1 = [1, 2, 3, 4, 20];
console.log(sumArray(array1));
