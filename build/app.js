"use strict";
class Vehicle {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
}
const lcv = new LCV();
lcv.run = 500;
console.log(kmToMiles(lcv).run);
