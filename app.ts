class UserService {
	static db: any;
	static async getUser(id: number) { // статический метод может быть асинхронным
		return UserService.db.findById(id); // обращаемся не к this, а к статическому методу класса
	}
	create(){
		UserService.db; // можно обратиться к статическим методам и свойствам
	};

	static {
		// await new Promise(); // нельзя использовать асинхрон в статическом блоке
		UserService.db = 'asdf'; // статичный блок, выполняется когда в коде появляется UserService
	}
}

const a = UserService.db;
UserService.getUser(1);

const inst = new UserService();
inst.create();