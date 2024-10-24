type PaymentStatus = 'new' | 'paid';

class Payment {
	id: number;
	status: PaymentStatus = 'new';

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = 'paid';
	}
}

class PersistedPayment extends Payment {
	databaseId: number;
	paidAt: Date;

	constructor() {
		const id = Math.random();
		super(id);
	}

	save() {
		// сохраняет в базу
	}
	// переопределение метода
	override pay(date?: Date) {
		super.pay();
		if (date) {
			this.paidAt = date;
		}
	}
}

class User {
	name: string = 'user';

	constructor() {
		console.log(this.name);
	}
}

class Admin extends User{
	name: string = 'admin';

	constructor() {
		super(); // супер всегда вызывается самым первым, если идет обращение к свойствам класса
		console.log(this.name);
	}
}

new Admin();

class HttpError extends Error {
	code: number;

	constructor(message: string, code?: number) {
		super(message);
		this.code = code ?? 500;
	}
}