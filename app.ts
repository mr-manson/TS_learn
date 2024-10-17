interface User {
	name: string,
	age: number,
	skills: string[],

	log: (id: number) => string,
}

interface Role {
	id: number,
}

type Role2 = {
	id: number,
}

interface UserWithRole extends User, Role {
}

let user: UserWithRole = {
	name: 'Max',
	age: 40,
	skills: ['1', '2', '3'],
	id: 1,

	log(id) {
		return '';
	}
}

//интерфейс-словарь, сегодня не используется т.к. есть Records
interface UserDic{
	[index: number]: User
}