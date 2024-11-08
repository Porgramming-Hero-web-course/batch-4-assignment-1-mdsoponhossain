

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {

    for (let a of keys) {
        if (!(a in obj)) {
            return false;
        }
    }
    return true
};

const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));

