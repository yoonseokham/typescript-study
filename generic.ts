interface ILength {
    <T>(arr: Array<T>): number;
}
let getSize: <T>(arr: Array<T>) => number = <T>(arr: Array<T>): number => {
    return arr.length;
}
console.log(getSize<number>([1, 2, 3, 4, 5]));
console.log(getSize<string>(['a', 'b', 'c']));
console.log(getSize<string | number>(['a', 'b', 'c', 1, 2, 3]));
interface IMobile<T> {
    model: string;
    version: T;
}

let mobile: IMobile<number> = {
    model: 'Galaxy',
    version: 10,
}
let mobile2: IMobile<string> = {
    model: 'iPhone',
    version: 'X',
}
console.log(mobile);
console.log(mobile2);

let version_getter = <T>(mobile: IMobile<T>) => {
    console.log(mobile.version);
}
version_getter<number>(mobile);
version_getter<string>(mobile2);

interface ICar {
    name: string;
    speed: number;
}

interface IBook {
    name: string;
    pages: number;
}
interface IBitcoin {
    supply: 21000000;
}

let objectPrinter = <T extends { name: string }>(obj: T): void => {
    console.log(obj.name);
}
objectPrinter<ICar>({ name: 'BMW', speed: 200 });
objectPrinter<IBook>({ name: 'Book', pages: 100 });
// objectPrinter<IBitcoin>({ supply: 21000000 });
export { };