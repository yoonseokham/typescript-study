// function overloading

interface IUser {
    name: string;
    age: number;
}

let user = (name: string, age: number | string): IUser | string => {
    if (typeof age === 'number') {
        return {
            name,
            age
        }
    } else {
        return "age is not a number";
    }
}

console.log(user('Sam', 30));
console.log(user('Sam', '30'));
export { };