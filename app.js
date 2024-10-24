"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // сохраняет в базу
    }
    // переопределение метода
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super(); // супер всегда вызывается самым первым, если идет обращение к свойствам класса
        this.name = 'admin';
        console.log(this.name);
    }
}
new Admin();
