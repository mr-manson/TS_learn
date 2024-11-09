"use strict";
/*
написать функцию сортировки любых объектов, которые имеют по id по убыванию и возрастанию
*/
const data = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Коля" },
];
function sort(data, type = "asc") {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    });
}
console.log(sort(data, 'desc'));
console.log(sort(data));
