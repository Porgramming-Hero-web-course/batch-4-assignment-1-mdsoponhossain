

interface Person { name: string, age: number }

const getProperty = <X extends { name: string; age: number;
}, Y extends keyof X>(param1: X, param2: Y): X[Y] => {
    const value = param1[param2];
    return value;
}

const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));



