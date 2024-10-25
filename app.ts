class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class Users extends Array<User> { // не рекомендуется - много неподходящих методов массива
	searchByName(name: string) {
		return this.filter(u => u.name === name);
	}

	override toString(): string {
		return this.map(u => u.name).join(', ');
	}
}

const users = new Users();
users.push(new User ('Вася'));
users.push(new User ('Петя'));
console.log(users.toString());

// лучше делать так
class UserList {
	users: User[];

	push (u: User) {
		this.users.push(u);
	};
}