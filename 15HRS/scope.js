// Methods in javascript?



function greet() {
    return `Hello! my name is ${person.name} and I am ${person.age} years old.`;

}

const person = {
    name: 'John',
    age: 30,
    greet,
    };

    console.log(person.greet());

 //       OR

    const parent = {
        name: 'John',
        age: 30,
        greet : function() {
            return `Hello! my name is ${person.name} and I am ${person.age} years old.`;
        
        }
        };

        console.log(parent.greet());
        