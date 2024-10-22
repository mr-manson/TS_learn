"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["HOLDED"] = 0] = "HOLDED";
    PaymentStatus[PaymentStatus["PROCESSED"] = 1] = "PROCESSED";
    PaymentStatus[PaymentStatus["REVERSED"] = 2] = "REVERSED";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.HOLDED;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.PROCESSED) {
            throw new Error('Платеж не может бюыть возвращен');
        }
        this.status = PaymentStatus.REVERSED;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
