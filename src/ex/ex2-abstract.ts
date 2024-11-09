abstract class Logger {
	abstract log(message: string): void;

	printDate(date: Date): void {
		this.log(date.toString());
	};
}

class DateLogger extends Logger {
	log(message: string): void {
		console.log(message);
	}

	logWithDate(date: Date, message: string): void {
		this.printDate(date);
		this.log(message);
	}
}

const log = new DateLogger();
log.logWithDate(new Date(), '123');