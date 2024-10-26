"use strict";
class Vehicle {
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
const vehicle = new Vehicle();
vehicle.model = 'a';
console.log(vehicle.model);
