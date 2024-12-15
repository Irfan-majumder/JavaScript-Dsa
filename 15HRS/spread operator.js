// Spread operators are a new addition to the set of operators in JavaScript ES6

// It takes in an iterable (e.g., Arrays) and expands it into individual elements

// The spread operator is used to make shallow copies of JavaScript objects

// Using this operator makes the code concise and enhances the code reliability 



function parent(a,b,c,d) {
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
    console.log("d:",d);
}

const colors = ['green','yellow','red','teal'];

parent(colors); // a: [ 'green', 'yellow', 'red', 'teal' ]   b: undefined c: undefined d: undefined


parent(...colors); // a: green b: yellow c: red d: teal

const numbers = ['one', 'two', 'three', 'four'];
const stringNum = ['four', 'five', 'six', 'seven'];
const concat = [...numbers, ...stringNum];


console.log(concat ); // [ 'one', 'two', 'three', 'four', 'five', '

let peoples =  ['john', 'peter', 'jack', 'jane'];
const allPeoples = [peoples, 'mike', 'lucy', 'david'];
const allPeoples1 = ['mike', 'lucy', 'david'];
const allPeoples2 = [...peoples,...allPeoples1];

console.log(allPeoples);
console.log(allPeoples2);


 // The spread operator is used to make shallow copies of JavaScript objects

 const obj1 = {name: 'john', age: 25};
 const obj2 = {department : 'sales', location: 'new york'};
 const obj3 = {...obj1, ...obj2};
 const obj4 = {obj1, obj2};

  console.log(obj4); // { obj1: { name: 'john', age: 25 }, obj2: { department: 'sales', location: 'new york' } }
  console.log(obj3); // { name: 'john', age: 25, department: ' sales', location: 'new york' }
  

  let personal = {
    name: 'john',
    age: 25,
    address: {
        street: '123 main st',
        city: 'new york',
        state: 'ny'
        }
  }

  const clone = { ...personal };
  console.log(clone);


  // 1. Make a clone of "arr,arr2" by using spread operator
  // 2 Make a clone of "user" object using spread operator

  let arr = [1,2,3,4,5];
  let arr2 = [6,7,8,9,10];

  const user = {
    name: 'john',
    age: 25,
  }
  const arr3 = [...arr, ...arr2];
  const user1 = {...user};

  console.log(arr3);
  console.log(user1); // { name: 'john', age: 25 }

  

 const person = {
  name: 'john',
  age: 25,
  country : 'USA'
 };

 const { name: personName, age:personAge, country:personCountry } = person;
 console.log( personName, personAge, personCountry);




// Function Destructuring in js

const person2 = {

  name: 'john',
  age: 25,
  country: 'USA'

};

function printPersonInfo(person) {
    console.log(` Name: ${person.name}`);
    console.log(` Age: ${person.age}`);
    console.log(` Country: ${person.country}`);
}

// By Destructuring the functions parameters

function printPersonInfo1({name,age,country}) {
  console.log(` Name: ${name}`);
  console.log(` Age: ${age}`);
  console.log(` Country: ${country}`);
}

printPersonInfo(person);
printPersonInfo1(person);




let options = {
  title: "My Menu",
  items: ['item1', 'item2', 'item3'],

};

function showMenu({title,width:w=100,height:h = 200, items:[item1,item2]}) {
  console.log(`${title} ${w} ${h}`)
  console.log(item1);
  console.log(item2);
};
showMenu(options);




let options1 = {
  title: "My Menu",
  items: ['item1', 'item2', 'item3'],

};

function showMenu1({title}) {
  console.log(`${title}`);
}
showMenu1(options1); // undefined