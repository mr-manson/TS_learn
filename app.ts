const getFullName = (userEntity: User): string => {
	return `${userEntity.firstname} ${userEntity.surname}`;
}

interface User {
	firstname: string,
	surname?: string,
	city?: string,
	age?: number,
};

const user: User = {
	firstname: 'Max',

}

console.log(getFullName(user));