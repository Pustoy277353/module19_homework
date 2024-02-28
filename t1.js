const Obj = {
    name: 'Андрей',
    surname: 'Шишков',
    age: 19,
};

console.log("Задание 1");

function displayProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${obj[key]}`);
        }
    }
}

displayProp(Obj);