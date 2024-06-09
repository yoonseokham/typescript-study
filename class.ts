type Color = "red" | "green" | "blue";
interface ICar {
    name: string;
    speed: number;
    color: Color;
    start: () => void;
    price: number;
    // wheels: number;
}
abstract class Vehicle {
    abstract start(): void;
}
class Car implements ICar, Vehicle {
    speed: number = 0;
    price: number
    constructor(price: number, public readonly name: string, public color: Color = 'red') {
        this.price = price;
        this.start();
    }
    static wheels: number = 4;
    start = (): void => {
        console.log('Car started');
        console.log(this.name);
        console.log(this.color);
        this.speed = 10;
    }
}
let car = new Car(20000, 'BMW');
let car2 = new Car(300000, 'Audi', 'blue');
console.log(Car.wheels);
export { }