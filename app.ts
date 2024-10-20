interface User {
	name: string
}

const getUser = () => {
	if(Math.random() > 0.5 ){
		return null; //без null будет undefined
	} else {
		return {
			name: 'Вася'
		}
	}
}

const user = getUser();
if(user){
	const n = user.name
}

