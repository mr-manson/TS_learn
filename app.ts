class User {
	_login: string;
	password: string;

	set login(l: string | number) {
		this._login = 'user-' + l;
	}

	get login() {
		return this._login
	}
}

const user = new User();
user.login = '123';
console.log(user.login);