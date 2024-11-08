
function removeDuplicates(params: number[]):number[] {
    const removedDuplicatedArrray: number[] = params.filter((value: number,index: number ) => params.indexOf(value) === index);
    return removedDuplicatedArrray
}


// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
