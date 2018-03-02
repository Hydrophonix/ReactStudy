const users = [
        { id: 1, age: 21, name: 'Vasya', surname: 'Vasiliev' },
        { id: 2, age: 28, name: 'Ivan', surname: 'Ivanov' },
        { id: 3, age: 18, name: 'Irina', surname: 'Plushkina' }
];

const fullName = users.map(item => `${item.name} ${item.surname}`);
const adult = users.filter(item => item.age >= 21);

console.log(fullName);
console.log(adult);

const orders = [{
        id: 5,
        date: '21-01-2015',
        amount: 783
    }, {
        id: 8,
        date: '24-01-2015',
        amount: 67
    }, {
        id: 21,
        date: '29-01-2015',
        amount: 1234
    }, {
        id: 78,
        date: '04-02-2015',
        amount: 123
    }, {
        id: 23,
        date: '15-02-2015',
        amount: 245
    }];

const averageValue = orders.reduce((value, item) => value + item.amount, 0) / orders.length;
console.log(averageValue);

const users2 = [{
       name: 'Vasya',
       surname: 'Ivanov',
       interests: ['computers', 'food']
   }, {
       name: 'Ivan',
       surname: 'Tretyakov',
       interests: ['computers', 'food', 'cars']
   }, {
       name: 'Daryna',
       surname: 'Petrova',
       interests: ['cars', 'math']
   }, {
       name: 'Petro',
       surname: 'Nalyvaiko',
       interests: ['computers', 'food', 'math']
   }];

function counter(interest) {
  return users2.reduce((count, user) => user.interests.some(item => item === interest) ? ++count : count, 0)
};

const interests = {
  computers: counter('computers'),
  food: counter('food'),
  cars: counter('cars'),
  math: counter('math')
}

console.log(interests);
