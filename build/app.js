"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware(10);
function getSplittedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
const half = getSplittedHalf([1, 2, 3]);
console.log(half);
