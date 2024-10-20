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

interface Admin {
	name: string;
	role: number
}

const admin: Admin = { //преобразование user в admin (не рекомендуется, т.к. у админа остаются лишние поля юзера)
	...user,
	role: 1
}

// правильное преобразование - маппинг
function userToAdmin(user: User): Admin {
	return {
		name: user.login,
		role: 1
	}
}