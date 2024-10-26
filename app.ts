class Vehicle {
	public make: string;
	private damages: string[];
	private _model: string;
	protected run: number;
	#price: number; // # - приватное свойство в JS, в ТС лучше использовать private

	set model(m: string) {
		this._model = m;
		this.#price = 1000;
	}

	get model() {
		this.run = 100;
		return this._model;
	}

	addDamage(damage: string): void {
		this.damages.push(damage);
	}
}

class EuroTrack extends Vehicle {
	setDamage() {
		// this.damages - error
	}
	setRun(km: number) {
		this.run = km / 0.62;
	}
}

const vehicle = new Vehicle();
vehicle.model = 'a';

console.log(vehicle.model);