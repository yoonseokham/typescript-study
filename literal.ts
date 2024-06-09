type Job = "teacher" | "doctor" | "engineer" | "police" | "firefighter";

const job: Job = "teacher";
interface IUser {
    name: string;
    age: number;
}
const user: IUser = {
    name: "Sam",
    age: 30,
};
interface IStudent extends IUser {
    grade: 1 | 2 | 3 | 4 | 5;
}
interface IEmployee extends IUser {
    job: Job;
}

let printer: (user: IStudent | IEmployee) => void = (user: IStudent | IEmployee): void => {
    if ("grade" in user) {
        console.log(user.name, user.age, user.grade);
    } else {
        console.log(user.name, user.age, user.job);
    }
}
printer({ name: "Sam", age: 30, grade: 5 });
printer({ name: "Sam", age: 30, job: "teacher" });

let join = (): IStudent & IEmployee => {
    return {
        name: "Sam",
        age: 30,
        grade: 5,
        job: "teacher",
    };
}
console.log(join());
export { };
