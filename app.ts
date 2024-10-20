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

function logId(id: string | number) {
	if (isString(id)) {
		console.log(id);
	} else {
		console.log(id);
	}
}

// функция type guard
function isString (x: string | number) : x is string {
	return typeof x === 'string';
}

function isAdmin (user: User | Admin): user is Admin {
	return 'role' in user;
}

function isAdmin2 (user: User | Admin): user is Admin {
	return (user as Admin).role !== undefined;
}

function setRoleZero (user: User | Admin) {
	if (isAdmin(user)) {
		user.role = 0;
	} else {
		throw new Error('User is not admin');
	}
}