console.log("Задание 3")

function createEmptyObj() {
    return Object.create(null);
}

const emptyObj = createEmptyObj();
console.log(emptyObj);

console.log(Object.getPrototypeOf(emptyObj));