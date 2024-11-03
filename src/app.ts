function getSplitHalf<T>(data: Array<T>): Array<T> {
	const l = data.length / 2;
	return data.splice(0, l);
}

getSplitHalf([1, 2, 3]);

// типизированная функция
const split: <T>(data: Array<T>) => Array<T> = getSplitHalf;

//===============

interface ILogLine<T> {
	timeStamp: Date;
	data: T;
}

type LogLine<T> = {
	timeStamp: Date;
	data: T
};

const logLine: ILogLine<{ a: number }> = {
	timeStamp: new Date(),
	data: {
		a: 1
	},
}