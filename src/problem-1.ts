

function sumArray(params: number[]): number {
    const total = params.reduce((a, b) => a + b, 0);
    return total;
};


// console.log(sumArray([1, 2, 3, 4, 5]))