let printer: (message?: string) => void = (message: string = 'hello world'): void => {
    console.log(message);
}
printer();
printer('hello');
interface IPrinter {
    (message?: string): void;
}
let printer2: IPrinter = (message: string = 'hello world'): void => {
    console.log(message);
}
printer2();

let sum: (...nums: number[]) => number = (...nums: Array<number>): number => {
    return nums.reduce((a, b) => a + b, 0);
}
let a: number = sum(1, 2, 3, 4, 5);
console.log(a);

interface ISam {
    name: string;
    age: number;
}
interface IUser extends ISam { }
const Sam: ISam = {
    name: 'Sam',
    age: 30,
}

let printer3 = function (this: ISam, age: number): void {
    this.age += age;
    console.log(this.name, this.age);
}

printer3.call(Sam, 10);
const user1: IUser = {
    name: 'Sam',
    age: 30,
}
const user2: IUser = {
    name: 'John',
    age: 30,

}
let join = (user: IUser): IUser | string => {
    if (user.name === 'Sam') {
        return user;
    } else {
        return 'not Sam';
    }
}
console.log(join(user1));
console.log(join(user2));
export { };