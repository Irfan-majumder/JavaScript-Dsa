// The Rest operator is used to pass a indefinite number of arguments to a function.
// It is denoted by three dots ( ... ) and is used to pass a variable number of arguments

function user(userData) {
    console.log(userData);
}

user( 'Alex', '25', 'USA' ); // Output: Alex

function user1(...userData1) {
    console.log(userData1);
}

user1("Hamid", "35", "UAE"); // Output:  [ 'Hamid', '35', 'UAE' ]


function user2(x,...userData1) {
    console.log(x);
    console.log(userData1);
}
user2("Hamid", "35", "UAE"); // Output: x = Hamid   ...userData1 =  ["35", "UAE"]