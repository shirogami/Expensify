// const person = {
//     name: 'Ashish',
//     age: 27,
//     location: {
//         city: 'gwalior',
//         temp: 44
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp } = person.location;
// console.log(`It's ${temp} in ${city}`);

// const address = ['1299 Juniper Street', 'Philadelphia', 'pennsylvania', 'United States'];
// const [, city = New - York, state] = address;

// console.log(`you are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$3.00', '$4.00'];
const [itemname, , mediumPrice] = item;

console.log(`A ${itemname} costs ${mediumPrice}`);