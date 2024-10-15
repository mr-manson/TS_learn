"use strict";
const logId = (id) => {
    if (typeof id === "string") {
        console.log(id);
    }
    else if (typeof id === "number") {
        console.log(id);
    }
    else {
        console.log(id);
    }
};
const logError = (err) => {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
};
const logObj = (obj) => {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
};
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = a.concat(b);
console.log(c);
