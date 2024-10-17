interface User {
	name: string,
	age: number,
	skills: string[],
}

interface UserWithRole extends User{
	id: number,
}

let user: UserWithRole = {
	name: 'Max',
	age: 40,
	skills: ['1', '2', '3'],
	id: 1,
}