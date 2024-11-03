class Vehicle {
	run: number;
}

function kmToMiles<T extends Vehicle> (vehicle: T): T {
	vehicle.run = vehicle.run/0.62;
	return vehicle;
}

class LCV extends Vehicle {
	capacity: number;
}

const lcv = new LCV();
lcv.run = 500;

console.log(kmToMiles(lcv).run);

// generic с примитивами
function logId <T extends string | number> (id: T): T {
	console.log(id);
	return id;
}