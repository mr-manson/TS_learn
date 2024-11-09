"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const res = new Resp('data'); // с одним параметром и без дженериков будет unknown
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
