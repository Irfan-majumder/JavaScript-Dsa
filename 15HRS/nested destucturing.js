 /* const songs = [
    {name: "Like You", singer:"Alex", duration: 4.6 },
    {name: "Love You", singer: "john", duration: 4.8 },
    {name: "Hate You", singer: "tony", duration: 4.2 },
    {name: "dead Like You", singer: "shawn", duration: 4.6 },

 ];

 const [,,{singer}] = songs;
 console.log(singer);

 */
 const data ={
    user:{
        id :1,
        name: "John",
        age: 25,
        email: "john@gmail.com",
        address:{
            street: "123 main st",
            city: "NYC",
            state: "NY",
            zip: "10001"
            },
        hobbies: ["reading", "painting", "singing"],
        scores: {
            math:95,
            science: 98,
            cpp : 100
        },    

    },
    products : [
        {id:1, name: "Alex", price: 1000},
        {id:2, name: "John", price: 2000},
        {id:3, name: "Tony", price: 3000}
    ],
    settings: {
        darkMode : true,
        notification:{
            email:true,
            sms : false,
            push : true
        },
        languages: "English", 
    },
 };


 const {
    user: { name, age, address: { street, city, state, zip },
    hobbies,
     scores: { math, science, cpp },
     email,
 },
 products: [
    {name: product1Name, price: product1Price},
    {name: product2Name, price: product2Price},
    {name: product3Name, price: product3Price}
    ],
 settings: { darkMode, 
notification: { email: isEmail, sms, push },
languages,
 },
 } = data;

 console.log (`Name ${name}`);
 console.log (`Age ${age}`);
 console.log (`Street ${street}`);
 console.log (`City ${city}`);
 console.log (`State ${state}`);
 console.log (`Zip ${zip}`);
 console.log (`Hobbies ${hobbies}`);
 console.log (`Math Score ${math}`);
 console.log (`Science Score ${science}`);
 console.log (`C++ Score ${cpp}`);
 console.log (`Email ${email}`);
 console.log (`Product 1: ${product1Name} - ${product1Price}`);
 console.log (`Product 2: ${product2Name}- Price: ${product2Price}`);
 console.log (`Product 3: ${product3Name}- Price: ${product3Price}`);
 console.log (`Dark Mode ${darkMode}`);
 console.log (`Email Notification ${isEmail}`);
 console.log (`SMS Notification ${sms}`);
 console.log (`Push Notification ${push}`);
 console.log (`Languages ${languages}`);
