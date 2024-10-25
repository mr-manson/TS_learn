class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class Users extends Array<User> { // не рекомендуется - получаем много лишних методов массива
	searchByName(name: string) {
		return this.filter(u => u.name === name);
	}

	override toString(): string {
		return this.map(u => u.name).join(', ');
	}
}

const users = new Users();
users.push(new User('Вася'));
users.push(new User('Петя'));
console.log(users.toString());

// лучше делать так
class UserList {
	users: User[];

	push(u: User) {
		this.users.push(u);
	};
}

// смешивание предметной области - юзера с платежами
class Payment {
	date: Date;
}

class UserWithPayment extends Payment {
	name: string;
}

// правильно так
class UserWithPayment2 {
	user: Users;
	payment: Payment;

	constructor(user: Users, payment: Payment) {
		this.user = user;
		this.payment = payment;
	}
}