type User = {
	name: string,
	age: number,
	skills: string[]
};

type Role = {
	id: number,
};

type UserWithRole = User & Role;

let user: UserWithRole = {
	name: 'Max',
	age: 40,
	skills: ['1', '2', '3'],
	id: 1,
}