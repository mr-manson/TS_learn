let a: number = 5;
let b: string = a.toString();

let c: string = 'asdfg';
let d: number = parseInt(c);

let e: string = new String(a).valueOf();

interface User {
	name: string;
	email: string;
	login: string;
}

const user = {
	name: 'Вася',
	email: 'vasia@gmail.com',
	login: 'vasia',
} as User; // или : User