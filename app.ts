interface User {
	name: string,
	age: number,
	skills: string[],
}

interface Role {
	id: number,
}

interface UserWithRole extends User, Role {
}

let user: UserWithRole = {
	name: 'Max',
	age: 40,
	skills: ['1', '2', '3'],
	id: 1,
}