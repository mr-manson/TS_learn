function generateError(message: string): never { // функция никогда ничего не возвращает
	throw new Error(message);
}

function dumpError(): never {
	while (true) {
	}
}

function rec(): never {
	return rec();
}

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
	switch (action) {
		case 'refund':
			// ....
			break;
		case 'checkout':
			// ....
			break;
		case 'reject':
			// ....
			break;
		default:
			const _: never = action; // проверка если не все экшены обработаны
			throw new Error('Unknown payment action');
	}
}

function isString(x: string | number): boolean {
	if (typeof x === 'string') {
		return true;
	} else if (typeof x === 'number') {
		return false;
	}
	generateError('asasas');
}