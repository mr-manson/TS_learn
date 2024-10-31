"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
    ;
}
class DateLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(date, message) {
        this.printDate(date);
        this.log(message);
    }
}
const log = new DateLogger();
log.logWithDate(new Date(), '123');
