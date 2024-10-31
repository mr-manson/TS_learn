class UserBuilder {
	name: string;

	setName(name: string): this { //this или UserBuilder
		this.name = name;
		return this;
	}

	// TYPE GUARD
	isAdmin(): this is AdminBuilder{
		return this instanceof AdminBuilder;
	}
}

class AdminBuilder extends UserBuilder {
	roles: string[];
}

const res = new UserBuilder().setName('Вася');
const res2 = new AdminBuilder().setName('Петя'); // если в UserBuilder будет тип UserBuilder, то res2 тоже будет UsrBuilder

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()){
	console.log(user);
} else {
	console.log(user);
}