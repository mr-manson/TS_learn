function logMiddleware <T> (data: T): T {
	console.log(data);
	return data;
}

const res = logMiddleware<number>(10);

function getSplitHalf <T> (data: Array<T>): Array<T> {
	const l = data.length / 2
	return data.splice(0, l);
}

const half = getSplitHalf([1,2,3]);
console.log(half);