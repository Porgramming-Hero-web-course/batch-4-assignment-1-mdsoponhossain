function countWordOccurrences(param1:string, param2:string):number{
const wordsArray = param1.split(' ');
const matchedWord = wordsArray.filter((value)=>value.toLocaleLowerCase() === param2.toLocaleLowerCase());
return matchedWord.length ;
};


// console.log(countWordOccurrences("I love typescript", "typescript"))