class Payment {
	private date: Date = new Date();

	getDate(this: Payment) { // должны работать с контекстом Payment'а
		return this.date;
	}

	getDateArrow = () => { // в стрелочной функции контекст не теряется, он всегда привязан к Payment'y
		return this.date;
	}

}

const p = new Payment();

const user = {
	id: 1,
	paymentDate: p.getDate.bind(p),
	paymentDateArrow: p.getDateArrow,
}

//console.log(p.getDate());
//console.log(user.paymentDate());
//console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
	save() {
		return super.getDate();
		// super.getDateArrow работать не будет, в super можно получить обычную функцию, но не стрелочную, только если super заменить на this
	}
}

console.log(new PaymentPersistent().save());