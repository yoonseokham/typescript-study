// keyof
const a = {
    name: 'yoonseok',
    age: 29,
}
interface IUser {
    name: string;
    age: number;
    hobby?: string;
}
type key_a = keyof IUser;

let key: key_a = 'name';
//Partial

let yoonseok: Partial<IUser> = {
    name: 'yoonseok',
}
let yoonseok_age: Partial<IUser> = {
    age: 29,
}
// Required
let yoonseok_hobby: Required<IUser> = {
    name: 'yoonseok',
    age: 29,
    hobby: 'soccer',
}
// Readonly
let yoonseok_readonly: Readonly<IUser> = {
    name: 'yoonseok',
    age: 29,
}
// yoonseok_readonly.name = 'yoonseok2';

// Record
type Grade = 1 | 2 | 3 | 4 | 5;
type Score = 'A' | 'B' | 'C' | 'D' | 'F';
type GradeScore = Record<Grade, Score>;
let grade_score: GradeScore = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'F',
}
interface IPeople {
    name: string;
    age: number;
}
let isValid = (user: IPeople): Record<keyof Pick<IUser, 'name' | 'age'>, boolean> => {
    return {
        name: user.name === 'yoonseok',
        age: user.age === 29,
    }
}

// Pick
let yoonseok_pick: Pick<IUser, 'name'> = {
    name: 'yoonseok',
}

let yoonseok_pick2: Pick<IUser, 'name' | 'age'> = {
    name: 'yoonseok',
    age: 29,
}

// Omit

let yoonseok_omit: Omit<IUser, 'age'> = {
    name: 'yoonseok',
    hobby: 'soccer',
}

// NonNullable
type ab = string | null | undefined;
let yoonseok_nonnullable: NonNullable<ab> = 'yoonseok';
