const Obj = {
    name: 'Андрей',
    surname: 'Шишков',
    age: 19,
};

console.log("Задание 2");

function checkExistence(Name, obj) {
    return obj.hasOwnProperty(Name);
}

let result = checkExistence('age', Obj);
console.log(result);
result = checkExistence('FatherName', Obj);
console.log(result);