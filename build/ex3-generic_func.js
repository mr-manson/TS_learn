"use strict";
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'boolean':
        case "symbol":
        case "bigint":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(toString(1));
console.log(toString('asdf'));
console.log(toString([1, 2, 3]));
console.log(toString({ a: 1 }));
