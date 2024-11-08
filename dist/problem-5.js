"use strict";
const getProperty = (param1, param2) => {
    const value = param1[param2];
    return value;
};
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "age"));
