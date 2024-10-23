interface ILogger {
	log(...args: any): void;

	error(...args: any): void;
}

class Logger implements ILogger {
	log(...args: any): void {
		console.log(...args);
	}

	async error(...args: any): Promise<void> {
		// кинуть ошибку во внешнюю систему
		console.log(...args);
	}
}

interface IPayable {
	pay(paymentId: number): void;
	price?: number;
}

interface IDeletable {
	delete(): void
}

class User implements IPayable, IDeletable {
	pay(paymentId: number | string): void { // тип должен рабыть равен или шире интерфейса
		/// что-то там
	}

	delete(): void {
	}

}