const colors = ['red', 'green', 'blue'];

colors.forEach(
    function(color, idx) 
    {
        console.log(`${idx + 1} - ${color}`);
    });


console.log("=============================")


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function compute(a, b, op) {
    return op(a, b);
}

let result1 = compute(10, 5, add);      //15
let result2 = compute(10, 5, subtract); //5

console.log(result1)
console.log(result2)


console.log("=============================")


/**
 * When the add and subtract functions are passed as arguments to the compute function - they are ___ functions.
 *      callback functions
 */

/**
 * How many times would the anonymous callback function below be called?
 *      3
*/

const flowers = ['rose', 'orchid', 'daisy'];

flowers.forEach(function(flower, idx) {
  console.log(`${idx + 1}) ${flower}`);         //3
});


console.log("=============================")


const colorss = ['red', 'green', 'blue'];

console.log('BEFORE the forEach...');

colorss.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});

console.log('AFTER the forEach...');


console.log("=============================")


console.log('Code before the asynchronous function call');

setTimeout(function() {
  console.log('Async setTimeout code')
}), 1000;

console.log('Code after the asynchronous function call');


console.log("=============================")


// Synchronous function
function getFriends() {
    return ['Fred', 'Barney'];
}

// Get the friends
let friends = getFriends();

// The friends array is ready to work with because getFriends
// is synchronous and returned the array of friends we wanted
friends.forEach(function(friend) {
    console.log(friend);
});
  

console.log("=============================")

// // asynchronous function
// function getFriendsAsync() {
//     // Using setTimeout to make getFriendsAsync
//     // behave like a long-running database operation
//     setTimeout(function() {
//         return ['Fred', 'Barney'];
//     }, 0);
// }
  
//   // Will friends have an array after this line of code runs?
// let friends = getFriendsAsync();

// // The following will cause an error because
// // friends is not an array yet
// friends.forEach(function(friend) {
//     console.log(friend);
// })  
//Running the above code will generate an error because the friends variable will not be an array of data before we call forEach on it.
console.log("Async function")

//console.log("=============================")


// Refactor to accept a callback function
// to be called when the data is ready
function getFriendsAsync(cb) {
    setTimeout(function() {
        // pass the results to the provided callback
        cb(['Async Fred', 'Async Barney']);
    }, 0);
}

    // Execute and provide it with an anonymous callback function
    // to be called by the getFriendsAsync function
getFriendsAsync(function(friends) {
    friends.forEach(function(friend) {
        console.log(friend);
    });
});


console.log("=============================")


// regular function
let squares = [1, 2, 3].map( function (x) { return x * x } );
// arrow function
let squares2 = [1, 2, 3].map(x => x * x);
console.log(squares)
console.log(squares2)


console.log("=============================")


const getGrade = score => {
    if (score === 100) return 'A+';
    score = Math.floor(score / 10);
    return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A', 'Z'][score];
};
console.log(getGrade(101))
  

console.log("=============================")


const add1 = (x, y) => { return x + y };

// Ideal single-statement arrow function
const add2 = (x, y) => x + y;

// Returns undefined (blocks are like reg functions)
const add3 = (x, y) => { x + y };

// Syntax error, must be an expression
//const add3 = (x, y) => return x + y;

console.log(add1(1,1))
console.log(add2(1,1))
console.log(add3(1,1))

console.log("=============================")

let todos = ['Buy milk', 'Mow lawn'];

// Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false});

// Wrap the implicit returned object in parens
let todoObjects = todos.map(todo => ({todo: todo, done: false}));

console.log("=============================")

//All arrow functions are expressions. 
//There's no such thing as an arrow function definition/declaration.

// Nope, syntax error (no declarations for arrow functions)
//add(x, y) => x + y;
//error    ^^^
// This is what you want - a function expression
const add4 = (x, y) => x + y;

console.log("=============================")


/**
 * Review Questions to turn in
 * In your own words describe what the term "implicit return" means.
 *  will imply you want to return and do it for you
 * Describe what a callback function is in your own words.
 *  any function that is called by another function which takes the first function as a parameter 
 */