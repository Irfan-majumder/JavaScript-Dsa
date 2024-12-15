// Destructuring alllows us to assign values to variables from an array or object .


const food = ['pizza', 'sushi', 'tacos'];

const [A, B, C] = food;
console.log(A); // pizza
console.log(B); // sushi
console.log(C); // tacos
// console.log(food); // ['pizza', 'sushi', 'tacos']

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const [color1,color2, color3] = colors;
console.log(color1); // red
console.log(color2); // green
console.log(color3); // blue


// In Object destructuring order doesn't matters but the name does matters


const student = {
    name: 'John',
    age: 25,
    gender: 'male'

}

const {name} = student;
console.log(name); // John

const {name1,age, gender} = student;
console.log(name1); // undefined 
console.log(name); // john
console.log(age); // 25
console.log(gender); // male


const num = { a: 1, b: 2, c: 3};
const {a: new1, b: new2, c: new3} = num;

//console.log(a); // output : error
console.log(new1); // 1
console.log(new2); // 2

// Object Destructuring with default values

const {a,b,...rest} = { a:100,b:200,c:300,d:400,e:500};
 console.log(a); // 100
 console.log(b); // 200
 console.log(rest); // { c: 300, d: 400, e: 500 }
