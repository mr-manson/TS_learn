"use strict";
const getFullName = (userEntity) => {
    return `${userEntity.firstname} ${userEntity.surname}`;
};
;
const user = {
    firstname: 'Max',
};
console.log(getFullName(user));
