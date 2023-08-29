function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const exampleObject = {
    name: 'Alice',
    age: 25,
    job: 'Teacher'
};

console.log(hasProperty(exampleObject, 'age'));
console.log(hasProperty(exampleObject, 'address'));