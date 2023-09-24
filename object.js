const user = {
    name : 'Arun',
    age : 27,
    email : 'arun@gmail.com',
    password :'abc123',
    'roll-no': 'a123'
}

console.log(user.name);
console.log(user['age']);

console.log(user['roll-no']);

user.city = 'Lucknow';

console.log(user);

user.age = 42;

console.log(user);

const smartphone = {
    brand : 'Samsung',
    model : 's23',
    price : 80000,
    colors : ['black','brown','grey']
};

console.log( smartphone.colors[2]);

smartphone.colors = 'black';

console.log(smartphone)


const smartphoneList = [ {
    brand : 'Samsung',
    model : 's23',
    price : 80000,
    colors : ['black','brown','grey']}
];

console.log(smartphoneList[0].brand);
console.log(smartphoneList[0].colors[1]);