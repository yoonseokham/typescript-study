type IScore = 'A' | 'B' | 'C' | 'D' | 'F';
enum Gender {
    male,
    female,
}
interface IUser {
    readonly name: string,
    age: number,
    AddAge: () => void,
    UpdateAge: (age: number) => void,
    GetAge: () => number,
    gender?: Gender,
    SetGender: (gender: Gender) => void,
    [grade: number]: IScore,
}
let user: IUser = {
    name: 'John',
    age: 32,
    AddAge: function (): void {
        this.age += 1;
    },
    UpdateAge: function (age: number): void {
        this.age = age;
    },
    GetAge: function (): number {
        return this.age;
    },
    SetGender: function (gender: Gender): void {
        this.gender = gender;
    },
};
console.log(user);
user['age'] += 1;
console.log(user);
user.AddAge();
console.log(user);
user.UpdateAge(0);
console.log(user);
console.log(user.GetAge());
user.SetGender(Gender.male);
console.log(user);
user.SetGender(Gender.female);
console.log(user);
user[1] = 'A';
user[2] = 'B';
console.log(user);

interface IBinaryOperationFunction {
    (number1: number, number2: number): number;
}
let add: IBinaryOperationFunction = (number1: number, number2: number): number => {
    return number1 + number2;
}
user[add(1, 2)] = 'A';
console.log(user);

interface ICar extends
    hardware {
    name: string,
    speed: number,
    increaseSpeed: () => void,
}

class BMW implements ICar {
    constructor(public name: string) {
        this.speed = 0;
    }
    madeOf: string = 'steel';
    speed: number;
    increaseSpeed(): void {
        this.speed += 10;
    }
}
let a = new BMW('yoonseok');
a.increaseSpeed();
console.log(a);
class Tesla implements ICar {
    name
    speed = 0;
    constructor(name: string) {
        this.name = name;
    }
    madeOf: string;
    increaseSpeed: () => void = () => {
        this.speed += 5;
    };
}
console.log(new Tesla('model3'));
interface supercar extends ICar {
    boost: () => void;
    stop: () => void;
}
class Ferrari implements supercar {
    speed: number;
    constructor(public name: string) {
        this.speed = 0;
    }
    madeOf: string;
    stop: () => void = () => {
        this.speed = 0;
    }
    boost: () => void = () => {
        this.speed += 50;
    }
    increaseSpeed: () => void = () => {
        this.speed += 10;
    }
}
interface hardware {
    madeOf: string;
}
let c = new Ferrari('F8');
c.increaseSpeed();
c.boost();
console.log(c);
export { }
