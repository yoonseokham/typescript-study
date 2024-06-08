let age: number = 32;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let week2: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
week2.push('Sun');

for (let i = 0; i < week.length; i++) {
    console.log(week[i]);
}

let b: [string, number, boolean] = ['Sun', 1, false];
console.log(b);
b.pop();
console.log(b);
b.push('Sun');
console.log(b);

enum Os {
    Window,
    Mac,
    Linux,
}

let c: () => void = (): void => {
    console.log('Hello');
}

let d: (message: string) => void = (message: string): void => {
    console.log(message);
}
let myOs: Os = Os.Mac;
let osPrint: (os: Os) => void = (os: Os): void => {
    switch (os) {
        case Os.Window:
            console.log('Window');
            break;
        case Os.Mac:
            console.log('Mac');
            break;
        case Os.Linux:
            console.log('Linux');
            break;
    }
}
osPrint(myOs);

c();
d('Hello');

let sum: (number1: number, number2: number) => number = (number1: number, number2: number): number => {
    return number1 + number2;
}
d(sum(1, 2).toString());


let null_value: null = null;
let undefined_value: undefined = undefined;
export { };