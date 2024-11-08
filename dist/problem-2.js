"use strict";
function removeDuplicates(params) {
    const removedDuplicatedArrray = params.filter((value, index) => params.indexOf(value) === index);
    return removedDuplicatedArrray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 10, 10]));
