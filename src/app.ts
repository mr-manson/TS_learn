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