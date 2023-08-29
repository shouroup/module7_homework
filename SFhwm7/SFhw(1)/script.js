function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${obj[key]}`);
        }
    }
}

const exampleObject = {
    name: 'John',
    age: 30,
    job: 'Engineer'
};

printOwnProperties(exampleObject);