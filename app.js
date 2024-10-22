"use strict";
class User {
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return this._login;
    }
}
const user = new User();
user.login = '123';
console.log(user.login);
