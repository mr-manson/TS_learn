class Resp<D, E> {
	data?: D;
	error?: E;

	constructor(data?: D, error?: E) {
		if (data) {
			this.data = data;
		}
		if (error) {
			this.error = error;
		}
	}
}

const res = new Resp<string, number>('data') // с одним параметром и без дженериков будет unknown

class HTTPResp <F> extends Resp<string, number>{	// при наследовании надо указывать типы данных родителя
	code: F;

	setCode(code: F) {
		this.code = code;
	}
}