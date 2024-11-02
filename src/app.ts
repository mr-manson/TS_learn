const a: Array<number> = [1, 2, 3, 4, 5];

async function test (){
	const a = await new Promise<number>((resolve, reject) => {
		resolve (1);
	})
}

const check: Record<string, boolean> = { //смотри раньше
	drive: true,
	kpp: false,
}